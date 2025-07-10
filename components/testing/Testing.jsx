import React from "react";

import styles from "./testing.module.scss";
import { ArrowUpRight } from "lucide-react";

const Testing = () => {
  return (
    <div className="grid grid-cols-2">
      <div></div>
      <div className={styles.right}>
        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.imgBox}>
              <img src="/profile.jpg" alt="profile" />
            </div>
            <div className={styles.icon}>
              <ArrowUpRight className={styles.iconBox} />
            </div>

            <div className={styles.profile}>
              <div className={styles.profileCard}>
                <div className={styles.profileContainer}>
                  <div className={styles.profileImg}>
                    <img src="/profile-uncroped.jpg" alt="Profile" />
                  </div>
                  <div className={styles.profileInfo}>
                    <h3>John Doe</h3>
                    <p>Web Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testing;
