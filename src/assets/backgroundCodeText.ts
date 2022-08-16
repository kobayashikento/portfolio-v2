export const precode = [
  { indent: 0, content: ` ` },
  {
    indent: 0,
    content: "const trans1 = (x, y) => translate3d(${x / 50}px,${y / 50}px,0);",
  },
  {
    indent: 0,
    content:
      "const trans2 = (x, y) => translate3d(${x / 8 + 35}px,${y / 8 - 130}px,0);",
  },
  {
    indent: 0,
    content:
      "const trans3 = (x, y) => translate3d(${x / 6 - 20}px,${y / 6 - 90}px,0);",
  },
  { indent: 0, content: ` ` },
];

export const preaboutcode = [
  { indent: 0, content: ` ` },
  { indent: 0, content: `importPic` },
  { indent: 0, content: `import * as easings from 'd3-ease';` },
  { indent: 0, content: ` ` },
];

export const preexpcode = [
  {
    indent: 0,
    content: `import HoverVideoPlayer from 'react-hover-video-player';`,
  },
  { indent: 0, content: ` ` },
  {
    indent: 0,
    content: `import expconVid from '../assets/videos/expcon_demo.mov';`,
  },
  {
    indent: 0,
    content: `import pauseVideo from '../assets/videos/expcon_demo_edit.png;`,
  },
  { indent: 0, content: ` ` },
];

export const expcode = [
  { indent: 0, content: ` ` },
  { indent: 2, content: `const videoSpring = useSpring({` },
  {
    indent: 3,
    content: `to: { transform: props.render ? "scale(1) translate(0%, -50%)" :`,
  },
  {
    indent: 4,
    content: `"scale(0.7) translate(10% ,-50%)", opacity: props.render ? 1 : 0 },`,
  },
  {
    indent: 3,
    content: `from: { right: "8%", top: "50%", transform: "scale(0.6) translate(10% ,-50%)",`,
  },
  { indent: 4, content: `transformOrigin: "top center 20px", opacity: 0 },` },
  {
    indent: 3,
    content: `config: { duration: 1200, easing: easings.easeQuadOut },`,
  },
  { indent: 3, content: `delay: 400` },
  { indent: 2, content: `})` },
  { indent: 0, content: ` ` },
  { indent: 2, content: `return (` },
  { indent: 0, content: ` ` },
  {
    indent: 3,
    content: `<animated.div style={{ overflow: "hidden", display: "flex", height: "100%">`,
  },
  { indent: 4, content: `expcon` },
  { indent: 4, content: `website` },
  { indent: 4, content: `skills` },
  { indent: 4, content: `<button className="exploreBtn">Explore</button>` },
  { indent: 3, content: `</aniamted.div>` },
  { indent: 0, content: ` ` },
  { indent: 3, content: `<animated.div style={videoSpring}>` },
  { indent: 4, content: `<animated.div style={videoOverlay} />` },
  { indent: 4, content: `<HoverVideoPlayer` },
  { indent: 5, content: `videoSrc={expconVid}` },
  { indent: 5, content: `pausedOverlay={<img src={pauseVideo}` },
  { indent: 4, content: `/>` },
  { indent: 3, content: `</aniamted.div>` },
  { indent: 0, content: ` ` },
  { indent: 2, content: `)` },
  { indent: 1, content: `}` },
];

export const code = [
  { indent: 0, content: ` ` },
  { indent: 2, content: `carouselState` },
  { indent: 2, content: `const [prop, set] = useSpring(() => (` },
  { indent: 3, content: `xyConfig` },
  { indent: 2, content: `);` },
  { indent: 0, content: ` ` },
  { indent: 2, content: `React.useEffect(() => {` },
  { indent: 3, content: `const timer = setTimeout(() => {` },
  { indent: 4, content: `setCarouselIndex` },
  { indent: 3, content: `}, 4000);` },
  { indent: 3, content: `return () => clearTimeout(timer);` },
  { indent: 2, content: `}, [carouselIndex, setCarouselIndex]);` },
  { indent: 0, content: ` ` },
  { indent: 2, content: `return ( ` },
  {
    indent: 3,
    content: `<div onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>`,
  },
  { indent: 4, content: `<animated.div style={carouselSprings}>` },
  { indent: 5, content: `trans1` },
  { indent: 4, content: `</animated.div>` },
  { indent: 4, content: `<animated.div style={carouselSprings}>` },
  { indent: 5, content: `trans2` },
  { indent: 4, content: `</animated.div>` },
  { indent: 4, content: `<animated.div style={carouselSprings}>` },
  { indent: 5, content: `trans3` },
  { indent: 4, content: `</animated.div>` },
  { indent: 3, content: `</div>` },
  { indent: 2, content: `)` },
  { indent: 1, content: `}` },
  { indent: 0, content: ` ` },
];

export const aboutCode = [
  { indent: 0, content: ` ` },
  { indent: 2, content: `const imageSpring = useSpring({` },
  {
    indent: 3,
    content: `to: { transform: props.render ? "scale(1) translate(0%, -50%)" :`,
  },
  {
    indent: 4,
    content: `"scale(0.7) translate(10% ,-50%)", opacity: props.render ? 1 : 0 },`,
  },
  {
    indent: 3,
    content: `from: { right: "8%", top: "50%", transform: "scale(0.6) translate(10% ,-50%)",`,
  },
  { indent: 4, content: `transformOrigin: "top center 20px", opacity: 0 },` },
  {
    indent: 3,
    content: `config: { duration: 1200, easing: easings.easeQuadOut },`,
  },
  { indent: 3, content: `delay: 400` },
  { indent: 2, content: `})` },
  { indent: 0, content: ` ` },
  { indent: 2, content: `return (` },
  { indent: 0, content: ` ` },
  {
    indent: 3,
    content: `<animated.div style={{ overflow: "hidden", display: "flex", height: "100%">`,
  },
  { indent: 4, content: `about` },
  { indent: 4, content: `developer` },
  { indent: 4, content: `uoft` },
  { indent: 4, content: `<button className="moreBtn">More</button>` },
  { indent: 3, content: `</aniamted.div>` },
  { indent: 0, content: ` ` },
  { indent: 3, content: `<animated.div style={imageSpring}>` },
  { indent: 4, content: `<animated.div style={videoOverlay} />` },
  {
    indent: 4,
    content: `<img src={aboutPic} style={{height: "100%", width: "100%", borderRadius: "2px"}} />`,
  },
  {
    indent: 4,
    content: `<Typography style={{ fontFamily: "'Abril Fatface', cursive", fontSize: "7rem" }}>`,
  },
  { indent: 5, content: `02` },
  { indent: 4, content: `</Typography>` },
  { indent: 4, content: `/>` },
  { indent: 3, content: `</aniamted.div>` },
  { indent: 0, content: ` ` },
  { indent: 2, content: `)` },
  { indent: 1, content: `}` },
];

export const codeSections = [
  { content: `PortfolioLandingPage` },
  { content: `AboutSection` },
  { content: `MyHealthyFamilySection` },
  { content: `ExpconSection` },
  { content: `UAssistSection` },
  { content: `ContactSection` },
];
