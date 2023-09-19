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
      <h1>Data Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Book</th>
            <th>Author</th>
    
          </tr>
        </thead>
        <tbody>
          {responseData && responseData.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
