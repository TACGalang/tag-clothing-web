import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import tagLogo from "../../assets/tag-logo.svg";
import gCashLogo from "../../assets/gcash.png";
import bdo from "../../assets/bdo.png";
import bpi from "../../assets/bpi.png";
import bdoQR from "../../assets/bdoQR.png";
import bpiQR from "../../assets/bpiQR.png";
import gCashQR from "../../assets/gcashQR.png";

import styles from "./style.module.css";

const PaymentMethod: React.FC<{
	name: string;
	number: string;
	logo: string;
	qr: string;
}> = ({ name, number, logo, qr }) => {
	const [isExpanded, setExpanded] = useState<boolean>(false);

	return (
		<div
			className={styles.buttonContainer}
			onClick={() => {
				navigator?.clipboard?.writeText(number);
				setExpanded(!isExpanded);
			}}
		>
			<div className={styles.headerContainer}>
				<img
					src={logo}
					alt="payment-logo-image"
					className={styles.paymentLogo}
				/>
				<div className={styles.headerContent}>
					<h3 className={styles.paymentName}>{name}</h3>
					<h3 className={styles.paymentNumber}>{number}</h3>
				</div>
			</div>
			{isExpanded && (
				<div className={styles.paymentExpandedView}>
					<img src={qr} alt="qr-image" className={styles.qrImage} />
					<p className={styles.notes}>Once the payment is made,</p>
					<p className={styles.notes}>please send us your proof of payment</p>
				</div>
			)}
		</div>
	);
};

const ModeOfPayment = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.rootContainer}>
			<img
				src={tagLogo}
				alt="TAG Clothing Logo"
				className={styles.tagLogo}
				onClick={() => navigate("/")}
			/>
			<div>
				<h1 className={styles.header}>Mode Of Payments</h1>
			</div>
			<div className={styles.ctaContainer}>
				<PaymentMethod
					name="FLORDELIZA TEODORO"
					number="(0917) 174 8405"
					logo={gCashLogo}
					qr={gCashQR}
				/>
				<PaymentMethod
					name="FLORDELIZA TEODORO"
					number="9579179152"
					logo={bpi}
					qr={bpiQR}
				/>
				<PaymentMethod
					name="FLORDELIZA GALANG"
					number="005640391880"
					logo={bdo}
					qr={bdoQR}
				/>

				<div className={styles.paymentExpandedView}>
					<p className={styles.notesWhite}>Once the payment is made,</p>
					<p className={styles.notesWhite}>
						please send us your proof of payment
					</p>
				</div>
			</div>
		</div>
	);
};

export default ModeOfPayment;
