import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import tagLogo from "../../assets/tag-logo.svg";
import bullet from "../../assets/bullet.svg";

import styles from "./style.module.css";

const HowToOrder = () => {
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
				<h1 className={styles.header}>How To Order?</h1>
			</div>
			<div className={styles.ctaContainer}>
				<div className={styles.buttonContainer}>
					<img src={bullet} alt="bullet" className={styles.bullet} />
					<h3 className={styles.subHeader}>
						First to comment mine basis <br />
						Comment: <b>MINE+SIZE</b>
					</h3>
				</div>
				<div className={styles.buttonContainer}>
					<img src={bullet} alt="bullet" className={styles.bullet} />
					<h3 className={styles.subHeader}>
						For new miners, send your details to proceed with your order
						<br />
						<b>Name, Address & Contact Number</b>
					</h3>
				</div>
				<div className={styles.buttonContainer}>
					<img src={bullet} alt="bullet" className={styles.bullet} />
					<h3 className={styles.subHeader}>
						Payment First Policy <br />
						Payment Methods: <b>G-Cash, BDO, BPI</b>
					</h3>
				</div>
				<div className={styles.buttonContainer}>
					<img src={bullet} alt="bullet" className={styles.bullet} />
					<h3 className={styles.subHeader}>
						Shipping Options:
						<br />
						Direct ship to <b>Flash</b> or <b>J&T Express</b>, <b>Shopee</b> and{" "}
						<b>Tiktok</b> check-out
					</h3>
				</div>
				<div className={styles.paymentExpandedView}>
					<p className={styles.notesWhite}>
						Location: <b>Guiguinto, Bulacan</b>
					</p>
				</div>
			</div>
		</div>
	);
};

export default HowToOrder;
