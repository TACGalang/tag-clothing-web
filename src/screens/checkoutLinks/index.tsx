import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import tagLogo from "../../assets/tag-logo.svg";
import bullet from "../../assets/bullet.svg";

import styles from "./style.module.css";

const CheckoutLinks = () => {
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
				<h1 className={styles.header}>How To Checkout?</h1>
			</div>
			<div className={styles.ctaContainer}>
				<div className={styles.instructionContainer}>
					<h3 className={styles.subHeader}>
						Choose your preferred shipping option below:
						<br />
						<br />
						<div className={styles.checkoutLinkRootContainer}>
							<div
								className={styles.checkoutLinkContainer}
								onClick={() =>
									window.open("https://ph.shp.ee/N6Hrquc", "_blank")
								}
							>
								<h2 className={styles.checkoutLinkText}>Shopee Checkout</h2>
							</div>
							<br />
							<div
								className={styles.checkoutLinkContainer}
								onClick={() =>
									window.open("https://vt.tiktok.com/ZSjRhE65x/", "_blank")
								}
							>
								<h2 className={styles.checkoutLinkText}>Tiktok Checkout</h2>
							</div>
						</div>
						<br />
						<b>Check-out Reminders:</b>
						<br />
						📍 Once you've checked out, please send us a screenshot of your
						order details for easier tracking. Kindly track your parcel once it
						has been shipped.
						<br />
						<br />
						<b>Note:</b> Choose J&T as the courier for faster delivery.
						<br />
					</h3>
				</div>
				<div className={styles.linksContainer}>
					<div
						className={styles.links}
						onClick={() => navigate("/modeOfPayments")}
					>
						<u>← Mode Of Payments</u>
					</div>
					<div className={styles.links} onClick={() => navigate("/")}>
						<u>Main Menu →</u>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CheckoutLinks;
