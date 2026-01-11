import React, { type FC, useState } from "react";
import style from "./FloatingButton.module.css";
import "../../../app/index.css";

interface FloatingButtonProps {
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const FloatingButton: FC<FloatingButtonProps> = ({ setIsModal }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClickButton = () => {
    setIsClicked(!isClicked);
  };

  const handleClickUpdateDate = () => {
    setIsClicked(false);
    setIsModal(true);
  };

  return (
    <div className={style.floating_button_area}>
      <button
        id={style.floating_button}
        className={"center line_none"}
        onClick={handleClickButton}
      >
        ?
      </button>
      {isClicked && (
        <div className={style.help_area}>
          <ul>
            <li onClick={handleClickUpdateDate}>Update Date</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default FloatingButton;
