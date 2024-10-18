import { useState } from "react";
import styles from "@/components/publications/Card.module.css";
import Overlay from "@/components/publications/Overlay";

const Card = ({ title, text, image, link }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    document.body.style.overflow = "hidden";
    setOpen(true);
  };

  const handleClose = () => {
    document.body.style.overflow = "visible";
    setOpen(false);
  };

  return (
    <>
      {open && <Overlay handleClose={handleClose} link={link} />}
      <div className={`${styles.cardWarp}`} onClick={handleClickOpen}>
        <div
          className={`${styles.card} w-[16rem] h-[30rem] md:w-[18rem] md:h-[32rem] `}
        >
          <img
            className={`${styles.cardBg} object-cover hover:scale-110 transition-all duration-300 ease-in-out`}
            src={image}
          />
          <div className={styles.cardInfo}>
            <h3 className={`${styles.title} text-3xl md:text-[32px] mb-5`}>
              {title}
            </h3>
            <p className={`${styles.content} md:text-[18px] text-colorF`}>
              {text}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
