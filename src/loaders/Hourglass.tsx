import React from 'react';
import {
  BaseProps,
  DEFAULT_ARIA_ATTRIBUTES,
  DEFAULT_COLOR,
  DEFAULT_SIZE,
} from '../type';

interface Style {
  hourglassWrapper: React.CSSProperties;
  hourglassDiv: React.CSSProperties;
}

export interface HourglassProps extends BaseProps {
  spinDirection?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse' | '';
  spinSpeed?: number;
  margin?: string;
}

export const DEFAULT_VALUES = {
  visible: true,
  size: DEFAULT_SIZE,
  color: DEFAULT_COLOR,
  spinDirection: 'normal',
  spinSpeed: 2,
  margin: '',
  ariaLabel: 'hourglass-loading-spinner',
  className: '',
  style: {},
};

const Hourglass = ({
  visible = DEFAULT_VALUES.visible,
  color = DEFAULT_VALUES.color,
  size = DEFAULT_VALUES.size,
  className = DEFAULT_VALUES.className,
  ariaLabel = DEFAULT_VALUES.ariaLabel,
  spinDirection = DEFAULT_VALUES.spinDirection as HourglassProps['spinDirection'],
  spinSpeed = DEFAULT_VALUES.spinSpeed,
  margin = DEFAULT_VALUES.margin,
  style = DEFAULT_VALUES.style,
  ...rest
}: HourglassProps) => {
  const speed = [0.8, 1, 1.2, 1.4, 1.6];

  if(typeof size === 'number') {
    size = `${size}px`
  }

  const keyframesAnimation = `
@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}
`;
  const styles: Style = {
    hourglassWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      width: 'fit-content',
      height: 'fit-content',
    },
    hourglassDiv: {
      borderRadius: '50%',
      margin: `${margin}`,
      border: `${size} solid ${color}`,
      borderColor: `${color} transparent ${color} transparent`,
      animation: `lds-hourglass ${speed[spinSpeed]}s infinite ${spinDirection}`,
    },
  };

  return !visible ? null : (
    <>
      <style>{keyframesAnimation}</style>
      <div
        className={className}
        style={{...styles.hourglassWrapper, ...style}}
        aria-label={ariaLabel}
        {...DEFAULT_ARIA_ATTRIBUTES}
        {...rest}
      >
        <div style={styles.hourglassDiv}></div>
      </div>
    </>
  );
};

export default Hourglass;
