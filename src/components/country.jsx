import React from 'react';

export const Country = ({ image, title, population, region, capital ,onClick }) => {
  return (
    <div className="country-card" onClick={onClick}>
      <div className="image-holder">
        <img src={image} alt={`${title} - flag`} />
      </div>
      <div className="content-holder">
        <h1>{title}</h1>
        <div className="p-holder">
          <p>
            <span>Population: </span>
            {population}
          </p>
          <p>
            <span>Region: </span> {region}
          </p>
          <p>
            <span>Capital: </span>
            {capital}
          </p>
        </div>
      </div>
    </div>
  );
};
