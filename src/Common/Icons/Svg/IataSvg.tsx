import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';
import {useTheme} from 'themes/ThemeContext';

export const IataSvg: FC = () => {
  const {theme} = useTheme();
  return (
    <Svg
      fill={theme.color.font}
      width="100"
      height="80"
      viewBox="0 0 35.496 21.663">
      <Path d="M17.579 7.963a5.22 5.22 0 0 0-1.78.373c.259.509.581.93.97 1.32.253.253.523.468.809.644l.001-2.337zM6.611 14.728l-1.709 6.935h2.153l1.674-6.935zM15.869 21.663l-1.435-6.935h-2.152l-3.587 6.935h2.083l.444-.854h2.433l.129.854h2.085zm-2.426-2.221h-1.605l1.23-2.528.383 2.536-.008-.008zM23.521 14.728h-6.218l-.307 1.776h2.05l-.888 5.159h2.118l.888-5.159h2.016zM29.944 21.663l-1.435-6.935h-2.152l-3.587 6.935h2.084l.444-.854h2.434l.129.854h2.083zm-2.426-2.221h-1.605l1.23-2.528.384 2.54-.009-.012zM24.496 7.105c-.651 2.187-2.479 3.913-4.803 4.542.087.553 1.027 1.783 2.411 1.783h6.406c.29 0 .598-.188.837-.41.239-.222.581-.632.769-.923h-5.91c-.273 0-.427-.478.119-.478h6.286c.359-.017 1.179-.786 1.333-1.127h-6.747a.24.24 0 0 1 0-.479h7.191c.41-.102.974-.546 1.265-1.127h-7.448c-.325 0-.325-.479 0-.479h7.789c.581-.103 1.315-.837 1.503-1.298l-11.001-.004zM11.291 12.097H5.38c.188.291.53.701.769.923.239.222.546.41.837.41h6.406c1.383 0 2.323-1.23 2.41-1.783-2.323-.629-4.151-2.355-4.802-4.542L0 7.11c.188.461.922 1.195 1.503 1.298h7.789c.324 0 .324.479 0 .479H1.845c.291.581.854 1.025 1.264 1.127H10.3a.24.24 0 0 1 0 .479H3.553c.153.342.974 1.11 1.332 1.127h6.286c.547-.001.393.477.12.477zM15.66 8.01a5.575 5.575 0 0 1 1.917-.39V5.47h-2.47c.017.89.222 1.78.553 2.54zM13.944 9.171a4.851 4.851 0 0 1 1.407-1.025 7.059 7.059 0 0 1-.586-2.673h-2.494c.037 1.472.624 2.764 1.673 3.698zM17.429 10.591a4.408 4.408 0 0 1-.902-.694 5.488 5.488 0 0 1-1.026-1.429c-.481.231-.92.538-1.292.911.87.688 2.019 1.133 3.22 1.212zM17.577 2.97a5.552 5.552 0 0 1-1.917-.39 6.8 6.8 0 0 0-.553 2.541h2.47V2.97zM15.799 2.255a5.22 5.22 0 0 0 1.78.373L17.578.292a4.416 4.416 0 0 0-.809.644c-.39.389-.711.81-.97 1.319zM15.351 2.444a4.851 4.851 0 0 1-1.407-1.025c-1.049.934-1.636 2.227-1.672 3.699h2.494c.016-.947.234-1.87.585-2.674zM16.527.694c.287-.287.572-.498.902-.694-1.202.079-2.351.524-3.221 1.212.373.373.811.679 1.292.911A5.514 5.514 0 0 1 16.527.694zM17.918 7.621a5.552 5.552 0 0 1 1.917.39 6.8 6.8 0 0 0 .553-2.541h-2.471v2.151zM18.727 9.656c.389-.39.71-.811.97-1.32a5.22 5.22 0 0 0-1.78-.373v2.336c.286-.175.556-.39.81-.643zM23.224 5.473H20.73a7.083 7.083 0 0 1-.586 2.674 4.856 4.856 0 0 1 1.408 1.025c1.048-.935 1.636-2.227 1.672-3.699zM18.066 10.591c1.202-.079 2.35-.524 3.221-1.212a4.717 4.717 0 0 0-1.293-.911 5.488 5.488 0 0 1-1.026 1.429 4.38 4.38 0 0 1-.902.694zM19.836 2.581a5.575 5.575 0 0 1-1.917.39v2.151h2.471a6.816 6.816 0 0 0-.554-2.541zM18.727.936a4.416 4.416 0 0 0-.809-.644v2.336a5.22 5.22 0 0 0 1.78-.373 5.165 5.165 0 0 0-.971-1.319zM20.73 5.118h2.494c-.036-1.472-.624-2.765-1.672-3.699a4.842 4.842 0 0 1-1.408 1.025c.351.804.569 1.727.586 2.674zM19.995 2.123c.482-.232.92-.539 1.293-.911C20.417.524 19.268.079 18.066 0c.33.196.615.407.902.694.416.416.751.885 1.027 1.429z" />
    </Svg>
  );
};
