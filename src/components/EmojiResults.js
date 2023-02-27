import React from 'react';
import EmojiRow from './EmojiRow';
import Clipboard from 'clipboard';

export default class EmojiResults extends React.Component {
  componentDidMount() {
    this.clipboard = new Clipboard('.copy-to-clipboard');
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }
  render() {
    return (
      <div className="component-emoji-results">
        {this.props.emojiData.map((emoji) => (
          <EmojiRow
            title={emoji.title}
            key={emoji.title}
            symbol={emoji.symbol}
          />
        ))}
      </div>
    );
  }
}
