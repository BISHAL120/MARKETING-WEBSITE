import './App.css';
import Article from './Component/Article/Article';
import Header from './Component/Header/Header';
import Services from './Component/Services/Services';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Services></Services>
      <Article></Article>
    </div>
  );
}

export default App;
