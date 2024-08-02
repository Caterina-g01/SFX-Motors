import React, { useState, useEffect } from "react";
import s from "./styles.module.scss";
import TG from '../../assets/imgs/social/telegram.png';
import WA from '../../assets/imgs/social/whatsapp.png';
import VB from '../../assets/imgs/social/viber.png';
import INST from '../../assets/imgs/social/instagram.png';
import VK from '../../assets/imgs/social/vk.png';
import YT from '../../assets/imgs/social/youtube.png';
import SocialLinkHeader from "../ui/SocialLinkHeader/SocialLinkHeader";

function Contacts({ isVisible }) {
    return(
        <div className={`${s.contactsContainer} ${isVisible ? s.visible : ''}`}>
            <div className={s.contactsContactsSection}>
            <div className={s.contactsContacts}>
                <div className={s.contactsContactsTitle}>Cвязаться с нами:</div>
                <p>+375 (29) 370-33-66</p>
                <p>+7 (993) 884-10-03</p>
                <div className={s.contactsContactsLogos}>
                    <div>Мы в соцсетях:</div>
                <div className={s.contactsContactsMessangers}>
          <SocialLinkHeader href="" src={VB} alt="ViberLogo" />
          <SocialLinkHeader href="" src={TG} alt="TelegramLogo" />
          <SocialLinkHeader href="" src={WA} alt="WhatsAppLogo" />
                </div>
                <div className={s.contactsContactsSocial}>
            <SocialLinkHeader href="" src={YT} alt="YouTubeLogo" />
            <SocialLinkHeader href="" src={INST} alt="InstagramLogo" />
          <SocialLinkHeader href="" src={VK} alt="VKLogo" />
            </div>
            </div>
            </div>
            </div>
            <div className={s.contactsVideoSection}>
    <div className={s.contactsYouTube}>
        <iframe width="762" height="430" src="https://www.youtube.com/embed/sejWzQgF9zY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>

        </div>
    )
}

export default Contacts;