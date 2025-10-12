
import React from 'react';
import { Place } from '../types';
import { useTranslation } from './i18n/LanguageContext';

interface FooterLinkProps {
    children: React.ReactNode;
    onClick: () => void;
}
const FooterLink: React.FC<FooterLinkProps> = ({ children, onClick }) => (
  <li>
    <a href="#" onClick={(e) => { e.preventDefault(); onClick(); }} className="text-gray-500 hover:text-gray-900 transition-colors duration-300">
      {children}
    </a>
  </li>
);

interface FooterProps {
    navigateTo: (page: string, id?: string, mainCategory?: Place['mainCategory'], query?: string, slug?: string) => void;
    onOpenReportModal: () => void;
}

const Footer: React.FC<FooterProps> = ({ navigateTo, onOpenReportModal }) => {
  const { t } = useTranslation();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-1">
             <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home')}} className="text-2xl font-extrabold text-slate-800">
              Salut <span className="text-sky-500">Annecy</span>
            </a>
            <p className="mt-4 text-gray-500 text-sm">
              {t('footer.subtitle')}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">{t('footer.about')}</h3>
            <ul className="mt-4 space-y-3">
              <FooterLink onClick={() => navigateTo('static-page', undefined, undefined, undefined, 'qui-sommes-nous')}>{t('footer.about_us')}</FooterLink>
              <FooterLink onClick={() => navigateTo('static-page', undefined, undefined, undefined, 'presse')}>{t('footer.press')}</FooterLink>
              <FooterLink onClick={() => navigateTo('static-page', undefined, undefined, undefined, 'contact')}>{t('footer.contact')}</FooterLink>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">{t('footer.legal')}</h3>
            <ul className="mt-4 space-y-3">
              <FooterLink onClick={() => navigateTo('static-page', undefined, undefined, undefined, 'cgu')}>{t('footer.cgu')}</FooterLink>
              <FooterLink onClick={() => navigateTo('static-page', undefined, undefined, undefined, 'cgv')}>{t('footer.cgv')}</FooterLink>
              <FooterLink onClick={() => navigateTo('static-page', undefined, undefined, undefined, 'confidentialite')}>{t('footer.privacy')}</FooterLink>
              <FooterLink onClick={() => navigateTo('static-page', undefined, undefined, undefined, 'mentions-legales')}>{t('footer.legal_mentions')}</FooterLink>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">{t('footer.support')}</h3>
            <ul className="mt-4 space-y-3">
              <FooterLink onClick={() => navigateTo('static-page', undefined, undefined, undefined, 'faq')}>{t('footer.faq')}</FooterLink>
              <FooterLink onClick={onOpenReportModal}>{t('footer.report')}</FooterLink>
              <FooterLink onClick={() => {}}>{t('footer.cookies')}</FooterLink>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">{t('footer.pro')}</h3>
            <ul className="mt-4 space-y-3">
              <FooterLink onClick={() => navigateTo('espace-pro')}>{t('footer.pro_space')}</FooterLink>
              <FooterLink onClick={() => {}}>{t('footer.offers')}</FooterLink>
              <FooterLink onClick={() => {}}>{t('footer.ads')}</FooterLink>
              <FooterLink onClick={() => {}}>{t('footer.partner')}</FooterLink>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
