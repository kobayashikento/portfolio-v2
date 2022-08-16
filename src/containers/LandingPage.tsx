import React, { useEffect, useRef, useState } from "react";

import Vivus from "vivus";

import { useSpring, animated } from "react-spring";

import browser_coding_svg from "../assets/resources/browser_coding.svg";
import coding_curly_svg from "../assets/resources/coding_curly.svg";
import coding_curly_blink_svg from "../assets/resources/coding_curly_blink.svg";
import application_dev_code_svg from "../assets/resources/application_dev_code.svg";
import application_development from "../assets/resources/application_dev.svg";
import web_design_svg from "../assets/resources/web_design.svg";
import web_design_txt_svg from "../assets/resources/web_design_txt.svg";
import web_design_sun_svg from "../assets/resources/web_design_sun.svg";
import web_design_sun_container_svg from "../assets/resources/web_design_sun_container.svg";
import web_design_arrow_svg from "../assets/resources/web_design_arrow.svg";

import styles from "../styles/LandingPage.module.scss";

import "../Assets/styles/landingStyle.css";
import "../Assets/styles/landingStyle.scss";

import * as easings from "d3-ease";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const calc = (x: number, y: number) => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
];
const trans1 = (x: number, y: number) =>
  `translate3d(${x / 50 + 15}px,${y / 50}px,0)`;
const trans2 = (x: number, y: number) =>
  `translate3d(${x / 8 + 35}px,${y / 8 - 130}px,0)`;
const trans3 = (x: number, y: number) =>
  `translate3d(${x / 6 - 20}px,${y / 6 - 90}px,0)`;
const trans5 = (x: number, y: number) =>
  `translate3d(${x / 8 - 5}px,${y / 8 - 10}px,0)`;
const trans6 = (x: number, y: number) =>
  `translate3d(${x / 8 + 10}px,${y / 8 - 10}px,0)`;
const trans7 = (x: number, y: number) =>
  `translate3d(${x / 6 - 10}px,${y / 6 - 10}px,0)`;

const SVG_ITEMS: { path: string; play: number; reverse: number }[] = [
  {
    path: browser_coding_svg,
    play: 3.5,
    reverse: -2,
  },
  {
    path: coding_curly_svg,
    play: 2,
    reverse: -2,
  },
  { path: coding_curly_blink_svg, play: 2, reverse: -2 },
  { path: web_design_svg, play: 2, reverse: -2 },
  { path: web_design_sun_container_svg, play: 2, reverse: -2 },
  { path: web_design_sun_svg, play: 2, reverse: -2 },
  { path: web_design_txt_svg, play: 2, reverse: -2 },
  { path: web_design_arrow_svg, play: 2, reverse: -2 },
  { path: application_development, play: 3.5, reverse: -2 },
  { path: application_dev_code_svg, play: 2, reverse: -2 },
];

type Props = {
  renderSVG: boolean;
  shouldRender: boolean;
};

const LandingPage = (props: Props) => {
  const { renderSVG, shouldRender } = props;

  const refs = useRef<any[]>([]);

  const [startBlink, setBlink] = useState(false);
  const [vivusItems, setVivusItems] = useState<Vivus[]>();
  const [carouselIndex, setCarouselIndex] = useState(0);

  const [prop, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  useEffect(() => {
    const newVivusItems: Vivus[] = [];

    for (let i = 0; i < refs.current.length; i++) {
      if (refs.current[i]) {
        newVivusItems.push(
          new Vivus(refs.current[i], {
            file: SVG_ITEMS[i].path,
            type: `delayed`,
            start: `manual`,
            animTimingFunction: Vivus.EASE_IN,
          })
        );
      }

      setVivusItems(newVivusItems);
    }
  }, []);

  useEffect(() => {
    if (!renderSVG) {
      vivusItems?.forEach((item, index) => {
        item.play(SVG_ITEMS[index].reverse);
      });
    }
  }, [renderSVG, vivusItems]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCarouselIndex((carouselIndex + 1) % 3);
    }, 4000);
    return () => clearTimeout(timer);
  }, [carouselIndex, setCarouselIndex]);

  const handlePlay = () => {
    if (renderSVG) {
      vivusItems?.forEach((item, index) => {
        item.play(SVG_ITEMS[index].play);
      });
    }
  };

  const springFirstText = useSpring({
    to: { transform: shouldRender ? `translateX(0%)` : `translateX(-100%)` },
    from: { transform: `translateX(-100%)` },
    delay: 200,
    config: { duration: 1000, easing: easings.easeCubicOut },
  });

  const springSecondText = useSpring({
    to: { transform: shouldRender ? `translateX(0%)` : `translateX(-100%)` },
    from: { transform: `translateX(-100%)` },
    config: { duration: 500 },
    delay: 400,
    onRest: () => handlePlay(),
  });

  const springLine = useSpring({
    to: {
      transform: shouldRender ? `translateX(0rem)` : `translateX(-6.5rem)`,
    },
    from: { width: "5.5rem", transform: `translateX(-6.5rem)` },
    delay: 100,
  });

  const springLineMove = useSpring({
    to: {
      transform: shouldRender ? `translateX(0rem)` : `translateX(-9.5rem)`,
    },
    from: { width: "5.5rem", transform: `translateX(-9.5rem)` },
    delay: 300,
  });

  const springHorizontalLineMove = useSpring({
    to: {
      transform: shouldRender
        ? `rotate(90deg) translate(0,0)`
        : `rotate(90deg) translate(-6.5rem,0)`,
      opacity: shouldRender ? 1 : 0,
    },
    from: {
      width: "2.2rem",
      transform: `rotate(90deg) translate(-6.5rem,0)`,
      opacity: 0,
    },
    delay: 300,
  });

  const springSecond = useSpring({
    to: { transform: shouldRender ? `translateY(0%)` : `translateY(100%)` },
    from: { transform: `translateY(100%)` },
    config: { duration: 400 },
    delay: 500,
  });

  const carouselCodeSprings = useSpring({
    to: {
      width: carouselIndex === 0 ? "45%" : "26%",
      zIndex: carouselIndex === 0 ? 10 : -1,
      transform:
        carouselIndex === 0
          ? "translateX(40%)"
          : carouselIndex === 1
          ? "translateX(200%)"
          : "translateX(0%)",
      height: carouselIndex === 0 ? "0%" : "57%",
    },
    from: {
      width: "45%",
      zIndex: 10,
      height: "0%",
      transform: "translateX(40%)",
    },
  });

  const carouselDesignSprings = useSpring({
    to: {
      width: carouselIndex === 1 ? "45%" : "26%",
      zIndex: carouselIndex === 1 ? 10 : -1,
      transform:
        carouselIndex === 1
          ? "translateX(50%)"
          : carouselIndex === 2
          ? "translateX(200%)"
          : "translateX(30%)",
      height: carouselIndex === 1 ? "30%" : "90%",
    },
    from: {
      width: "45%",
      height: "90%",
      zIndex: -1,
      transform: "translateX(-100%)",
    },
  });

  const carouselMobileSprings = useSpring({
    to: {
      width: carouselIndex === 2 ? "45%" : "26%",
      zIndex: carouselIndex === 2 ? 10 : -1,
      transform:
        carouselIndex === 2
          ? "translateX(50%)"
          : carouselIndex === 1
          ? "translateX(30%)"
          : "translateX(200%)",
      height: carouselIndex === 2 ? "30%" : "90%",
    },
    from: {
      width: "45%",
      zIndex: -1,
      transform: "translateX(100%)",
      height: "90%",
    },
  });

  const barSpring = useSpring({
    to: { transform: "scaleY(1)" },
    from: { transform: "scaleY(1)" },
  });

  const aniSpring = useSpring({
    to: {
      transform: "rotate(-90deg) translate(-12px, -3px)",
    },
    from: {
      transform: "rotate(-90deg) translate(-12px, -3px)",
      position: "absolute",
    },
  });

  const springThird = useSpring({
    to: {
      transform: shouldRender ? ` translateY(0px)` : ` translateY(-110%)`,
      opacity: shouldRender ? 1 : 0,
    },
    from: { transform: ` translateY(110%)`, opacity: 0 },
    config: {
      duration: 600,
      mass: 1,
      tension: 280,
      friction: 60,
    },
    delay: 950,
  });

  const renderTextContainer = () => {
    return (
      <div className={styles.landingPageInnerContainer}>
        <div className={styles.landingPageNameContainer}>
          <animated.div
            style={{
              overflow: "hidden",
              transform: prop.xy.to(trans1),
            }}
          >
            <animated.div style={springFirstText}>
              <span className={styles.nameText}>KENTO</span>
            </animated.div>
          </animated.div>
          <animated.div
            style={{
              overflow: "hidden",
              transform: prop.xy.to(trans1),
            }}
          >
            <animated.div style={springSecondText}>
              <span className={styles.nameText}>KOBAYASHI</span>
            </animated.div>
          </animated.div>
        </div>
        <div style={{ overflow: "hidden", marginTop: "1%" }}>
          <animated.div style={springLine}>
            <div
              style={{
                height: "5px",
                background: "#ff4d5a",
                borderRadius: "4px",
                marginBottom: "0.5rem",
                marginTop: "0.7rem",
              }}
            />
          </animated.div>
          <animated.div style={{ ...springLineMove, marginLeft: "3.3rem" }}>
            <div
              style={{
                height: "5px",
                background: "#ff4d5a",
                borderRadius: "4px",
                marginBottom: "1.2rem",
                marginTop: "0.7rem",
              }}
            />
          </animated.div>
        </div>
        <div style={{ display: "flex", marginTop: "1%", overflow: "hidden" }}>
          <div style={{ overflow: "hidden" }}>
            <animated.div style={springSecond}>
              <span className={styles.developerText}>developer</span>
            </animated.div>
          </div>
          <animated.div style={{ ...springHorizontalLineMove }}>
            <div
              style={{
                height: "5px",
                background: "#ff4d5a",
                borderRadius: "4px",
                marginBottom: "0.5rem",
                marginTop: "0.7rem",
              }}
            />
          </animated.div>
          <div style={{ overflow: "hidden" }}>
            <animated.div style={{ ...springSecond, marginLeft: "1.1rem" }}>
              <span className={styles.designerText}>designer</span>
            </animated.div>
          </div>
        </div>
      </div>
    );
  };

  const LG_MIN = useMediaQuery("(min-width:1200px)", { noSsr: true });

  return LG_MIN ? (
    <div
      className={styles.landingPageContainer}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      {renderTextContainer()}
      <div
        style={{
          display: "flex",
          width: "40vw",
          height: "100vh",
          alignItems: "center",
          position: "absolute",
          right: "0%",
          zIndex: -1,
          marginTop: "10%",
        }}
      >
        <animated.div
          style={{ ...carouselCodeSprings, zIndex: 2, position: "absolute" }}
        >
          <animated.div
            style={{
              transform: prop.xy.to(trans2),
              position: "absolute",
              zIndex: 10,
            }}
            ref={(ref) => {
              refs.current[0] = ref;
            }}
          ></animated.div>
          <animated.div
            style={{
              transform: prop.xy.to(trans3),
              position: "absolute",
              zIndex: 10,
            }}
            ref={(ref) => {
              refs.current[1] = ref;
            }}
          ></animated.div>
          <animated.div
            className={startBlink ? "blink" : ""}
            style={{
              transform: prop.xy.to(trans3),
              position: "absolute",
              zIndex: 10,
            }}
            ref={(ref) => {
              refs.current[2] = ref;
            }}
          ></animated.div>
        </animated.div>
        <animated.div
          style={{ ...carouselDesignSprings, zIndex: 2, position: "absolute" }}
        >
          <animated.div
            style={{
              transform: prop.xy.to(trans7),
              position: "absolute",
              zIndex: 10,
            }}
            ref={(ref) => {
              refs.current[3] = ref;
            }}
          ></animated.div>
          <animated.div
            style={{
              transform: prop.xy.to(trans7),
              position: "absolute",
              overflow: "hidden",
              zIndex: 10,
            }}
            ref={(ref) => {
              refs.current[4] = ref;
            }}
          >
            <animated.div
              className="rotate"
              style={{
                transform: prop.xy.to(trans6),
                position: "absolute",
                zIndex: 10,
              }}
              ref={(ref) => {
                refs.current[5] = ref;
              }}
            ></animated.div>
          </animated.div>
          <animated.div
            style={{
              transform: prop.xy.to(trans5),
              position: "absolute",
              overflow: "hidden",
              zIndex: 10,
            }}
            ref={(ref) => {
              refs.current[6] = ref;
            }}
          ></animated.div>
          <animated.div
            className={carouselIndex === 1 ? "" : ""}
            style={{
              transform: prop.xy.to(trans6),
              position: "absolute",
              zIndex: 10,
            }}
            ref={(ref) => {
              refs.current[7] = ref;
            }}
          ></animated.div>
        </animated.div>
        <animated.div
          style={{ ...carouselMobileSprings, zIndex: 2, position: "absolute" }}
        >
          <animated.div
            style={{
              transform: prop.xy.to(trans7),
              position: "absolute",
              zIndex: 10,
            }}
            ref={(ref) => {
              refs.current[8] = ref;
            }}
          ></animated.div>
          <animated.div
            style={{
              transform: prop.xy.to(trans5),
              position: "absolute",
              zIndex: 10,
            }}
            ref={(ref) => {
              refs.current[9] = ref;
            }}
          ></animated.div>
        </animated.div>
      </div>
      <animated.div
        style={{
          bottom: "0px",
          left: "3%",
          zIndex: 5,
          ...springThird,
          cursor: "pointer",
        }}
      >
        <animated.div style={{ ...aniSpring, position: "absolute" }}>
          <span
            style={{
              textAlign: "left",
              fontSize: `16px`,
              fontStyle: "normal",
              fontFamily: "FuturaM",
              color: "white",
              transformOrigin: "bottom",
            }}
          >
            scroll
          </span>
        </animated.div>
        <animated.div style={barSpring}>
          <div className="loading_line_wrapper">
            <div className="loading_line">
              <div className="loading_line_inner loading_line_inner--1"></div>
              <div className="loading_line_inner loading_line_inner--2"></div>
            </div>
          </div>
          <div style={{ height: "65px", background: "#333", width: "2px" }} />
        </animated.div>
      </animated.div>
    </div>
  ) : (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        position: "relative",
        justifyContent: "center",
      }}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "4.4vmax",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 100,
          }}
        >
          <animated.div
            style={{
              overflow: "hidden",
              transform: prop.xy.to(trans1),
            }}
          >
            <animated.div style={springFirstText}>
              <Typography
                style={{
                  color: "white",
                  fontFamily: "FuturaM",
                  letterSpacing: "0.7rem",
                  textShadow: "0 10px 30px rgba(2, 11, 22, 0.5)",
                  fontWeight: "bold",
                  fontSize:
                    "calc(32px + (44 - 32) * ((100vw - 300px) / (1200 - 300)))",
                }}
              >
                KENTO
              </Typography>
            </animated.div>
          </animated.div>
          <animated.div
            style={{
              overflow: "hidden",
              transform: prop.xy.to(trans1),
            }}
          >
            <animated.div style={springSecondText}>
              <Typography
                style={{
                  color: "white",
                  fontFamily: "FuturaM",
                  letterSpacing: "0.7rem",
                  textShadow: "0 10px 30px rgba(2, 11, 22, 0.5)",
                  fontWeight: "bold",
                  fontSize:
                    "calc(32px + (44 - 32) * ((100vw - 300px) / (1200 - 300)))",
                }}
              >
                KOBAYASHI
              </Typography>
            </animated.div>
          </animated.div>
        </div>
        <div style={{ overflow: "hidden", marginTop: "1%" }}>
          <animated.div style={springLine}>
            <Divider
              style={{
                height: "5px",
                background: "#ff4d5a",
                borderRadius: "4px",
                marginBottom: "0.5rem",
                marginTop: "0.7rem",
              }}
            />
          </animated.div>
          <animated.div style={{ ...springLineMove, marginLeft: "3.3rem" }}>
            <Divider
              style={{
                height: "5px",
                background: "#ff4d5a",
                borderRadius: "4px",
                marginBottom: "1.2rem",
                marginTop: "0.7rem",
              }}
            />
          </animated.div>
        </div>
        <div style={{ display: "flex", marginTop: "1%" }}>
          <div style={{ overflow: "hidden" }}>
            <animated.div style={springSecond}>
              <Typography
                style={{
                  color: "white",
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: "500",
                  fontSize: "1rem",
                  letterSpacing: "0.5rem",
                  textShadow: "0 10px 30px rgba(2, 11, 22, 0.5)",
                }}
              >
                developer
              </Typography>
            </animated.div>
          </div>
          <animated.div style={{ ...springHorizontalLineMove }}>
            <Divider
              style={{
                height: "5px",
                background: "#ff4d5a",
                borderRadius: "4px",
                marginBottom: "0.5rem",
                marginTop: "0.7rem",
              }}
            />
          </animated.div>
          <div style={{ overflow: "hidden" }}>
            <animated.div style={{ ...springSecond, marginLeft: "0.4rem" }}>
              <Typography
                style={{
                  width: "max-content",
                  color: "white",
                  fontFamily: "FuturaB",
                  fontSize: "1rem",
                  letterSpacing: "0.5rem",
                  textShadow: "0 10px 30px rgba(2, 11, 22, 0.5)",
                }}
              >
                designer
              </Typography>
            </animated.div>
          </div>
        </div>
      </animated.div>
      <div
        style={{
          display: "none",
          width: "100%",
          height: "20%",
          position: "absolute",
          zIndex: -1,
          bottom: "0px",
        }}
      >
        <animated.div style={{ ...carouselCodeSprings, zIndex: 2 }}>
          <animated.div
            style={{
              transform: prop.xy.to(trans2),
              position: "absolute",
              zIndex: 10,
            }}
            ref={browser_coding_ref}
          ></animated.div>
          <animated.div
            style={{
              transform: prop.xy.to(trans3),
              position: "absolute",
              zIndex: 10,
            }}
            ref={coding_curly_ref}
          ></animated.div>
          <animated.div
            className={startBlink ? "blink" : ""}
            style={{
              transform: prop.xy.to(trans3),
              position: "absolute",
              zIndex: 10,
            }}
            ref={coding_curly_blink_ref}
          ></animated.div>
        </animated.div>
        <animated.div style={{ ...carouselDesignSprings, zIndex: 2 }}>
          <animated.div
            style={{
              transform: prop.xy.to(trans7),
              position: "absolute",
              zIndex: 10,
            }}
            ref={web_design_ref}
          ></animated.div>
          <animated.div
            style={{
              transform: prop.xy.to(trans7),
              position: "absolute",
              overflow: "hidden",
              zIndex: 10,
            }}
            ref={web_design_sun_container_ref}
          >
            <animated.div
              className="rotate"
              style={{
                transform: prop.xy.to(trans6),
                position: "absolute",
                zIndex: 10,
              }}
              ref={web_design_sun_ref}
            ></animated.div>
          </animated.div>
          <animated.div
            style={{
              transform: prop.xy.to(trans5),
              position: "absolute",
              overflow: "hidden",
              zIndex: 10,
            }}
            ref={web_design_txt_ref}
          ></animated.div>
          <animated.div
            className={props.carouselIndex === 1 ? "" : ""}
            style={{
              transform: prop.xy.to(trans6),
              position: "absolute",
              zIndex: 10,
            }}
            ref={web_design_arrow_ref}
          ></animated.div>
        </animated.div>
        <animated.div style={{ ...carouselMobileSprings, zIndex: 2 }}>
          <animated.div
            style={{
              transform: prop.xy.to(trans7),
              position: "absolute",
              zIndex: 10,
            }}
            ref={application_dev_ref}
          ></animated.div>
          <animated.div
            style={{
              transform: prop.xy.to(trans5),
              position: "absolute",
              zIndex: 10,
            }}
            ref={application_dev_code_ref}
          ></animated.div>
        </animated.div>
      </div>
    </div>
  );
};

export default LandingPage;
