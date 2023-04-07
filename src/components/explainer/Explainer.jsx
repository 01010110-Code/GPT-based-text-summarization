import React, { useState } from "react";
import axios from "axios";
import "./explainer.css";

const Explainer = () => {
  const [inputText, setInputText] = useState("");
  const [summary, setSummary] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSummarizeClick = () => {
    axios
      .post("http://localhost:5173/api/summary", { text: inputText })
      .then((response) => {
        setSummary(response.data.summary);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <div className="demo__grid">
        <div className="demo__grid-column-1">
          <div className="demo__headline">
            <h1 className="gradient__text">
              {" "}
              TextXtract: Generate Summaries of Long Texts with AI
            </h1>
          </div>
          <p className="demo__description">
            TextXtract is a powerful web application that uses advanced AI
            algorithms to generate summaries of long articles, research papers,
            and other texts.
            <br />
            With TextXtract, you can input any text and receive a concise
            summary that captures the most important information in just a few
            sentences. Whether you're a student, researcher, or just a busy
            professional, TextXtract is the perfect tool to save time and stay
            on top of your reading.
            <br /> Try it today and experience the power of GPT-based text
            summarization!
          </p>
        </div>
        <div className="demo__grid-column-2">
          <textarea
            className="demo__text"
            required
            minLength={200}
            placeholder="input the text you want to summarize here"
            value={inputText}
            onChange={handleInputChange}
          ></textarea>
          <button className="demo__submit" onClick={handleSummarizeClick}>
            Get Summary
          </button>
          {summary && (
            <div className="demo__summary">
              <h2>Summary</h2>
              <p>{summary}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Explainer;