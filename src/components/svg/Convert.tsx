import React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const SwapIcon = ({
  width = 28,
  height = 28,
  color = "#090B0A",
  ...props
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip)">
        <Path
          d="M4.66683 5.83333V22.1667H23.3335V5.83333H4.66683ZM3.50016 3.5H24.5002C24.8096 3.5 25.1063 3.62292 25.3251 3.84171C25.5439 4.0605 25.6668 4.35725 25.6668 4.66667V23.3333C25.6668 23.6428 25.5439 23.9395 25.3251 24.1583C25.1063 24.3771 24.8096 24.5 24.5002 24.5H3.50016C3.19074 24.5 2.894 24.3771 2.6752 24.1583C2.45641 23.9395 2.3335 23.6428 2.3335 23.3333V4.66667C2.3335 4.35725 2.45641 4.0605 2.6752 3.84171C2.894 3.62292 3.19074 3.5 3.50016 3.5V3.5ZM14.0002 10.5V7L19.8335 12.8333H9.3335V10.5H14.0002ZM8.16683 15.1667H18.6668V17.5H14.0002V21L8.16683 15.1667Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip">
          <Rect width="28" height="28" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default SwapIcon;
