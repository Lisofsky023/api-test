import React, { useState, useEffect } from 'react';
import Menu from './components/Menu';
import NewsGrid from './components/NewsGrid';
import './App.css';


function App() {
  const [items, setItems] = useState([])
  const [active, setActive] = useState(1)
  const [category, setCategory] = useState("general")

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=8172e27122cb4ef9ab67c72ab7e07757`)
    .then(res => res.json())
    .then(data => setItems(data.articles))
  }, [category])

  return (
    <div className="App">
      <h1 className='title'>See The Latest News</h1>
      <Menu active={active} setActive={setActive} setCategory={setCategory}/>
      <NewsGrid items={items}/>
    </div>
  );
}

export default App;
