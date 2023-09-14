//==== NEEDED COMPONENTS FOR CHECKOUT SCREEN ====//
/*
    Logo
    USER PORTAL COMPONENT
    FOOTER COMPONENT
    NavBar

    - STRIPE API
    - ORDER DETAIL w/ Checkout Button
    - Close Button
    
    */

import React, { useState } from 'react';
import styles from './Checkout.module.scss';
import * as ordersAPI from '../../utilities/order-api';
import { useNavigate } from 'react-router-dom';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import StripeForm from '../../components/Stripe/StripeForm';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.STRIPESPUB);

export default function Checkout({ user, order, cart, setCart }) {
	console.log(user);
	console.log(order);
	const navigate = useNavigate();

	async function handleCheckout() {
		await ordersAPI.checkout();
		setCart(null);
		navigate('/orders');
	}

	function handleUserButtonClick() {
		navigate('/guestSignUp');
	}

	async function handlePayment(token) {
		try {
			const response = await ordersAPI.processPayment(token);
			if (response.ok) {
				const data = await response.json();
				console.log(data);
				setCart(null);
				navigate('/orders');
			} else {
				console.error('Payment failed');
			}
		} catch (error) {
			console.error('Error:', error);
		}
	}

	return (
		<Elements stripe={stripePromise}>
			<div className={styles.checkoutContainer}>
				<OrderDetail
					className={styles.orderDetail}
					order={cart}
					handleCheckout={handleCheckout}
				/>
				<div className={styles.orderSummary}>
					{order && (
						<section className={styles.total}>
							<span className={styles.totalQty}>
								{`${order.totalQty} item${order.totalQty !== 1 ? 's' : ''}`}
							</span>
							<span className={styles.totalPrice}>
								${order.orderTotal.toFixed(2)}
							</span>
						</section>
					)}
					<div className={styles.userAction}>
						{user.username === 'guestuser' && (
							<button
								className={styles.loginButton}
								onClick={handleUserButtonClick}
							>
								Log In/Sign Up
							</button>
						)}
					</div>
					<div className={styles.paymentSection}>
						<StripeForm
							setCart={setCart}
							handlePayment={handlePayment}
							className={styles.stripeForm}
						/>
					</div>
				</div>
			</div>
		</Elements>
	);
}
