import React from 'react';
import './App.css';
// import Clients from './components/Clients';
// import Orders from './components/Orders';
// import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dashboard</h1>
      </header>
      <main className="App-main">
        <section className="App-sidebar">
          <h2>Sidebar</h2>
          <ul>
            <li><a href="">Products</a></li>
            <li><a href="">Clients</a></li>
            <li><a href="">Orders</a></li>
          </ul>
        </section>
        <section className="App-content">
          <h2>Cool Content</h2>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </section>
      </main>
    </div>
  );
}

export default App;
