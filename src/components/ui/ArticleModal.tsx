import React, { useState, useEffect, useCallback, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const PDF_URL = 'https://francoisangel.github.io/content//Square-Way-Lisboete-Magazine.pdf';
const TOTAL_PAGES = 2;

// Shared PDF load promise — starts as soon as this module is imported
// (triggered by ArticleSection entering the page, not the modal opening)
let pdfLoadPromise: Promise<any> | null = null;

function getPdfDoc(): Promise<any> {
  if (!pdfLoadPromise) {
    pdfLoadPromise = (async () => {
      const pdfjsLib = await import('pdfjs-dist');
      pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.mjs',
        import.meta.url
      ).href;
      return pdfjsLib.getDocument({
        url: PDF_URL,
        cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist/cmaps/',
        cMapPacked: true,
      }).promise;
    })();
  }
  return pdfLoadPromise;
}

// Call this to kick off the PDF load in the background
export function prefetchPdf() {
  getPdfDoc();
}

// Cache rendered page images as data-URLs so re-opening the modal is instant
const pageCache = new Map<number, string>();

async function renderPageToDataUrl(pageNum: number, width: number): Promise<string> {
  const cached = pageCache.get(pageNum);
  if (cached) return cached;

  const doc = await getPdfDoc();
  const page = await doc.getPage(pageNum);
  const viewport = page.getViewport({ scale: 1 });
  const scale = width / viewport.width;
  const scaledViewport = page.getViewport({ scale });

  const canvas = document.createElement('canvas');
  const deviceRatio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = scaledViewport.width * deviceRatio;
  canvas.height = scaledViewport.height * deviceRatio;
  const ctx = canvas.getContext('2d')!;
  ctx.scale(deviceRatio, deviceRatio);

  await page.render({ canvasContext: ctx, viewport: scaledViewport }).promise;

  const dataUrl = canvas.toDataURL('image/jpeg', 0.92);
  pageCache.set(pageNum, dataUrl);
  return dataUrl;
}

interface PageImageProps {
  pageNum: number;
  containerWidth: number;
}

const PageImage: React.FC<PageImageProps> = ({ pageNum, containerWidth }) => {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    if (containerWidth === 0) return;
    const cached = pageCache.get(pageNum);
    if (cached) { setSrc(cached); return; }
    setSrc(null);
    let cancelled = false;
    renderPageToDataUrl(pageNum, containerWidth).then((url) => {
      if (!cancelled) setSrc(url);
    });
    return () => { cancelled = true; };
  }, [pageNum, containerWidth]);

  return (
    <div className="relative w-full">
      {!src && (
        <div className="flex items-center justify-center bg-[#f0ede8] min-h-48 w-full">
          <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-700 rounded-full animate-spin" />
        </div>
      )}
      {src && (
        <img
          src={src}
          alt={`Article — page ${pageNum}`}
          className="w-full block"
          draggable={false}
        />
      )}
    </div>
  );
};

// Pre-render both pages in the background at a given width
async function prerenderAll(width: number) {
  for (let i = 1; i <= TOTAL_PAGES; i++) {
    if (!pageCache.has(i)) {
      renderPageToDataUrl(i, width).catch(() => {});
    }
  }
}

interface ArticleModalProps {
  onClose: () => void;
  containerWidth: number;
}

const ArticleModal: React.FC<ArticleModalProps> = ({ onClose, containerWidth }) => {
  const [visible, setVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [slideWidth, setSlideWidth] = useState(0);
  const clipRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(onClose, 300);
  }, [onClose]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight' && currentPage < TOTAL_PAGES) setCurrentPage(p => p + 1);
      if (e.key === 'ArrowLeft' && currentPage > 1) setCurrentPage(p => p - 1);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handleClose, currentPage]);

  // Measure the actual pixel width of the clipping container
  useEffect(() => {
    const el = clipRef.current;
    if (!el) return;
    const measure = () => setSlideWidth(el.clientWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const goNext = useCallback(() => setCurrentPage(p => Math.min(TOTAL_PAGES, p + 1)), []);
  const goPrev = useCallback(() => setCurrentPage(p => Math.max(1, p - 1)), []);

  // Wheel: horizontal scroll or vertical scroll → page turn on desktop
  const onWheel = useCallback((e: React.WheelEvent) => {
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (delta > 30) goNext();
    else if (delta < -30) goPrev();
  }, [goNext, goPrev]);

  // Touch swipe
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    dirLocked.current = null;
  }, []);

  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    // Only trigger if horizontal movement dominates and is large enough
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  }, [goNext, goPrev]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal shell */}
      <div
        className={`relative flex flex-col bg-white shadow-2xl transition-transform duration-300 ease-out mx-3 sm:mx-6
          w-full max-w-[96vw] lg:max-w-5xl xl:max-w-6xl
          max-h-[94dvh] sm:max-h-[92vh]
          ${visible ? 'translate-y-0 scale-100' : 'translate-y-4 scale-[0.98]'}`}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-gray-100 shrink-0">
          <div className="flex items-center gap-4">
            <span className="text-xs tracking-[0.2em] uppercase text-gray-400 hidden sm:block">
              Lisboète Magazine — Printemps 2026
            </span>
            <span className="text-xs tracking-[0.2em] uppercase text-gray-400 sm:hidden">
              Lisboète Magazine
            </span>
            <span className="text-xs text-gray-300 hidden sm:block">·</span>
            <span className="text-xs text-gray-400 hidden sm:block">
              {currentPage} / {TOTAL_PAGES}
            </span>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors rounded-sm"
            aria-label="Fermer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Page area — clipping container */}
        <div
          ref={clipRef}
          className="flex-1 overflow-hidden bg-[#f0ede8] relative"
          onWheel={onWheel}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Sliding strip */}
          <div
            className="flex h-full transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(${-(currentPage - 1) * slideWidth}px)` }}
          >
            {Array.from({ length: TOTAL_PAGES }, (_, i) => (
              <div
                key={i + 1}
                className="overflow-y-auto h-full flex-none"
                style={{ width: slideWidth > 0 ? slideWidth : '100%' }}
              >
                <div className="px-4 sm:px-8 py-6 sm:py-8">
                  <PageImage pageNum={i + 1} containerWidth={containerWidth} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="shrink-0 border-t border-gray-100 bg-white px-5 sm:px-7 py-3 flex items-center justify-between gap-4">
          <button
            onClick={goPrev}
            disabled={currentPage === 1}
            className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={16} />
            <span className="hidden sm:inline">Page précédente</span>
            <span className="sm:hidden">Préc.</span>
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: TOTAL_PAGES }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`h-2 rounded-full transition-all duration-300 ${currentPage === i + 1 ? 'bg-gray-900 w-5' : 'bg-gray-300 w-2 hover:bg-gray-500'}`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            disabled={currentPage === TOTAL_PAGES}
            className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <span className="hidden sm:inline">Page suivante</span>
            <span className="sm:hidden">Suiv.</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

// Wrapper exported from About.tsx — handles prefetch + modal trigger
export function useArticlePrefetch(sectionRef: React.RefObject<HTMLElement | null>) {
  const [modalWidth, setModalWidth] = useState(0);

  useEffect(() => {
    // Compute the expected modal inner width (modal max-width minus padding)
    const compute = () => {
      const vw = window.innerWidth;
      // max-w-5xl = 1024px, xl:max-w-6xl = 1152px, minus 2×32px padding
      const maxW = vw >= 1280 ? 1152 : vw >= 1024 ? 1024 : vw * 0.96;
      setModalWidth(Math.round(Math.min(maxW, vw * 0.96) - 64));
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);

  useEffect(() => {
    if (!sectionRef.current || modalWidth === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Start PDF load + pre-render both pages as soon as section is visible
          prefetchPdf();
          prerenderAll(modalWidth);
          obs.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, [sectionRef, modalWidth]);

  return modalWidth;
}

export default ArticleModal;
