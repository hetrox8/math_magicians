import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=success', {
          headers: {
            'X-Api-Key': 'EXh0I39TFVZtzTYhV9/jkA==xTfqqoTOZ7qABmk4',
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          const randomIndex = Math.floor(Math.random() * data.length);
          setIsLoading(false);
          setQuote(data[randomIndex]?.quote);
        } else {
          setError('Error fetching quotes');
          setIsLoading(false);
        }
      } catch {
        setError('Error fetching quotes');
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="D-quotes">
      {isLoading && <p className="R-Quotes">Loading...</p>}
      {!isLoading && error && (
      <p className="R-Quotes">
        Error:
        {error}
      </p>
      )}
      {!isLoading && !error && <p className="R-Quotes">{quote}</p>}
    </div>
  );
};

export default Quotes;
