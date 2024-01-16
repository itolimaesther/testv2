import Image from "next/image";
import Link from "next/link";

type ButtonProps = {
	type: "button" | "submit";
	title: string;
	variant: string;
	full?: boolean;
	href: string;
};

const CustomLinkButton = ({
	type,
	title,
	variant,
	full,
	href,
}: ButtonProps) => {
	return (
		<Link
			className={`flexCenter gap-3 rounded-lg border ${variant} ${
				full && "w-full"
			}`}
			type={type}
			href={href}
		>
			<label className="bold-16 whitespace-nowrap cursor-pointer">
				{title}
			</label>
		</Link>
	);
};

export default CustomLinkButton;
