import React, { useRef, useEffect, useState } from "react";
import s from "./styles.module.scss";
import TG from "../../assets/imgs/social/telegram.png";
import WA from "../../assets/imgs/social/whatsapp.png";
import VB from "../../assets/imgs/social/viber.png";
import INST from "../../assets/imgs/social/instagram.png";
import VK from "../../assets/imgs/social/vk.png";
import YT from "../../assets/imgs/social/youtube.png";
import SocialLinkHeader from "../ui/SocialLinkHeader/SocialLinkHeader";

function Contacts({ isVisible }) {
  const contactsRef = useRef(null);
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust as needed
    );

    if (contactsRef.current) {
      observer.observe(contactsRef.current);
    }

    return () => {
      if (contactsRef.current) {
        observer.unobserve(contactsRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={contactsRef}
      className={`${s.contactsContainer} ${isInViewport ? s.visible : ""}`}
    >
      <div className={`${s.contactsContactsSection} ${isInViewport ? s.visible : ""}`}>
        <div className={s.contactsContacts}>
          <div className={s.contactsContactsTitle}>Cвязаться с нами:</div>
          <div className={s.contactsContactsNumbers}>
            <p className={s.contactsContactsNumber}>
              Номер в РБ :&nbsp;
              <a className={s.contactsContactsNumberLink} href="tel:+375293703366">
                +375 (29) 370-33-66
              </a>
            </p>
            <p className={s.contactsContactsNumber}>
              Номер в РФ :&nbsp;
              <a className={s.contactsContactsNumberLink} href="tel:+79938851003">
                +7 (993) 885-10-03
              </a>
            </p>
          </div>
          <div className={s.contactsContactsLogos}>
            <div className={s.contactsContactsMessangers}>
              <SocialLinkHeader
                href=""
                src={VB}
                alt="ViberLogo"
                width="50vw"
                height="50vw"
              />
              <SocialLinkHeader
                href=""
                src={TG}
                alt="TelegramLogo"
                width="50vw"
                height="50vw"
              />
              <SocialLinkHeader
                href=""
                src={WA}
                alt="WhatsAppLogo"
                width="50vw"
                height="50vw"
              />
            </div>
          </div>
        </div>
        
        <div className={s.contactsContactsSocial}>
          <div>Мы в соцсетях:</div>
          <div className={s.contactsContactsSocialLogos}>
            <SocialLinkHeader
              href="https://www.youtube.com/@sfxmotors"
              src={YT}
              alt="YouTubeLogo"
              width="50vw"
              height="50vw"
            />
            <SocialLinkHeader
              href="https://www.instagram.com/sfxmotors/"
              src={INST}
              alt="InstagramLogo"
              width="50vw"
              height="50vw"
            />
            <SocialLinkHeader
              href=""
              src={VK}
              alt="VKLogo"
              width="50vw"
              height="50vw"
            />
          </div>
        </div>
      </div>
      
      <div className={s.contactsVideoSection}>
        <div className={s.contactsYouTube}>
          <iframe
            src="https://www.youtube.com/embed/sejWzQgF9zY"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: "55vw", height: "35vw" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
