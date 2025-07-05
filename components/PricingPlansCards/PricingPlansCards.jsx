import { BrainCircuit, Search, Zap } from "lucide-react";
import "./PricingPlansCards.scss";
import { useState } from "react";

const PricingPlansCards = () => {
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  const plans = {
    free: {
      name: "Free",
      description: "Perfect for hobbyists, students, or early-stage creators.",
      price: { monthly: 0, yearly: 0 },
      features: [
        "Access to a basic asset library",
        "15-second video animation",
        "Generate up to 10 scenes/month",
        "Watermarked exports",
        "Try basic AI prompts",
      ],
      buttonText: "You're on Creator",
      buttonStyle: "secondary",
      current: false,
    },
    creator: {
      name: "Creator",
      description:
        "For indie creators, and startups who need high-quality output",
      price: { monthly: 20, yearly: 16 },
      features: [
        "Everything in Free",
        "Unlimited 3D scene generation",
        "Premium asset library access",
        "Animations up to 30 seconds",
        "20+ Video AI models",
      ],
      buttonText: "Current Plan",
      buttonStyle: "secondary",
      current: true,
      popular: true,
    },
    studio: {
      name: "Studio",
      description: "For teams and studios that need power, speed.",
      price: { monthly: 40, yearly: 32 },
      features: [
        "Everything in Creator",
        "Unlimited 3D scene generation",
        "Full access to premium asset library",
        "Animations up to 60 seconds",
        "Unlimited Video AI models",
      ],
      buttonText: "Get Studio",
      buttonStyle: "primary",
      current: false,
    },
  };
  return (
    <>
      <div className="pricing-container">
        <div className="pricing-header">
          <div className="logo">
            <BrainCircuit className="logo-icon" />
            <span className="name">Brainwave</span>
          </div>
          <div className="header-actions">
            <button className="search-btn">
              <Search className="header-icon" />
            </button>
            <button className="zap-btn">
              <Zap className="header-icon" />
            </button>

            <div className="profile-avatar">
              <img src="profile.jpg" alt="Profile" />
            </div>
          </div>
        </div>

        <div className="pricing-content">
          <h1 className="pricing-title">Choose your plan</h1>
          <div className="billing-toggle">
            <button
              className={`toggle-btn ${
                billingPeriod === "monthly" ? "active" : ""
              }`}
              onClick={() => setBillingPeriod("monthly")}
            >
              Pay monthly
            </button>
            <button
              className={`toggle-btn ${
                billingPeriod === "yearly" ? "active" : ""
              }`}
              onClick={() => setBillingPeriod("yearly")}
            >
              Pay yearly
              <span className="savings-badge"></span>
            </button>
          </div>

          <div className="pricing-cards">
            {Object.entries(plans).map(([key, plan]) => (
              <div
                key={key}
                className={`pricing-card ${plan.current ? "current" : ""} ${
                  plan.popular ? "popular" : ""
                }`}
              >
                <h2 className="plan-name">{plan.name}</h2>
                <div className="card-details">
                  <p className="plan-description">{plan.description}</p>
                  <div className="price-section">
                    <div className="price">
                      <span className="currency">$</span>
                      <span className="amount">
                        {plan.price[billingPeriod]}
                      </span>
                      <span className="period">USD / <br /> month</span>
                    </div>
                    
                            

                    <button
                      className={`plan-button ${plan.buttonStyle} ${
                        plan.current ? "current" : ""
                      }`}
                    >
                      {plan.buttonText}
                    </button>
                  </div>

                  <div className="features-list">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <svg
                          className="check-icon"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPlansCards;
