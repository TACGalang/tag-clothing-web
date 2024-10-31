import { useNavigate } from "react-router-dom";

import InstructionIcon from "../../assets/instructionIcon.svg";
import CartIcon from "../../assets/cartIcon.svg";
import Logo from "../../assets/tag-logo.svg";

import styles from "./styles.module.css";

const Menu = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.rootContainer}>
			<img src={Logo} alt="tag-logo" className={styles.tagLogo} />
			<div className={styles.headerContainer}>
				<h2 className={styles.headerText}>
					Hello Parents! <br /> Welcome to our shop!
				</h2>
			</div>
			<div className={styles.menuContainer}>
				<div className={styles.buttonContainer}>
					<div
						className={styles.iconContainer}
						onClick={() => {
							//http://m.me/421244047729534
							window.open("http://m.me/421244047729534", "_blank");
						}}
					>
						<img src={CartIcon} alt="cart-icon" className={styles.icon} />
					</div>
					<h2 className={styles.buttonText}>Order</h2>
				</div>
				<div className={styles.buttonContainer}>
					<div
						className={styles.iconContainer}
						onClick={() => navigate("instructions/")}
					>
						<img
							src={InstructionIcon}
							alt="instruction-icon"
							className={styles.icon}
						/>
					</div>
					<h2 className={styles.buttonText}>FAQs</h2>
				</div>
			</div>
		</div>
	);
};

export default Menu;
