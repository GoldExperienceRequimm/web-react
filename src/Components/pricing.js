import { Link } from "react-router-dom";
import "./pricing.css";

import React from "react";

const pricin = () => {
  return (
    <div className="pricing">
      <div className="pricing-container">
        <div className="card">
          <h3>- Basic -</h3>
          <span className="bar"></span>
          <p className="btc"> $100</p>
          <p>- 3 Days -</p>
          <p>- 3 Pages -</p>
          <p>- 3 Featured -</p>
          <p>- Responsive Design -</p>
          <Link to="/contact" className="btn">
            Purchase Now
          </Link>
        </div>
        <div className="card">
          <h3>- Premium -</h3>
          <span className="bar"></span>
          <p className="btc"> $200</p>
          <p>- 5 Days -</p>
          <p>- 4 Pages -</p>
          <p>- 4 Featured -</p>
          <p>- Responsive Design -</p>
          <Link to="/contact" className="btn">
            Purchase Now
          </Link>
        </div>
        <div className="card">
          <h3>- Business -</h3>
          <span className="bar"></span>
          <p className="btc"> $400</p>
          <p>- 6 Days -</p>
          <p>- 5 Pages -</p>
          <p>- 5 Featured -</p>
          <p>- Responsive Design -</p>
          <Link to="/contact" className="btn">
            Purchase Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default pricin;
