import React from "react";

import styles from "./polygonCard.module.scss";
import { ArrowUpRight } from "lucide-react";

const PolygonCard = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.imgBox}>
              <img src="/arch1.jpg" alt="profile" />
            </div>
            <div className={styles.icon}>
              <ArrowUpRight className={styles.iconBox} />
            </div>

            <div className={styles.profile}>
              <div className={styles.profileCard}>
                <div className={styles.profileContainer}>
                  <div className={styles.profileImg}>
                    <img src="/profile-square.jpg" alt="Profile" />
                  </div>
                  <div className={styles.profileInfo}>
                    <h3>John Doe</h3>
                    <p>Architect</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PolygonCard;
