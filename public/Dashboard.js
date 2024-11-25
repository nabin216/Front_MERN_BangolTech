// myapp/public/components/dashboard/Dashboard.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make an API call to fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/dashboard'); // Update with your actual endpoint
        setData(response.data); // Assuming the data is an array
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li> // Replace with the actual property names in your data
          ))}
        </ul>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default Dashboard;
