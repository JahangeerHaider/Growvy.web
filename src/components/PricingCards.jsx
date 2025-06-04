import React from 'react';
import './PricingCards.css';

function PricingCards() {
  return (
    <section className="pricing-cards-container">
      <div className="pricing-card">
        <h2>Basic CV Service</h2>
        <p>
          Companies HR who are looking for a candidate pool to shortlist them with possible filters can access our database to reduce their headache to post jobs on different job portals.
        </p>
        <h3>Service Cost:</h3>
        <p>Price: <strong>$30</strong> (9797 PKR)</p>
        <p>Discount: <strong>$20</strong> (5600 PKR) Monthly</p>
        <h3>Benefits:</h3>
        <ul>
          <li>200 searches/month</li>
          <li>Filters: Skills, Cities, Experience</li>
          <li>Live chat experts help</li>
        </ul>
        <button>Start Today</button>
      </div>

      <div className="pricing-card">
        <h2>Lead Generating</h2>
        <p>
          Companies will directly get qualifying responses in their chat to schedule interviews. Our service charges apply on the candidate's approach.
        </p>
        <h3>Service Cost:</h3>
        <p>Price: <strong>$50</strong> (6998 PKR)</p>
        <p>(Per 20 candidates)</p>
        <h3>Benefits:</h3>
        <ul>
          <li>Create job post on Growvy</li>
          <li>Filters: Skills, Cities, Experience</li>
          <li>Team-guided candidate shortlisting</li>
          <li>Live chat experts help</li>
        </ul>
        <button>Start Today</button>
      </div>

      <div className="pricing-card">
        <h2>Recruitment Service</h2>
        <p>
          Our recruitment specialist connects with HR to plan a hiring strategy for fast and efficient hiring.
        </p>
        <h3>Service Cost:</h3>
        <p>Price: <strong>40% of First Salary</strong> (Experienced)</p>
        <p>(Available after 1 subscription)</p>
        <h3>Benefits:</h3>
        <ul>
          <li>Create job post</li>
          <li>Filters: Skills, Cities, Experience</li>
          <li>Minor screening interview</li>
          <li>WhatsApp group with team</li>
          <li>Complete A-Z hiring solution</li>
        </ul>
        <button>Start Today</button>
      </div>
    </section>
  );
}

export default PricingCards;
