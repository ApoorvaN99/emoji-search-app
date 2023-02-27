import React from 'react';
import './EmojiRow.css';

export default class EmojiRow extends React.Component {
  render() {
    const codePointHex = this.props.symbol.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
    return (
      <div
        className="component-emoji-result-row copy-to-clipboard"
        data-clipboard-text={this.props.symbol}
      >
        <img src={src} alt={this.props.title} />
        <span className="title">{this.props.title}</span>
        <span className="info">Click to copy emoji</span>
      </div>
    );
  }
}
