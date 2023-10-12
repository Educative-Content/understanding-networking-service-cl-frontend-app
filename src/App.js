import React, { useState, useEffect } from 'react';
import './App.css'; // Import a CSS file for styling

const App = () => {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    fetch('/api/books')
      .then(resp => resp.json()) // Parse the response as JSON
      .then(data => {
        setResponseData(data);
      })
      .catch(err => {
        console.log('======failure=======');
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1>Cloud labs</h1>
      <div className="card-container">
        {responseData && responseData.map(item => (
          <div key={item.id} className="card">
            <h2>{item.title}</h2>
            <img src={item.imageLink} alt={item.title} className="card-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
