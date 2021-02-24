import React from "react";

const EmojiResultRow = ({title, symbol}) => {
  return (
    <div className="emoji">
      <span className="emoji__symbol">{symbol}</span>
      <span className="emoji__title">{title}</span>
    </div>
  )
}

export default EmojiResultRow;