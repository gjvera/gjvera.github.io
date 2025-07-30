import type React from "react";

const Button = (props: React.HTMLAttributes<HTMLButtonElement>) => {
	return (
		<button
			className="text-left text-blue-200 text-base hover:underline transition-all hover:text-lg"
			{...props}
		/>
	);
};

export default Button;
