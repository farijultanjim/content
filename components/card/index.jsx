import React from "react";
import "./style.css"; // Ensure this path is correct based on your project structure

export default function Card() {
  return (
    <div className="card">
      <img className="image" src="/image.jpg" alt="Malaysia" />
      <div className="content">
        <h2>Malaysia</h2>
        <h3>Economy</h3>
        <p>
          Kuala Lumpur, Malaysia, is a vibrant metropolis blending modern
          skyscrapers, diverse cultures, and rich historical landmarks.
        </p>
        <a className="read-more" href="#">
          Read more
        </a>
        <div className="details">
          <span className="item">
            <span className="material-symbols-outlined">sell</span>
            <em>from $120</em>
          </span>
          <span className="item">
            <span className="material-symbols-outlined">travel</span>
            <em>KUL</em>
          </span>
        </div>
        <div className="buttons">
          <button className="primary-btn">Search flights</button>
          <button className="icon-btn">
            <span className="material-symbols-outlined">favorite</span>
          </button>
        </div>
      </div>
    </div>
  );
}
