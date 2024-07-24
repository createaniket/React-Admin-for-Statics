import React from 'react';
import './Homecustomcards.scss';

const Homecustomcards = () => {
  return (
    <div className='home-cstm-card-sect'>
      <div className="home-cstm-card">
        <img 
          src="https://www.trade.gov/sites/default/files/styles/card_teaser/public/2019-12/export_solutions_main.jpg?itok=lvn2YTJt" 
          alt="Export Solutions" 
          className="home-cstm-card-image"
        />
        <div className="home-cstm-card-content">
          <h3 className="home-cstm-card-title">Export Solutions</h3>
          <div className="home-cstm-card-divider"></div>
          <p className="home-cstm-card-description">
            Your essential international business toolkit of practical exporting advice and business tools developed for you by our trade professionals.
          </p>
          <button className="home-cstm-card-button">SEE EXPORT SOLUTIONS</button>
        </div>
      </div>


      <div className="home-cstm-card">
        <img 
          src="https://www.trade.gov/sites/default/files/styles/card_teaser/public/2022-07/hero-IA_eCommerce_Marketplace_1.png?itok=kvjtm_Qw" 
          alt="Export Solutions" 
          className="home-cstm-card-image"
        />
        <div className="home-cstm-card-content">
          <h3 className="home-cstm-card-title">Trade Data & Analysis</h3>
          <div className="home-cstm-card-divider"></div>
          <p className="home-cstm-card-description">
          Get the latest data and reports produced by ITA's team of trade specialists. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, eum?</p>
          <button className="home-cstm-card-button">SEE TRADE DATA & ANALYSIS</button>
        </div>
      </div>


      <div className="home-cstm-card">
        <img 
          src="https://www.trade.gov/sites/default/files/styles/card_teaser/public/2020-03/woman%20working%20in%20a%20virtual%20environment.jpg?itok=y50lw-S4" 
          alt="Export Solutions" 
          className="home-cstm-card-image"
        />
        <div className="home-cstm-card-content">
          <h3 className="home-cstm-card-title">Running Into Problems?</h3>
          <div className="home-cstm-card-divider"></div>
          <p className="home-cstm-card-description">
          Are you encountering a trade barrier in a foreign market? We can help!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, illo.</p>
          <button className="home-cstm-card-button">RESOLVE A TRADE PROBLEM</button>
        </div>
      </div>


      <div className="home-cstm-card">
        <img 
          src="https://www.trade.gov/sites/default/files/styles/card_teaser/public/2019-12/export_solutions_main.jpg?itok=lvn2YTJt" 
          alt="Export Solutions" 
          className="home-cstm-card-image"
        />
        <div className="home-cstm-card-content">
          <h3 className="home-cstm-card-title">Events</h3>
          <div className="home-cstm-card-divider"></div>
          <p className="home-cstm-card-description">
          We oragnoze the events Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, placeat! Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur..</p>
          <button className="home-cstm-card-button">SEE EVENTS</button>
        </div>
      </div>
    </div>
  );
}

export default Homecustomcards;
