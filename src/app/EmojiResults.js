import React from "react";
import PropTypes from "prop-types";

import EmojiResultRow from './EmojiResultRow';

const EmojiResults = ({emojis}) => {
  return (
    <div className="emoji-results">
      {emojis.map(emojiData => (
        <EmojiResultRow
          key={emojiData.title}
          symbol={emojiData.symbol}
          title={emojiData.title}
        />
      ))}
    </div>
  );
}

export default EmojiResults;