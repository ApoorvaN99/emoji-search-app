import React from 'react';
import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <header className="component-header">
        <img src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png" alt="cat" />
        Emoji Search
        <img src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png" alt="cat" />
      </header>
    );
  }
}
