import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/searchBar';
import ListAnswers from './components/listAnswers';

function App() {
  return (
    <div id="App">
      <header className="App-header">
		
		<SearchBar />
        
      </header>
	  
	  <ListAnswers limit={1} />
	  
    </div>
  );
}

export default App;
