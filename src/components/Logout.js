import React from 'react';
import styles from '../styles/logout.module.css';
import { Link } from 'react-router-dom';

export default function Logout() {
  return (
    <div className={styles.card}>
        <h2>Go to <Link to="/">Home</Link></h2>
        <h2>Try Login Again <Link to="/login">Login</Link></h2>
    </div>
  )
}
 