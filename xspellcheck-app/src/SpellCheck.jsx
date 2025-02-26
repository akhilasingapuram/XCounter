import React, { useState } from "react";

const customDictionary = {
  teh: "the",

  wrok: "work",

  fot: "for",

  exampl: "example",
};

const SpellCheck = () => {
  const [inputText, setInputText] = useState("");
  const [suggestedText, setSuggestedText] = useState("");

  const handleTextChange = (e) => {
    const text = e.target.value;
    setInputText(text);
    checkSpelling(text);
  };

  const checkSpelling = (text) => {
    let words = text.split(" ");
    let correctedText = "";
    let firstMisspelling = null;
    words.forEach((word) => {
      if (customDictionary[word.toLowerCase()]) {
        if (!firstMisspelling) {
          firstMisspelling = word;
        }
        correctedText += customDictionary[word.toLowerCase()] + " ";
      } else {
        correctedText += word + " ";
      }
    });
    if (firstMisspelling) {
      setSuggestedText(
        `Did you mean: ${customDictionary[firstMisspelling.toLowerCase()]}?`
      );
    } else {
      setSuggestedText("");
    }
    return correctedText.trim();
  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        placeholder="Enter text..."
        rows={4}
        cols={24}
        value={inputText}
        onChange={handleTextChange}
      />
      {suggestedText && <p>{suggestedText}</p>}
    </div>
  );
};
export default SpellCheck;
