import React from "react";
import { Link, Navigate} from "react-router-dom";
import styles from "../styles/navbar.module.css";

export default function Navbar({ isSubmitted, setIsSubmitted}) {
  console.log(isSubmitted)
  return (
    <div className={styles.nav}>
      <div className={styles.left}>
        <Link to="/">Dish POLL</Link>
        {isSubmitted ? (
          <div>
            <Link to="/voting">Voting</Link>
          </div>
        ) : (null)}
      </div>

      <div className={styles.right}>
        <div className={styles.navLinks}>
          <ul>
            {isSubmitted ? (
              <li>
                <div onClick={()=>{setIsSubmitted(false)}}><Link to="/logout">Log Out</Link></div>
              </li>
            ) : (
              <li>
                <Link to="/login">Log in</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
