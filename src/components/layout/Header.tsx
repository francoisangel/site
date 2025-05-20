import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LanguageSelector from "../ui/LanguageSelector";
import { Link } from "../ui/Link";
import { useTranslation } from "../../translations";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-full">
        <div className="flex items-center justify-between h-full">
          <Link
            to="/"
            className="flex items-center space-x-3 text-2xl font-bold text-gray-800 tracking-tighter cursor-none"
          >
            <img
              src="https://lh3.googleusercontent.com/pw/AP1GczMo_P9nuEAc2tG47sxG11wHgxNgwXHmHiANuiZYL2W9XyOhEJRtQtxxBIsuU7vc6njaSkKTyMmWHzSFoG9wC0meXtw_-Tk260Mo0Spxhp5K7ptzFeOP-g5HYY09COAXfyuielL4dk46H65JB138sVK1=w288-h289-s-no-gm?authuser=1"
              alt="Square Way Logo"
              className="w-12 h-12 object-contain"
            />
            <span>SQUARE WAY</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-800 hover:text-gray-600 transition-colors cursor-none"
            >
              {t("navigation.home")}
            </Link>
            <Link
              to="/projects"
              className="text-gray-800 hover:text-gray-600 transition-colors cursor-none"
            >
              {t("navigation.projects")}
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:text-gray-600 transition-colors cursor-none"
            >
              {t("navigation.about")}
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 hover:text-gray-600 transition-colors cursor-none"
            >
              {t("navigation.contact")}
            </Link>
            <div className="cursor-none">
              <LanguageSelector />
            </div>
          </nav>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden w-10 h-10 relative focus:outline-none cursor-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span
                className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 mb-1 ${
                  mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 mt-1 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="container mx-auto px-4 py-20">
          <nav className="flex flex-col space-y-8">
            <Link
              to="/"
              className="text-2xl font-medium text-gray-800 hover:text-gray-600 transition-colors cursor-none"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("navigation.home")}
            </Link>
            <Link
              to="/projects"
              className="text-2xl font-medium text-gray-800 hover:text-gray-600 transition-colors cursor-none"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("navigation.projects")}
            </Link>
            <Link
              to="/about"
              className="text-2xl font-medium text-gray-800 hover:text-gray-600 transition-colors cursor-none"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("navigation.about")}
            </Link>
            <Link
              to="/contact"
              className="text-2xl font-medium text-gray-800 hover:text-gray-600 transition-colors cursor-none"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("navigation.contact")}
            </Link>
            <div className="pt-4 cursor-none">
              <LanguageSelector />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
