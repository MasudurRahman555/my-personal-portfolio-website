import React from 'react';
import Card from './card';
import './portfolio.css';
import Portfolio_data from './portfolioApi';

function Portfolio() {
  return (
    <div className="portfolio_section" id="portfolio">
        <div className="container">
            <div className="heading">
                <h1>My Portfolio</h1>
            </div>
            <div className="content">
                {Portfolio_data.map((val, index) => {
                    return(
                        <Card key={index} category={val.category} title={val.title} image={val.image} details={val.details} />
                    )
                })}
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio;