import React from 'react';
import { BaseProps } from '../type';


export const DEFAULT_WAI_ARIA_ATTRIBUTE = {
  'aria-busy': true,
  role: 'status',
};

export type Style = {
  [key: string]: string;
};

interface HelixProps extends Omit<BaseProps & React.SVGProps<SVGSVGElement>, 'color'> {
  primaryColor?: string[];
  secondaryColor?: string[];
  wrapperClass?: string;
  wrapperStyle?: React.CSSProperties;
}

export const DEFAULT_VALUES = {
  visible: true,
  size: '80',
  ariaLabel: 'helix-svg-loader',
  primaryColor: ['#E90C5983', '#ff0033'],
  secondaryColor: ['#46dff0', '#353A3925'],
};

const Helix = ({
  visible = true,
  size = DEFAULT_VALUES.size,
  wrapperClass = '',
  wrapperStyle = {},
  ariaLabel = DEFAULT_VALUES.ariaLabel,
  primaryColor = DEFAULT_VALUES.primaryColor,
  secondaryColor = DEFAULT_VALUES.secondaryColor,
  ...rest
}: HelixProps) => {
  if (primaryColor.length === 1)
    primaryColor = [primaryColor[0], DEFAULT_VALUES.primaryColor[1]];
  if (secondaryColor.length === 1)
    secondaryColor = [secondaryColor[0], DEFAULT_VALUES.secondaryColor[1]];

  return !visible ? null : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      className={wrapperClass}
      style={wrapperStyle}
      aria-label={ariaLabel}
      {...DEFAULT_WAI_ARIA_ATTRIBUTE}
      {...rest}
    >
      <circle
        cx="6.451612903225806"
        cy="60.6229"
        r="3.41988"
        fill={`${primaryColor[0]}`}
      >
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-0.5s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="0s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values={`${primaryColor[0]};${primaryColor[1]};${primaryColor[0]}`}
          dur="2s"
          repeatCount="indefinite"
          begin="-0.5s"
        ></animate>
      </circle>
      <circle
        cx="6.451612903225806"
        cy="39.3771"
        r="2.58012"
        fill={`${secondaryColor[0]}`}
      >
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.5s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-1s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values={`${secondaryColor[0]};${secondaryColor[1]};${secondaryColor[0]}`}
          dur="2s"
          repeatCount="indefinite"
          begin="-0.5s"
        ></animate>
      </circle>
      <circle
        cx="16.129032258064512"
        cy="68.1552"
        r="3.17988"
        fill={`${primaryColor[0]}`}
      >
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-0.7s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-0.2s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values={`${primaryColor[0]};${primaryColor[1]};${primaryColor[0]}`}
          dur="2s"
          repeatCount="indefinite"
          begin="-0.7s"
        ></animate>
      </circle>
      <circle
        cx="16.129032258064512"
        cy="31.8448"
        r="2.82012"
        fill={`${primaryColor[0]}`}
      >
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.7s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.2s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values={`${secondaryColor[0]};${secondaryColor[1]};${secondaryColor[0]}`}
          dur="2s"
          repeatCount="indefinite"
          begin="-0.7s"
        ></animate>
      </circle>
      <circle
        cx="25.806451612903224"
        cy="69.3634"
        r="2.93988"
        fill={`${primaryColor[0]}`}
      >
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-0.9s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-0.4s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values={`${primaryColor[0]};${primaryColor[1]};${primaryColor[0]}`}
          dur="2s"
          repeatCount="indefinite"
          begin="-0.9s"
        ></animate>
      </circle>
      <circle
        cx="25.806451612903224"
        cy="30.6366"
        r="3.06012"
        fill={`${primaryColor[0]}`}
      >
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.9s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.4s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values={`${secondaryColor[0]};${secondaryColor[1]};${secondaryColor[0]}`}
          dur="2s"
          repeatCount="indefinite"
          begin="-0.9s"
        ></animate>
      </circle>
      <circle
        cx="35.48387096774193"
        cy="65.3666"
        r="2.69988"
        fill={`${primaryColor[0]}`}
      >
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.1s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-0.6s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values={`${primaryColor[0]};${primaryColor[1]};${primaryColor[0]}`}
          dur="2s"
          repeatCount="indefinite"
          begin="-1.1s"
        ></animate>
      </circle>
      <circle
        cx="35.48387096774193"
        cy="34.6334"
        r="3.30012"
        fill={`${primaryColor[0]}`}
      >
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-2.1s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.6s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values={`${secondaryColor[0]};${secondaryColor[1]};${secondaryColor[0]}`}
          dur="2s"
          repeatCount="indefinite"
          begin="-1.1s"
        ></animate>
      </circle>
      <circle
        cx="45.16129032258064"
        cy="53.8474"
        r="2.45988"
        fill={`${primaryColor[0]}`}
      >
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.3s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-0.8s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values={`${primaryColor[0]};${primaryColor[1]};${primaryColor[0]}`}
          dur="2s"
          repeatCount="indefinite"
          begin="-1.3s"
        ></animate>
      </circle>
      <circle
        cx="45.16129032258064"
        cy="46.1526"
        r="3.54012"
        fill={`${primaryColor[0]}`}
      >
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-2.3s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.8s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values={`${secondaryColor[0]};${secondaryColor[1]};${secondaryColor[0]}`}
          dur="2s"
          repeatCount="indefinite"
          begin="-1.3s"
        ></animate>
      </circle>
      <circle
        cx="54.838709677419345"
        cy="39.3771"
        r="2.58012"
        fill={`${primaryColor[0]}`}
      >
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.5s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-1s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values={`${primaryColor[0]};${primaryColor[1]};${primaryColor[0]}`}
          dur="2s"
          repeatCount="indefinite"
          begin="-1.5s"
        ></animate>
      </circle>
      <circle
        cx="54.838709677419345"
        cy="60.6229"
        r="3.41988"
        fill={`${primaryColor[0]}`}
      >
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-2.5s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-2s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values={`${secondaryColor[0]};${secondaryColor[1]};${secondaryColor[0]}`}
          dur="2s"
          repeatCount="indefinite"
          begin="-1.5s"
        ></animate>
      </circle>
      <circle
        cx="64.51612903225805"
        cy="31.8448"
        r="2.82012"
        fill={`${primaryColor[0]}`}
      >
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.7s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.2s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values={`${primaryColor[0]};${primaryColor[1]};${primaryColor[0]}`}
          dur="2s"
          repeatCount="indefinite"
          begin="-1.7s"
        ></animate>
      </circle>
      <circle
        cx="64.51612903225805"
        cy="68.1552"
        r="3.17988"
        fill={`${primaryColor[0]}`}
      >
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-2.7s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-2.2s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values={`${secondaryColor[0]};${secondaryColor[1]};${secondaryColor[0]}`}
          dur="2s"
          repeatCount="indefinite"
          begin="-1.7s"
        ></animate>
      </circle>
      <circle
        cx="74.19354838709677"
        cy="30.6366"
        r="3.06012"
        fill={`${primaryColor[0]}`}
      >
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.9s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.4s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values={`${primaryColor[0]};${primaryColor[1]};${primaryColor[0]}`}
          dur="2s"
          repeatCount="indefinite"
          begin="-1.9s"
        ></animate>
      </circle>
      <circle
        cx="74.19354838709677"
        cy="69.3634"
        r="2.93988"
        fill={`${primaryColor[0]}`}
      >
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-2.9s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-2.4s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values={`${secondaryColor[0]};${secondaryColor[1]};${secondaryColor[0]}`}
          dur="2s"
          repeatCount="indefinite"
          begin="-1.9s"
        ></animate>
      </circle>
      <circle
        cx="83.87096774193547"
        cy="34.6334"
        r="3.30012"
        fill={`${primaryColor[0]}`}
      >
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-2.1s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.6s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values={`${primaryColor[0]};${primaryColor[1]};${primaryColor[0]}`}
          dur="2s"
          repeatCount="indefinite"
          begin="-2.1s"
        ></animate>
      </circle>
      <circle
        cx="83.87096774193547"
        cy="65.3666"
        r="2.69988"
        fill={`${primaryColor[0]}`}
      >
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-3.1s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-2.6s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values={`${secondaryColor[0]};${secondaryColor[1]};${secondaryColor[0]}`}
          dur="2s"
          repeatCount="indefinite"
          begin="-2.1s"
        ></animate>
      </circle>
      <circle
        cx="93.54838709677418"
        cy="46.1526"
        r="3.54012"
        fill={`${primaryColor[0]}`}
      >
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-2.3s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.8s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values={`${primaryColor[0]};${primaryColor[1]};${primaryColor[0]}`}
          dur="2s"
          repeatCount="indefinite"
          begin="-2.3s"
        ></animate>
      </circle>
      <circle
        cx="93.54838709677418"
        cy="53.8474"
        r="2.45988"
        fill={`${primaryColor[0]}`}
      >
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-3.3s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-2.8s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values={`${secondaryColor[0]};${secondaryColor[1]};${secondaryColor[0]}`}
          dur="2s"
          repeatCount="indefinite"
          begin="-2.3s"
        ></animate>
      </circle>
    </svg>
  );
};

export default Helix;
