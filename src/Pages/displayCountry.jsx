/* eslint-disable react/prop-types */
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const DisplayCountry = () => {
    const navigate = useNavigate();
    const id = useParams()
    const [country, setCountry] = useState(null)
    const [languages, setLanguages] = useState([])

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${id.country}?fullText=true`, { method: "GET" })
            .then(res => res.json())
            .then(data => {
                setCountry(data[0]);
                for (const lang in data[0].languages) {
                    setLanguages(prev => [...prev, lang.name])
                }
            })
            .catch(e => console.log(e))
        return setLanguages([])

    }, [id])

    return <>
        <div className="country">
            <div className="country-back-btn" onClick={() => {
                navigate('/');
            }} >
                <ArrowBackIcon />
                <p>Back</p>
            </div>
            <div className="country-page-card">
                <div className="country-image-holder">
                    {country && <img src={country.flags.png} alt={`${country.name.official} - flag`} />}
                </div>

                <div className="country-content-holder">
                    {country && <h2>{country.name.official}</h2>}
                    <div className="p-holder">
                        <p>
                            <span>Native Name: </span>
                            {country && country.name.nativeName[0]}
                        </p>

                        <p>
                            <span>Population: </span>
                            {country && country.population}
                        </p>
                        <p>
                            <span>Region: </span> {country && country.region}
                        </p>
                        <p>
                            <span>Sub Region: </span>
                            {country && country.subRegion}
                        </p>
                        <p>
                            <span>Capital: </span>
                            {country && country.capital}
                        </p>
                    </div>
                </div>
            </div>


            <div className="country-details">
                <p>
                    <span>Top Level Domain: </span>
                    {country && country.tld[0]}
                </p>
                <p>
                    <span>Currencies: </span>
                    {country && country.currencies.name}
                </p>

                <p>
                    <span>Languages: </span>
                    {
                        languages && languages.map((lang, i) => {
                            if (i === languages.length - 1) return lang
                            return `${lang} ,`
                        })
                    }
                </p>



            </div>
            <div className="country-border-container">
                <div className="country-border-text">
                    <h4>Border Countries:</h4>
                </div>
                <div className="country-borders">
                    {
                        country && (country.borders && country.borders.map((country, i) => {
                            return (<div key={i} className="country-border-name"><p>{country}</p></div>)
                        }))
                    }

                </div>
            </div>


        </div>

    </>
}