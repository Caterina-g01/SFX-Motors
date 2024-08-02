import React, { useRef } from "react";
import s from "./styles.module.scss";
import cn from "classnames";
import TunedMoto from "../../assets/imgs/tuning.jpg";
import NoTunedMoto from "../../assets/imgs/notuning.jpg";

function TuningSlider({ isVisible }) {
  const galleryRef = useRef(null);
  const galleryResizeRef = useRef(null);

  const handleMouseMove = (event) => {
    const gallery = galleryRef.current;
    const galleryResize = galleryResizeRef.current;
    let x = event.nativeEvent.offsetX;
    galleryResize.style.width = `${x}px`;
  };

  return (
    <div className={`${s.tuningSliderContainer} ${isVisible ? s.visible : ""}`}>
      <div className={s.wrapper}>
        <div
          className={s.gallery}
          ref={galleryRef}
          onMouseMove={handleMouseMove}
        >
          <img
            src={TunedMoto}
            alt="Tuned Moto"
            className={cn(s.img, s.imgAfter)}
          />
          <div className={s.galleryResize} ref={galleryResizeRef}>
            <img
              src={NoTunedMoto}
              alt="No Tuned Moto"
              className={cn(s.img, s.imgBefore)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TuningSlider;
