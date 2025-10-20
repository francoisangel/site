import React from 'react';
import { Link } from '../ui/Link';
import { Instagram, Linkedin, Facebook, Heart } from 'lucide-react';
import { useTranslation } from '../../translations';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">SQUARE WAY</h3>
            <p className="text-gray-600 mb-4">
              {t('footer.tagline')}
            </p>
            <p className="text-gray-600">
              Rua Jorge Alves 28, Loja<br />
              1299-783 Lisbon, Portugal
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.navigation')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                  {t('navigation.home')}
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-600 hover:text-gray-900 transition-colors">
                  {t('navigation.projects')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  {t('navigation.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  {t('navigation.contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <p className="text-gray-600 mb-2">+351 913 077 000</p>
            <p className="text-gray-600 mb-4">
              <a href="mailto:francoisangel@square-way.com" className="hover:text-gray-900 transition-colors">
                francoisangel@square-way.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.followUs')}</h3>
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://www.instagram.com/square_way_lisbon" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Instagram size={20} className="mr-2" />
                <span>Instagram</span>
              </a>
              <a 
                href="https://www.linkedin.com/company/square-way-lisbon/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Linkedin size={20} className="mr-2" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://www.facebook.com/people/Square-Way/100087793055768/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Facebook size={20} className="mr-2" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 py-8 text-center text-gray-600">
          <p className="text-sm mb-2">© {currentYear} Square Way. {t('footer.rights')}</p>
          <a 
            href="https://www.vasseo.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center text-sm hover:text-gray-900 transition-colors"
          >
            {t('footer.createdBy')} <Heart size={14} className="mx-1 text-[#1F2937] fill-[#1F2937]" /> by Vasseo
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
