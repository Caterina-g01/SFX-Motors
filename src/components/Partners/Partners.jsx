import React from "react";
import s from "./styles.module.scss";



export function Partners({ isVisible }) {

    return (
        <div className={`${s.partnersContainer} ${isVisible ? s.visible : ''}`}>
            <div className={s.partnersWhy}><span className={s.partnersWhyUnderlined}>Партнёры&nbsp;</span>- нам доверяют и мы сотрудничаем напрямую. Почему это важно?</div>
            <ul className={s.partnersWhyList}>
                <li>Возможность предварительной доставки техники к партнёрам</li>
                <li>Наши партнёры выступают гарантами совершения сделки</li>
                <li>Сервис и ремонт техники от профессионалов своего дела</li>
            </ul>
        </div>
    )
}

export default Partners;
