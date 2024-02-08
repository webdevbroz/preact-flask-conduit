import { render } from "preact";
// import { LocationProvider, Router, Route } from 'preact-iso';

// import { Header } from './components/Header.jsx';
// import { Home } from './pages/Home/index.jsx';
// import { NotFound } from './pages/_404.jsx';
// import './style.css';
import { useState, useEffect } from "preact/hooks";

export function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:5000/items");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items: ", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h1> Items List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

render(<App />, document.getElementById("app"));
