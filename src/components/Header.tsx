import NavLinks from "./Links";

const Header = () => {
	return (
		<div className="absolute w-full h-8 border-b border-b-green z-10 top-0">
			<div className="flex flex-row gap-4 w-full pl-4">
				<NavLinks />
			</div>
		</div>
	);
};

export default Header;
