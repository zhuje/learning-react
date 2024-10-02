import React from 'react';
import logo from './logo.svg';
import './App.css';

interface ItemProps {
    name: string;
    isPacked: boolean
}

const PackingItem: React.FC<ItemProps> = ({name, isPacked}) => {
  if (isPacked) {
    return <li className="item">{name} ✅</li>;
  }
  return <li className="item">{name}</li>;
}

const PackingList = () => {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <PackingItem 
          isPacked={true} 
          name="Space suit" 
        />
        <PackingItem 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <PackingItem 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}



function App() {
  return (
    <div>
      <PackingList />
    </div>
  );
}

export default App;
