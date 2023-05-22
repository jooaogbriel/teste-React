import { useState } from 'react';

const AutocorrectApp = ({ corrections }) => {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === ' ') {
      const words = text.split(' ');
      const lastWord = words[words.length - 2];

      if (corrections[lastWord]) {
        words[words.length - 2] = corrections[lastWord];
        setText(words.join(' '));
      }
    }
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleTextChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default AutocorrectApp;