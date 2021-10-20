import React, {FC} from 'react';
import {SvgUri} from 'react-native-svg';

export const DefaultAvatar: FC = () => {
  return (
    <SvgUri
      width="110"
      height="110"
      uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/debian.svg"
    />
  );
};
