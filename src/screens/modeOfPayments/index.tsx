import React from "react";
import tagLogo from "../../assets/tag-logo.svg";
import gCashLogo from "../../assets/gcash.png";
import bdo from "../../assets/bdo.png";
import bpi from "../../assets/bpi.png";

import styles from "./style.module.css";

const PaymentMethod: React.FC<{
	name: string;
	number: string;
	logo: string;
}> = ({ name, number, logo }) => {
	return (
		<div className={styles.buttonContainer}>
			<img src={logo} alt="GCash Logo" className={styles.paymentLogo} />
			<div className={styles.headerContent}>
				<h3 className={styles.paymentName}>{name}</h3>
				<h3 className={styles.paymentNumber}>{number}</h3>
			</div>
		</div>
	);
};

const ModeOfPayment = () => {
	return (
		<div className={styles.rootContainer}>
			<img src={tagLogo} alt="TAG Clothing Logo" className={styles.tagLogo} />
			<div>
				<h1 className={styles.header}>Mode Of Payments</h1>
			</div>
			<div className={styles.ctaContainer}>
				<PaymentMethod
					name="FLORDELIZA TEODORO"
					number="(0917) 174 8405"
					logo={gCashLogo}
				/>
				<PaymentMethod
					name="FLORDELIZA TEODORO"
					number="9579179152"
					logo={bpi}
				/>
				<PaymentMethod
					name="FLORDELIZA GALANG"
					number="005640391880"
					logo={bdo}
				/>
			</div>
		</div>
	);
};

export default ModeOfPayment;
