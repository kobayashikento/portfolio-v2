import React from "react";

// components

import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";
import mail from "react-useanimations/lib/mail";

// styles

import styles from "../styles/TopNavBar.module.scss";

const TopNavBar = () => {
  const renderIcons = () => {
    return (
      <div className={styles.topNavBarIcons}>
        <div
          className={styles.topNavBarIcon}
          onClick={() => {
            window.open("https://github.com/kobayashikento");
          }}
        >
          <UseAnimations
            animation={github}
            loop={true}
            strokeColor="white"
            size={28}
          />
        </div>
        <div
          className={styles.topNavBarIcon}
          onClick={() => {
            window.open("https://ca.linkedin.com/in/kento-kobayashi-1a7330120");
          }}
        >
          <UseAnimations
            animation={linkedin}
            loop={true}
            strokeColor="white"
            size={28}
          />
        </div>
        <div
          className={styles.topNavBarIcon}
          onClick={() => {
            window.location.href = "mailto:kentokobayashik@gmail.com?";
          }}
        >
          <UseAnimations animation={mail} strokeColor="white" size={28} />
        </div>
      </div>
    );
  };

  return (
    <div className={styles.topNavBarContainer}>
      <button className={styles.topNavBarNameButton}>Kento Kobayashi</button>
      {renderIcons()}
    </div>
  );
};

export default TopNavBar;
