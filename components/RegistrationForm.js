import React from 'react'
import { useState, useEffect } from 'react'
import styles from '@/styles/country-selection.module.css'


const RegistrationForm = () => {
    const [countries, setCountries] =useState([]);
    const [selectedCountry, setSelectedCountry] =useState('');

    useEffect(() => {
       const fetchCountries = async() => {
         try {
            const res = await fetch('https://restcountries.com/v3.1/all');
            const data = await res.json();
            // sorting the countries alphabetically
            const sortedCountry = data.sort((a, b) => 
             a.name.common.localeCompare(b.name.common)
            );
            setCountries(sortedCountry);
         } catch(error) {
             console.error('Error fetching countries:', error);
         }
       }
       fetchCountries();
    }, []);

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Selected Country:', selectedCountry)
    }

  return (
     <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="country" className={styles.label}>Select Your Country:</label>
        <select id="country" value={selectedCountry} onChange={handleCountryChange} className={styles.select}>
          <option value="" disabled>Select country</option>
          {countries.map((country) => (
             <option key={country.cca3} value={country.name.common}>
                {country.name.common}
             </option>
          ))}
        </select>
        <br />
        <button type='submit' className={styles.button}>Register</button>
     </form>
  )
}

export default RegistrationForm
