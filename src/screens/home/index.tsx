import { useNavigate } from "react-router-dom";

import tagLogo from "../../assets/tag-logo.svg";

import styles from "./style.module.css";

const Home = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.rootContainer}>
			<img src={tagLogo} alt="TAG Clothing Logo" className={styles.tagLogo} />
			<div>
				{/* <h1 className={styles.header}>Welcome</h1> */}
				<h3 className={styles.subHeader}>What would you like to know?</h3>
			</div>
			<div className={styles.ctaContainer}>
				<div className={styles.buttonContainer}>
					<h2 className={styles.button}>How to Order?</h2>
				</div>
				<div
					className={styles.buttonContainer}
					onClick={() => navigate("modeOfPayments")}
				>
					<h2 className={styles.button}>Mode of Payments</h2>
				</div>
			</div>
		</div>
	);
};

export default Home;
