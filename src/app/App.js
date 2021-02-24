import {useState} from 'react';

import './App.css';
import EmojiResults from './EmojiResults';
import emojis from './data/emojis.json';
import SearchForm from './SearchForm';

const App = () => {
  const [filteredEmojis, setFilteredEmojis] = useState(emojis);

  const handleSearch = (searchStr) => {
    const lcSearchString = searchStr.toLowerCase();
    setFilteredEmojis(emojis.filter(e => e.title.toLowerCase().includes(lcSearchString) || e.keywords.toLowerCase().includes(lcSearchString)))
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <SearchForm onSearch={handleSearch} />
      <EmojiResults emojis={filteredEmojis} />
    </div>
  );
}

export default App;