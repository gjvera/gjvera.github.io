import NavLinks from "../components/Links";
import styles from "./Home.module.css";

const Home = () => {
	return (
		<div
			className="sm:my-32 sm:mx-40
    p-4 w-full flex overflow-auto min-h-fit justify-center items-center min-w-[135px]"
		>
			<div className="border-l border-l-green text-blue-100 pl-8 h-1/2 hidden sm:flex">
				My name is Gabriel Vera. Welcome to my webstie.
			</div>
			<div
				className={`${styles.box} pl-8 flex flex-col gap-3 h-fit sm:ml-20 min-w-[102px]`}
			>
				<NavLinks />
			</div>
		</div>
	);
};

export default Home;
