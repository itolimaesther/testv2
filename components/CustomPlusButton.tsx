import Link from 'next/link';
import { ReactNode, MouseEvent } from 'react';

interface CustomPlusButtonProps {
  href?: string;
  icon?: ReactNode; // Make the icon optional
  label: string;
  bgColor: string;
  textColor: string;
  textSize?: string;
  height?:string;
  width?:string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

const CustomPlusButton: React.FC<CustomPlusButtonProps> = ({
  href,
  icon,
  label,
  bgColor,
  textColor,
  textSize = 'text-[12px]',
  height,
  width,
  onClick,
}) => {
  if (href) {
    return (
      <div>
        <Link href={href}>
          <span
            onClick={onClick}
            className={`flex justify-center items-center gap-2 rounded-md px-5 py-3 ${width} ${height} text-${textColor} bg-${bgColor} p-3 cursor-pointer`}
          >
            {icon && <span className="icon">{icon}</span>}
            <p className={`${textSize}`}>{label}</p>
          </span>
        </Link>
      </div>
    );
  }
};

export default CustomPlusButton;
