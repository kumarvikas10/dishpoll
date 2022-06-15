import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/home.module.css';

export default function Home({isSubmitted,  setIsSubmitted }) {
  return (
    <div className={styles.home}>
      <div className={styles.card}> 
      <div className={styles.left}>
        <img src="assets/food.jpg"/>
      </div>
      <div className={styles.right}>
        <h1>Welcome to Dish Poll</h1>
        {
          isSubmitted ? <h2>To Cast the Vote Go to Voting Section</h2> : <h2>To Cast the Vote Please <button className='btn'><Link to="/login">Login</Link></button></h2>
        }
        
      </div>
      </div>
    </div>
  )
}
