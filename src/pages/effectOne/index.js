import { useState } from "react";

import './styles.css';

export function EffectOne() {
  const [textWithEffect, setTextWithEffect] = useState('');
  const [inputText, setInputText] = useState('');
  const [isRendering, setIsRendering] = useState(false);

  function renderTextToClientWithEffectOne(event) {
    event.preventDefault();

    setIsRendering(true);
    
    const array = inputText.split('');
    let countC = '';

    array.forEach((c, i) => {
      setTimeout(() => {
        setTextWithEffect(countC += c);
      }, 75 * i);
    });

    setTimeout(() => {
      setInputText('')
      setIsRendering(false);
    }, (75 * array.length) + 2000);
  }

  return(
    !isRendering ? (
      <main className="page">
        <form onSubmit={renderTextToClientWithEffectOne} className="container">
          <label htmlFor="input_text">Enter text to apply effect.</label>
          <input 
            type="text" 
            name="input_text" 
            value={inputText} 
            onChange={event => setInputText(event.target.value)}
          />
        </form>
      </main>
    ) : (
      <main className="page">
        <span>
          {textWithEffect}
        </span>
      </main>
    )
  );
}