import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';
import MenuSheet from './MenuSheet';

const Header = () => {
    const { t } = useTranslation();

    return (
        <header className='container'>
            <nav className='flex justify-between items-center'>
                <Link to={'/'}>
                    <img src="/logo.svg" width={80} height={80} alt="" />
                </Link>
                <ul className=' items-center gap-10 hidden md:flex'>
                    <li className='text-[18px] font-normal'><Link to="/aboutcourse">{t('navText.text1')}</Link></li>
                    <li className='text-[18px] font-normal'><Link to="/aboutus">{t('navText.text2')}</Link></li>
                    <li className='text-[18px] font-normal'><Link to="/">{t('navText.text3')}</Link></li>
                    <li className='text-[18px] font-normal'><Link to="/contact">{t('navText.text4')}</Link></li>
                </ul>
                <div className='hidden md:flex'>
                    <LanguageSelector />
                </div>
                <div className='blok md:hidden'>
                    <MenuSheet />
                </div>
            </nav>
        </header>
    );
};

export default Header;
