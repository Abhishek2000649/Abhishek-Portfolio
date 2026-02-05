
import React from 'react';

interface SkewDividerProps {
  fromColor: string;
  toColor: string;
  reverse?: boolean;
}

const SkewDivider: React.FC<SkewDividerProps> = ({ fromColor, toColor, reverse = false }) => {
  return (
    <div className={`relative h-16 sm:h-24 w-full ${fromColor} overflow-hidden pointer-events-none`}>
      <div 
        className={`absolute bottom-0 left-0 w-full h-[200%] ${toColor} transform origin-bottom-left transition-colors duration-300`}
        style={{ 
          clipPath: reverse 
            ? 'polygon(0 100%, 100% 100%, 100% 0)' 
            : 'polygon(0 100%, 100% 100%, 0 0)' 
        }}
      />
    </div>
  );
};

export default SkewDivider;
