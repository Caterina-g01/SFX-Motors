import React from 'react';
import s from './styles.module.scss';
import Logo from '../../assets/imgs/SFXMotorsLogo.png';
import TG from '../../assets/imgs/social/telegram.png';
import WA from '../../assets/imgs/social/whatsapp.png';
import VB from '../../assets/imgs/social/viber.png';
import NavLinkHeader from '../ui/NavLinkHeader/NavLinkHeader';
import SocialLinkHeader from '../ui/SocialLinkHeader/SocialLinkHeader';

export const Header = ({ onCatalogScroll, onPartnersScroll, onTuningSliderScroll, onContactsScroll }) => {
  return (
    <div className={s.header__container}>
      <div className={s.header__nav}>
        <div className={s.header__blockLogo}>
          <img className={s.header__logo} src={Logo} alt="Logo" />
        </div>
        
        <ul className={s.header__navList}>
          <NavLinkHeader href="#" onClick={onCatalogScroll}>Техника</NavLinkHeader>
          <NavLinkHeader href="#" onClick={onPartnersScroll}>Партнёры</NavLinkHeader>
          <NavLinkHeader href="#" onClick={onTuningSliderScroll}>Тюнинг</NavLinkHeader>
          <NavLinkHeader href="#">Отзывы</NavLinkHeader>
          <NavLinkHeader href="#">Блог</NavLinkHeader>
          <NavLinkHeader href="#">О нас</NavLinkHeader>
          <NavLinkHeader href="#" onClick={onContactsScroll}>Контакты</NavLinkHeader>
        </ul>
        
        <div className={s.header__navSocialList}>
          <SocialLinkHeader
            href=""
			className={s.logoImg}
            src={VB}
            alt="ViberLogo"
            width="25vw"
            height="25vw"
          />
          <SocialLinkHeader
            href=""
			className={s.logoImg}
            src={TG}
            alt="TelegramLogo"
            width="25vw"
            height="25vw"
          />
          <SocialLinkHeader
            href=""
			className={s.logoImg}
            src={WA}
            alt="WhatsAppLogo"
            width="25vw"
            height="25vw"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
