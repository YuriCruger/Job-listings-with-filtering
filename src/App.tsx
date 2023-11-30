import { useState, useEffect } from 'react';
import Cards from './components/Cards';
import Users from './types/Users';
import Header from './components/Header';

function App() {
  const [data, setData] = useState<Users[] | undefined>(undefined)
  useEffect(() => {
    fetch('../data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error retrieving data.');
        }
        return response.json();
      })
      .then(jsonData => {
        setData(jsonData);
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
  }, []);

  return (
    <div>
      <Header/>

      <main className='bg-light_grayish_cyan_bg'>
        <Cards data={data} />
      </main>
    </div>
  )
}

export default App
