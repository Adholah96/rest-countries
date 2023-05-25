/* eslint-disable react/prop-types */
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const DisplayCountry = ({ image, title, population, capital, region, topLevelDomain, currencies, countryBorders, languages, nativeName, subRegion }) => {



    return <>
        <div className="country">
            <div className="country-back-btn">
                <ArrowBackIcon />
                <p>Back</p>
            </div>
            <div className="country-page-card">
                <div className="country-image-holder">
                    <img src={image} alt={`${title} - flag`} />
                </div>

                <div className="country-content-holder">
                    <h1>{title}</h1>
                    <div className="p-holder">
                        <p>
                            <span>Native Name: </span>
                            {nativeName}
                        </p>

                        <p>
                            <span>Population: </span>
                            {population}
                        </p>
                        <p>
                            <span>Region: </span> {region}
                        </p>
                        <p>
                            <span>Sub Region: </span>
                            {subRegion}
                        </p>
                        <p>
                            <span>Capital: </span>
                            {capital}
                        </p>
                    </div>
                </div>
            </div>


            <div className="country-details">
                <p>
                    <span>Top Level Domain: </span>
                    {topLevelDomain}
                </p>
                <p>
                    <span>Currencies: </span>
                    {currencies[0].name}
                </p>

                <p>
                    <span>Languages: </span>
                    {
                        languages.map((lang, i) => {
                            if (i === languages.length - 1) return lang.name
                            return `${lang.name} ,`
                        })
                    }
                </p>



            </div>

             <div className="country-border-text">
                <h4>Border Countries:</h4>
             </div>
            <div className="country-borders">
                {
                    countryBorders.map((country, i) => {
                        return (<div key={i} className="country-border-name"><p>{country}</p></div>)
                    })
                }

            </div>

        </div>

    </>
}