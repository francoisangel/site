// Meta Pixel Event Types
type PixelEvent = 
  | 'ViewContent'
  | 'AddToCart'
  | 'InitiateCheckout'
  | 'AddPaymentInfo'
  | 'Purchase'
  | 'Lead'
  | 'CompleteRegistration'
  | 'Contact'
  | 'CustomizeProduct'
  | 'Schedule';

// Meta Pixel Event Parameters
interface PixelEventParams {
  content_name?: string;
  content_category?: string;
  content_ids?: string[];
  content_type?: string;
  value?: number;
  currency?: string;
  status?: string;
}

// Track page views
export const trackPageView = () => {
  if (typeof fbq !== 'undefined') {
    fbq('track', 'PageView');
  }
};

// Track custom events
export const trackEvent = (event: PixelEvent, params?: PixelEventParams) => {
  if (typeof fbq !== 'undefined') {
    fbq('track', event, params);
  }
};

// Track form submissions
export const trackFormSubmission = (formType: string) => {
  trackEvent('Lead', {
    content_category: 'Form Submission',
    content_name: formType
  });
};

// Track project views
export const trackProjectView = (projectName: string, projectType: string) => {
  trackEvent('ViewContent', {
    content_type: 'Project',
    content_name: projectName,
    content_category: projectType
  });
};

// Track contact interactions
export const trackContactInteraction = (method: string) => {
  trackEvent('Contact', {
    content_category: 'Contact',
    content_name: method
  });
};

// Track consultation bookings
export const trackConsultationBooking = () => {
  trackEvent('Schedule', {
    content_category: 'Consultation',
    content_name: 'Architecture Consultation'
  });
};