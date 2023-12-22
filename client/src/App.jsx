import { useEffect, useState } from 'react';
import './app.css';
import Table from './Table';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('http://localhost:5000');
        setData(res.data);
      } catch (error) {
        console.error('Error fetching Users:', error);
      }
    };
    fetchUsers();
  }, []);

  
  const filteredData = data.filter((user) =>
    user.first_name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className='app'>
      <input
        type='text'
        placeholder='Search....'
        className='search'
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={filteredData} />
    </div>
  );
}

export default App;
