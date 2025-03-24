import "./Upgrade.css";

export default function UpgradePlan() {
  return (
    <div className="container">
         <button className="back-button" onClick={() => window.history.back()}>
        ← Back
      </button>
      <h1 className="title">Upgrade Your Legal Lens Plan</h1>
      <p className="subtitle">
        Enhance your legal research and case analysis with AI-powered insights.
      </p>

      <div className="plans">
        {/* Free Plan */}
        <div className="plan free">
          <h2>Basic</h2>
          <p className="price">$0 <span>USD/month</span></p>
          <p className="description">Get started with AI-powered legal research.</p>
          <button className="btn disabled" disabled>Your current plan</button>
          <ul className="features">
            <li>&#10003; AI-based legal case search</li>
            <li>&#10003; Basic document analysis</li>
            <li>&#10003; Access to legal insights (limited)</li>
            <li>&#10003; Community forum access</li>
          </ul>
        </div>

        {/* Plus Plan */}
        <div className="plan plus">
          <h2>Professional <span className="badge">MOST POPULAR</span></h2>
          <p className="price">$49 <span>USD/month</span></p>
          <p className="description">
            Unlock deeper legal analysis and AI-powered case recommendations.
          </p>
          <button className="btn plus-btn">Upgrade to Professional</button>
          <ul className="features">
            <li>&#10003; Everything in Basic</li>
            <li>&#10003; AI-assisted legal document drafting</li>
            <li>&#10003; Case outcome predictions</li>
            <li>&#10003; Priority support</li>
            <li>&#10003; Advanced legal research tools</li>
          </ul>
        </div>

        {/* Pro Plan */}
        <div className="plan pro">
          <h2>Enterprise</h2>
          <p className="price">$199 <span>USD/month</span></p>
          <p className="description">
            The ultimate AI-powered legal intelligence for law firms and professionals.
          </p>
          <button className="btn pro-btn">Get Enterprise</button>
          <ul className="features">
            <li>&#10003; Everything in Professional</li>
            <li>&#10003; AI-powered contract analysis</li>
            <li>&#10003; Predictive analytics for legal strategies</li>
            <li>&#10003; API access for automation</li>
            <li>&#10003; 24/7 dedicated support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
