import React, { useState } from "react";
import { useGesture } from "react-use-gesture";
import "./App.css";
import BackgroundCode from "./containers/BackgroundCode";
import LandingPage from "./containers/LandingPage";
import SideNavBar from "./containers/SideNavBar";
import TopNavBar from "./containers/TopNavBar";

const SECTIONS = [
  "landing",
  "aboutme",
  "myhealthy",
  "expcon",
  "uassist",
  "contact",
];

const clamp = (value: number, min: number, max: number) =>
  Math.max(Math.min(max, value), min);

const calc = (x: number, y: number) => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
];

function App() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [clearCode, setClearCode] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleIndexChange = (index: number) => {
    setClearCode(true);
    setCurrentIndex(index);
  };

  const bind = useGesture({
    onWheel: ({ event, last, memo: wait = false, direction }) => {
      if (modalOpen) {
        return;
      } else if (!last) {
        if (!wait) {
          return true;
        } else return false;
      } else {
        return false;
      }
    },
    onDrag: ({ swipe }) => {
      if (modalOpen) {
        return;
      } else {
        setCurrentIndex((p) => Math.min(Math.max(0, p - swipe[1]), 4));
      }
    },
    // onMove: ({ xy }) => {
    //   if (!modalOpen) {
    //     setXYPos({ x: xy[0].toFixed(0), y: xy[1].toFixed(0) });
    //     set({ xy: calc(xy[0], xy[1]) });
    //   }
    // },
  });

  return (
    <div className="App">
      <header className="App-header">
        <TopNavBar />
        <SideNavBar
          currentIndex={currentIndex}
          setCurrentIndex={handleIndexChange}
          sections={SECTIONS}
          modalOpen={modalOpen}
        />
        <BackgroundCode
          clear={clearCode}
          currentIndex={currentIndex}
          setClear={() => setClearCode(false)}
        />
        <div
          {...bind}
          className="slider"
          style={{ transform: `translateY(${-currentIndex * 100}vh)` }}
        >
          <LandingPage shouldRender={currentIndex === 0} renderSVG={true} />
        </div>
      </header>
    </div>
  );
}

export default App;
