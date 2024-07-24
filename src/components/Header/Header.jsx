import s from './styles.module.scss';
import Logo from '../../assets/imgs/SFXMotorsLogo.png';
import TG from '../../assets/imgs/social/telegram.png';
import WA from '../../assets/imgs/social/whatsapp.png';
import VB from '../../assets/imgs/social/viber.png';

export const Header = () => {
	return <div className={s.header__container}>
		<div className={s.header__nav}>
			<div className={s.header__blockLogo}><img className={s.header__logo} src={Logo} alt="Logo" /></div>
			
			<ul className={s.header__navList}>
				<li><a className={s.header__navItem} href="">Техника</a></li>
				<li><a className={s.header__navItem} href="">Партнёры</a></li>
				<li><a className={s.header__navItem} href="">Тюнинг</a></li>
				<li><a className={s.header__navItem} href="">Отзывы</a></li>
				<li><a className={s.header__navItem} href="">Блог</a></li>
				<li><a className={s.header__navItem} href="">О нас</a></li>
				<li><a className={s.header__navItem} href="">Контакты</a></li>
			</ul>
			<div className={s.header__navSocialList}>
			<a href=""><img className={s.header__navSocialListItem} src={VB} alt="ViberLogo" /></a>
			<a href=""><img className={s.header__navSocialListItem} src={TG} alt="TelegramLogo" /></a>
			<a href=""><img className={s.header__navSocialListItem} src={WA} alt="WhatsAppLogo" /></a>
			</div>
			
		</div>
	</div>;
 };
 