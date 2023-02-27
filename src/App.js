import React from 'react';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import './App.css';
import filterEmoji from './logic/filterEmoji';
import EmojiResults from './components/EmojiResults';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmojis: filterEmoji('', 20),
    };
  }

  handleSearchChange = (e) => {
    this.setState({
      filteredEmojis: filterEmoji(e.target.value, 20),
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <EmojiResults emojiData={this.state.filteredEmojis} />
      </div>
    );
  }
}
