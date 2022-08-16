import React from "react";

// components

import { animated, Spring } from "react-spring";

// styles

import styles from "../styles/SideNavBar.module.scss";

type Props = {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  sections: string[];
  modalOpen: boolean;
};

const SideNavBar = (props: Props) => {
  const { currentIndex, setCurrentIndex, sections, modalOpen } = props;

  return (
    <div className={styles.sideNavBarContainer}>
      {sections.map((item, index) => {
        const isAdjacent = Math.abs(currentIndex - index) === 1;
        const isOn = index === currentIndex;

        return (
          <div
            className={styles.sideNavBarSingleBarContainer}
            onClick={() => setCurrentIndex(index)}
            key={`sidebar-${item}`}
          >
            <Spring
              to={{
                width: isOn ? "64px" : isAdjacent ? "40px" : "28px",
              }}
            >
              {(innerProp) => (
                <animated.div style={innerProp}>
                  <div className={styles.sideNavBarSingleBar} />
                </animated.div>
              )}
            </Spring>
          </div>
        );
      })}
    </div>
  );
};

export default SideNavBar;
