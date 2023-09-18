// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const[info, setInfo]=useState(['loading...'])

  useEffect(() => {
    const information= axios.get('http://localhost:3000/api/books')
      .then(response => {
        setData(response.data);
        setInfo(information.data)
        console.log(information.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Data from API</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}{item.author}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
