import React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const HomeIcon = ({
  width = 28,
  height = 28,
  color = "#00897B",
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
          d="M23.3332 23.3336C23.3332 23.643 23.2103 23.9397 22.9915 24.1585C22.7727 24.3773 22.4759 24.5002 22.1665 24.5002H5.83317C5.52375 24.5002 5.22701 24.3773 5.00821 24.1585C4.78942 23.9397 4.6665 23.643 4.6665 23.3336V12.8336H1.1665L13.2147 1.8809C13.4295 1.68546 13.7094 1.57715 13.9998 1.57715C14.2902 1.57715 14.5702 1.68546 14.785 1.8809L26.8332 12.8336H23.3332V23.3336ZM9.33317 17.5002V19.8336H18.6665V17.5002H9.33317Z"
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

export default HomeIcon;
