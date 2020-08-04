import React from "react";
import { View } from "react-native";
import { Svg, Circle, Text as SVGText } from "react-native-svg";

const CircularProgress = ({
  size,
  strokeWidth,
  bgColor,
  pgColor,
  progress,
  textSize,
  textColor,
  text,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circum = radius * 2 * Math.PI;
  const svgProgress = 100 - progress;

  return (
    <View>
      <Svg width={size} height={size}>
        {/* Background Circle */}
        <Circle
          stroke={bgColor || "#f2f2f2"}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          {...{ strokeWidth }}
        />

        {/* Progress Circle */}
        <Circle
          stroke={pgColor || "#3b5998"}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={`${circum} ${circum}`}
          strokeDashoffset={radius * Math.PI * 2 * (svgProgress / 100)}
          strokeLinecap="round"
          transform={`rotate(-90, ${size / 2}, ${size / 2})`}
          {...{ strokeWidth }}
        />

        <SVGText
          fontFamily="System, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif"
          fontSize={textSize || "10"}
          fontWeight="700"
          x={size / 2 + 3}
          y={size / 2 + (textSize ? textSize / 2 - 3 : 5)}
          textAnchor="middle"
          fill={textColor || "#333333"}
        >
          {text}
        </SVGText>
      </Svg>
    </View>
  );
};

export default CircularProgress;
