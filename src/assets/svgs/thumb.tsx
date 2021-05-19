import React from 'react';
import Svg, { Path } from 'react-native-svg'

export default function Thumb() {
    return (
        <Svg width="72" height="72" viewBox="0 0 72 72" fill="none">
            <Path d="M27 63H54C56.49 63 58.62 61.5 59.52 59.34L68.58 38.19C68.85 37.5 69 36.78 69 36V30C69 26.7 66.3 24 63 24H44.07L46.92 10.29L47.01 9.33C47.01 8.1 46.5 6.96 45.69 6.15L42.51 3L22.74 22.77C21.66 23.85 21 25.35 21 27V57C21 60.3 23.7 63 27 63ZM27 27L40.02 13.98L36 30H63V36L54 57H27V27ZM3 27H15V63H3V27Z" fill="#44BD32"/>
        </Svg>
    );
}