import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const BackgroundSVG = () => (
  <Svg viewBox="0 0 1600 800">
    <Path fill="#2c29dd" d="M0 0h1600v800H0z" />
    <G stroke="#14d0dd" strokeWidth={2.6} strokeOpacity={0.6}>
      <Circle fill="#2c29dd" r={1800} />
      <Circle fill="#2e33dd" r={1700} />
      <Circle fill="#2f3ddd" r={1600} />
      <Circle fill="#3148de" r={1500} />
      <Circle fill="#3352de" r={1400} />
      <Circle fill="#345cde" r={1300} />
      <Circle fill="#3666de" r={1200} />
      <Circle fill="#3870de" r={1100} />
      <Circle fill="#397ade" r={1000} />
      <Circle fill="#3b85df" r={900} />
      <Circle fill="#3c8fdf" r={800} />
      <Circle fill="#3e99df" r={700} />
      <Circle fill="#40a3df" r={600} />
      <Circle fill="#41addf" r={500} />
      <Circle fill="#43b7df" r={400} />
      <Circle fill="#45c2e0" r={300} />
      <Circle fill="#46cce0" r={200} />
      <Circle fill="#48d6e0" r={100} />
    </G>
  </Svg>
);

export default BackgroundSVG;
