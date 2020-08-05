import { Dimensions, Platform, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

const normalize = (size) => {
  const newSize = size * scale;

  let normalizedValue = Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  if (Platform.OS === "ios") {
    normalizedValue = Math.round(PixelRatio.roundToNearestPixel(newSize));
  }

  return normalizedValue;
};

export default normalize;
