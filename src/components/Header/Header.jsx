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
				<li className={s.header__navItem}>Техника</li>
				<li className={s.header__navItem}>Партнёры</li>
				<li className={s.header__navItem}>Тюнинг</li>
				<li className={s.header__navItem}>Отзывы</li>
				<li className={s.header__navItem}>Блог</li>
				<li className={s.header__navItem}>О нас</li>
			</ul>
			<div className={s.header__navSocialList}>
				<img className={s.header__navSocialListItem} src={VB} alt="ViberLogo" />
				<img className={s.header__navSocialListItem} src={TG} alt="TelegramLogo" />
				<img className={s.header__navSocialListItem} src={WA} alt="WhatsAppLogo" />
			</div>
			
		</div>
	</div>;
 };
 