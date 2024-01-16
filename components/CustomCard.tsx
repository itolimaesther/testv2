import React, { ReactNode } from 'react';

interface CustomCardProps {
  backgroundColor?: string;
  width?: string;
  height?: string;
  shadow?: string;
  justifyContent?: string;
  alignItems?: string;
  children: ReactNode;
  padding?:string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  backgroundColor = 'white',
  width = '268px',
  height = 'auto',
  shadow = 'md',
  justifyContent = 'center',
  alignItems = 'center',
  padding ='4',
  children,
}) => {
  const shadowClasses = `shadow-${shadow}`;

  return (
    <div
      className={`bg-${backgroundColor} w-${width} h-${height} rounded-xl p-${padding} ${shadowClasses} flex justify-${justifyContent} items-${alignItems}`}
    >
      {children}
    </div>
  );
};

export default CustomCard;