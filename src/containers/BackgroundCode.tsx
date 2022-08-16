import React, { useState } from "react";
import { animated, useSpring } from "react-spring";

// import typing animation

import Typist from "react-typist";
import "react-typist/dist/Typist.css";

// assets

import {
  aboutCode,
  code,
  codeSections,
  expcode,
  preaboutcode,
  precode,
  preexpcode,
} from "../assets/backgroundCodeText";

// styles

import styles from "../styles/BackgroundCode.module.scss";

const FONT_COLOR = "rgba(255,255,255,0.4)";

type Props = {
  clear: boolean;
  currentIndex: number;
  setClear: () => void;
};

const BackgroundCode = (props: Props) => {
  const { clear, currentIndex, setClear } = props;

  const [stateTypeDone, setStateTypeDone] = useState(false);
  const [xyTypeDone, setXYTypeDone] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const [prop, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  const [xyPos, setXYPos] = React.useState({ x: 0, y: 0 });

  //   const bind = useGesture({
  //     onWheel: ({ event, last, memo: wait = false, direction }) => {
  //       if (props.modalOpen) {
  //       } else if (!last) {
  //         const s = lethargy.check(event);
  //         if (s) {
  //           if (!wait) {
  //             if ((i) => clamp(i - s, 0, slides.length - 1) === 1) {
  //               if (direction[1] === 1) {
  //                 setLandingSVG(false);
  //               }
  //             }
  //             setTimeout(() => {
  //               setIndex((i) => clamp(i - s, 0, slides.length - 1));
  //             }, 0);
  //             return true;
  //           }
  //         } else return false;
  //       } else {
  //         return false;
  //       }
  //     },
  //     onDrag: ({ swipe }) => {
  //       if (props.modalOpen) {
  //         return;
  //       } else {
  //         setIndex((p) => Math.min(Math.max(0, p - swipe[1]), 4));
  //       }
  //     },
  //     onMove: ({ xy }) => {
  //       if (!props.modalOpen) {
  //         setXYPos({ x: xy[0].toFixed(0), y: xy[1].toFixed(0) });
  //         set({ xy: calc(xy[0], xy[1]) });
  //       }
  //     },
  //   });

  const trans1 = (x: number, y: number) =>
    `translate3d(${-x / 40}px,${-y / 40}px,0)`;

  const makeExconPreCodeAni = () => {
    return preexpcode.map((snippet, index) => {
      return (
        <Typist
          avgTypingDelay={5}
          startDelay={100 * index}
          cursor={{ show: false }}
        >
          <span
            style={{
              color: FONT_COLOR,
              marginLeft: `${snippet.indent}rem`,
              whiteSpace: "pre",
            }}
          >
            {snippet.content}
          </span>
        </Typist>
      );
    });
  };

  const makeLandingPreCodeAni = () => {
    return precode.map((snippet, index) => {
      return (
        <Typist
          avgTypingDelay={5}
          startDelay={100 * index}
          cursor={{ show: false }}
        >
          <span
            style={{
              color: FONT_COLOR,
              marginLeft: `${snippet.indent}rem`,
              whiteSpace: "pre",
            }}
          >
            {snippet.content}
          </span>
        </Typist>
      );
    });
  };

  const makeAboutPreCodeAni = () => {
    return preaboutcode.map((snippet, index) => {
      return snippet.content === "importPic" ? (
        <Typist
          avgTypingDelay={5}
          startDelay={100 * index}
          cursor={{ show: false }}
        >
          <span
            style={{
              color: FONT_COLOR,
              marginLeft: `${snippet.indent}rem`,
              whiteSpace: "pre",
            }}
          >
            {`import `}
          </span>
          <span
            style={{
              color: "rgb(255, 77, 90)",
              marginLeft: `${snippet.indent}rem`,
              whiteSpace: "pre",
            }}
          >
            {currentIndex === 1
              ? `aboutPic`
              : currentIndex === 2
              ? `myhealthyPic`
              : currentIndex === 4
              ? `uAssistPic`
              : `torontoPic`}
          </span>
          <span
            style={{
              color: FONT_COLOR,
              marginLeft: `${snippet.indent}rem`,
              whiteSpace: "pre",
            }}
          >
            {` from '../Assets/pictures/`}
          </span>
          <span
            style={{
              color: "rgb(255, 77, 90)",
              marginLeft: `${snippet.indent}rem`,
              whiteSpace: "pre",
            }}
          >
            {currentIndex === 1
              ? `about_pic`
              : currentIndex === 2
              ? `myhealthy_pic`
              : currentIndex === 4
              ? `uAssist_pic`
              : `toronto_pic`}
          </span>
          <span
            style={{
              color: FONT_COLOR,
              marginLeft: `${snippet.indent}rem`,
              whiteSpace: "pre",
            }}
          >
            {`.png';`}
          </span>
        </Typist>
      ) : (
        <Typist
          avgTypingDelay={5}
          startDelay={100 * index}
          cursor={{ show: false }}
        >
          <span
            style={{
              color: FONT_COLOR,
              marginLeft: `${snippet.indent}rem`,
              whiteSpace: "pre",
            }}
          >
            {snippet.content}
          </span>
        </Typist>
      );
    });
  };

  const renderPreCodeAnimation = (): JSX.Element[] | null => {
    if (clear) {
      setClear();
      return null;
    }

    if (currentIndex === 3) {
      return makeExconPreCodeAni();
    }

    if (currentIndex === 0) {
      return makeLandingPreCodeAni();
    }

    return makeAboutPreCodeAni();
  };

  const makeExconCodeAni = () => {
    return expcode.map((snippet, index) => {
      return snippet.content === `expcon` ? (
        <Typist
          avgTypingDelay={5}
          startDelay={100 * index}
          cursor={{ show: false }}
        >
          <span
            style={{
              color: FONT_COLOR,
              marginLeft: `${snippet.indent}rem`,
              whiteSpace: "pre",
            }}
          >
            {`<Typography style={{ fontFamily: "FuturaM", fontSize: "5.2rem" }}>`}
          </span>
          <span style={{ color: "rgb(255, 77, 90)", whiteSpace: "pre" }}>
            {`EXP|CON`}
          </span>
          <span style={{ color: FONT_COLOR, whiteSpace: "pre" }}>
            {`</Typography>`}
          </span>
        </Typist>
      ) : snippet.content === `website` ? (
        <Typist
          avgTypingDelay={5}
          startDelay={100 * index}
          cursor={{ show: false }}
        >
          <span
            style={{
              color: FONT_COLOR,
              marginLeft: `${snippet.indent}rem`,
              whiteSpace: "pre",
            }}
          >
            {`<Typography style={{ fontFamily: "FuturaB", fontSize: "1.5rem" }}>`}
          </span>
          <span style={{ color: "rgb(255, 77, 90)", whiteSpace: "pre" }}>
            {`website`}
          </span>
          <span style={{ color: FONT_COLOR, whiteSpace: "pre" }}>
            {`</Typography>`}
          </span>
        </Typist>
      ) : snippet.content === `skills` ? (
        <Typist
          avgTypingDelay={5}
          startDelay={100 * index}
          cursor={{ show: false }}
        >
          <span
            style={{
              color: FONT_COLOR,
              marginLeft: `${snippet.indent}rem`,
              whiteSpace: "pre",
            }}
          >
            {`<Typography>`}
          </span>
          <span style={{ color: "rgb(255, 77, 90)", whiteSpace: "pre" }}>
            {`React, Firebase, Redux, JavaScript`}
          </span>
          <span style={{ color: FONT_COLOR, whiteSpace: "pre" }}>
            {`</Typography>`}
          </span>
        </Typist>
      ) : (
        <Typist
          avgTypingDelay={5}
          startDelay={100 * index}
          cursor={{ show: false }}
        >
          <span
            style={{
              color: FONT_COLOR,
              marginLeft: `${snippet.indent}rem`,
              whiteSpace: "pre",
            }}
          >
            {snippet.content}
          </span>
        </Typist>
      );
    });
  };

  const makeLandingCodeAni = () => {
    return code.map((snippet, index) => {
      return snippet.content === "carouselState" ? (
        <div style={{ display: "flex" }}>
          <Typist
            avgTypingDelay={5}
            startDelay={100 * index}
            cursor={{ show: false }}
            onTypingDone={() => setStateTypeDone(true)}
          >
            <span
              style={{
                color: FONT_COLOR,
                marginLeft: `${snippet.indent}rem`,
              }}
            >
              {`const [carouselIndex, setCarouselIndex] = React.useState(`}
            </span>
          </Typist>
          <span
            style={{
              display: stateTypeDone ? "" : "none",
              color: "rgb(255, 77, 90)",
            }}
          >
            {carouselIndex}
          </span>
          <span
            style={{
              display: stateTypeDone ? "" : "none",
              color: FONT_COLOR,
            }}
          >
            {`);`}
          </span>
        </div>
      ) : snippet.content === "xyConfig" ? (
        <div style={{ display: "flex" }}>
          <Typist
            avgTypingDelay={5}
            startDelay={100 * index}
            cursor={{ show: false }}
            onTypingDone={() => setXYTypeDone(true)}
          >
            <span
              style={{
                color: FONT_COLOR,
                marginLeft: `${snippet.indent}rem`,
              }}
            >
              {`{ xy: [`}
            </span>
          </Typist>
          <span
            style={{
              display: xyTypeDone ? "" : "none",
              color: "rgb(255, 77, 90)",
            }}
          >
            {`${xyPos.x}, ${xyPos.y}`}
          </span>
          <span
            style={{
              display: xyTypeDone ? "" : "none",
              color: FONT_COLOR,
            }}
          >
            {`], config: { mass: 10, tension: 550, friction: 140 } })`}
          </span>
        </div>
      ) : snippet.content === "setCarouselIndex" ? (
        <div style={{ color: FONT_COLOR }}>
          <Typist
            avgTypingDelay={5}
            startDelay={100 * index}
            cursor={{ show: false }}
          >
            <span
              style={{ marginLeft: `${snippet.indent}rem`, whiteSpace: "pre" }}
            >
              {`setCarouselIndex((carouselIndex + 1) % 3);`}
            </span>
          </Typist>
        </div>
      ) : snippet.content === "trans1" ? (
        <div
          style={{
            color: carouselIndex === 0 ? "rgb(255, 77, 90)" : FONT_COLOR,
          }}
        >
          <Typist
            avgTypingDelay={5}
            startDelay={100 * index}
            cursor={{ show: false }}
          >
            <span
              style={{ marginLeft: `${snippet.indent}rem`, whiteSpace: "pre" }}
            >
              {`<animated.div style={{ transform: prop.xy.interpolate(trans1)} />`}
            </span>
          </Typist>
        </div>
      ) : snippet.content === "trans2" ? (
        <div
          style={{
            color: carouselIndex === 1 ? "rgb(255, 77, 90)" : FONT_COLOR,
          }}
        >
          <Typist
            avgTypingDelay={5}
            startDelay={100 * index}
            cursor={{ show: false }}
          >
            <span
              style={{ marginLeft: `${snippet.indent}rem`, whiteSpace: "pre" }}
            >
              {`<animated.div style={{ transform: prop.xy.interpolate(trans2)} />`}
            </span>
          </Typist>
        </div>
      ) : snippet.content === "trans3" ? (
        <div
          style={{
            color: carouselIndex === 2 ? "rgb(255, 77, 90)" : FONT_COLOR,
          }}
        >
          <Typist
            avgTypingDelay={5}
            startDelay={100 * index}
            cursor={{ show: false }}
          >
            <span
              style={{ marginLeft: `${snippet.indent}rem`, whiteSpace: "pre" }}
            >
              {`<animated.div style={{ transform: prop.xy.interpolate(trans3)} />`}
            </span>
          </Typist>
        </div>
      ) : (
        <Typist
          avgTypingDelay={5}
          startDelay={100 * index}
          cursor={{ show: false }}
        >
          <span
            style={{
              color: FONT_COLOR,
              marginLeft: `${snippet.indent}rem`,
              whiteSpace: "pre",
            }}
          >
            {snippet.content}
          </span>
        </Typist>
      );
    });
  };

  const makeAboutCodeAni = () => {
    return aboutCode.map((snippet, index) => {
      return snippet.content === `about` ? (
        <Typist
          avgTypingDelay={5}
          startDelay={100 * index}
          cursor={{ show: false }}
        >
          <span
            style={{
              color: FONT_COLOR,
              marginLeft: `${snippet.indent}rem`,
              whiteSpace: "pre",
            }}
          >
            {`<Typography style={{ fontFamily: "FuturaM", fontSize: "5.2rem" }}>`}
          </span>
          <span style={{ color: "rgb(255, 77, 90)", whiteSpace: "pre" }}>
            {currentIndex === 1
              ? `About`
              : currentIndex === 2
              ? `MyHealthyFamily`
              : currentIndex === 4
              ? `UAssist`
              : `Get In Touch`}
          </span>
          <span style={{ color: FONT_COLOR, whiteSpace: "pre" }}>
            {`</Typography>`}
          </span>
        </Typist>
      ) : snippet.content === `developer` ? (
        <Typist
          avgTypingDelay={5}
          startDelay={100 * index}
          cursor={{ show: false }}
        >
          <span
            style={{
              color: FONT_COLOR,
              marginLeft: `${snippet.indent}rem`,
              whiteSpace: "pre",
            }}
          >
            {`<Typography style={{ fontFamily: "FuturaB", fontSize: "1.5rem" }}>`}
          </span>
          <span style={{ color: "rgb(255, 77, 90)", whiteSpace: "pre" }}>
            {currentIndex === 1
              ? `Front-End Developer`
              : currentIndex === 2
              ? `e-commerce website`
              : currentIndex === 4
              ? `website`
              : `Leave a message`}
          </span>
          <span style={{ color: FONT_COLOR, whiteSpace: "pre" }}>
            {`</Typography>`}
          </span>
        </Typist>
      ) : snippet.content === `uoft` ? (
        <Typist
          avgTypingDelay={5}
          startDelay={100 * index}
          cursor={{ show: false }}
        >
          <span
            style={{
              color: FONT_COLOR,
              marginLeft: `${snippet.indent}rem`,
              whiteSpace: "pre",
            }}
          >
            {`<Typography>`}
          </span>
          <span style={{ color: "rgb(255, 77, 90)", whiteSpace: "pre" }}>
            {``}
            {currentIndex === 1
              ? `U of T Grad: Mathematics and Statistics`
              : currentIndex === 2
              ? `Shopify, React, Storefront API`
              : currentIndex === 4
              ? `MangoDB, Express, Bootstrap, JavaScript`
              : `Based in Toronto, Fueled by coffee :)`}
          </span>
          <span style={{ color: FONT_COLOR, whiteSpace: "pre" }}>
            {`</Typography>`}
          </span>
        </Typist>
      ) : snippet.content === `02` ? (
        <Typist
          avgTypingDelay={5}
          startDelay={100 * index}
          cursor={{ show: false }}
        >
          <span
            style={{
              color: "rgb(255, 77, 90)",
              marginLeft: `${snippet.indent}rem`,
              whiteSpace: "pre",
            }}
          >
            {currentIndex === 1
              ? `01`
              : currentIndex === 2
              ? `02`
              : currentIndex === 4
              ? `04`
              : `05`}
          </span>
        </Typist>
      ) : (
        <Typist
          avgTypingDelay={5}
          startDelay={100 * index}
          cursor={{ show: false }}
        >
          <span
            style={{
              color: FONT_COLOR,
              marginLeft: `${snippet.indent}rem`,
              whiteSpace: "pre",
            }}
          >
            {snippet.content}
          </span>
        </Typist>
      );
    });
  };

  const renderCodeAnimation = (): JSX.Element[] | null => {
    if (clear) {
      setClear();
      return null;
    }

    if (currentIndex === 3) {
      return makeExconCodeAni();
    }

    if (currentIndex === 0) {
      return makeLandingCodeAni();
    }

    return makeAboutCodeAni();
  };

  return (
    <animated.div
      className={styles.backgroundCodeContainer}
      style={{
        transform: prop.xy.to(trans1),
      }}
    >
      <Typist avgTypingDelay={5} startDelay={0} cursor={{ show: false }}>
        <span style={{ color: FONT_COLOR }}>
          {`import React from 'react';`}
        </span>
      </Typist>
      <Typist avgTypingDelay={5} startDelay={50} cursor={{ show: false }}>
        <span style={{ color: FONT_COLOR }}>
          {`import { useSpring, animated } from 'react-spring';`}
        </span>
      </Typist>
      {/* {renderPreCodeAnimation()} */}
      {/* <div style={{ display: "flex" }}>
        <Typist avgTypingDelay={5} startDelay={500} cursor={{ show: false }}>
          <span
            style={{
              marginLeft: `${1}rem`,
              whiteSpace: "pre",
              color: FONT_COLOR,
            }}
          >
            {`const `}
          </span>
        </Typist>
        {clear ? null : (
          <Typist avgTypingDelay={5} startDelay={520} cursor={{ show: false }}>
            <span style={{ whiteSpace: "pre", color: "rgb(255, 77, 90)" }}>
              {codeSections[currentIndex].content}
            </span>
          </Typist>
        )}
        <Typist avgTypingDelay={5} startDelay={550} cursor={{ show: false }}>
          <span style={{ whiteSpace: "pre", color: FONT_COLOR }}>
            {` = (props) => {`}
          </span>
        </Typist>
      </div> */}
      {/* {renderCodeAnimation()} */}
      <div style={{ display: "flex" }}>
        <Typist avgTypingDelay={5} startDelay={2500} cursor={{ show: false }}>
          <span
            style={{
              marginLeft: `${0}rem`,
              whiteSpace: "pre",
              color: FONT_COLOR,
            }}
          >
            {`export default React.memo(`}
          </span>
        </Typist>
        {clear ? null : (
          <Typist avgTypingDelay={5} startDelay={2520} cursor={{ show: false }}>
            <span style={{ whiteSpace: "pre", color: "rgb(255, 77, 90)" }}>
              {codeSections[currentIndex].content}
            </span>
          </Typist>
        )}
        <Typist avgTypingDelay={5} startDelay={2550} cursor={{ show: true }}>
          <span style={{ whiteSpace: "pre", color: FONT_COLOR }}>{`);`}</span>
        </Typist>
      </div>
    </animated.div>
  );
};

export default BackgroundCode;
