import React, { useState } from "react";
import helpData from "../helpData";

export default function Help({ helpVisible, setHelpVisible }) {
  const [activeData, setActiveData] = useState(helpData[0]);
  const { heading, paragraph, id, video } = activeData;

  const findActive = (id) => {
    const data = helpData.find((item) => item.id === id);
    setActiveData(data);
  };

  return (
    <div className={helpVisible ? "help__info help__info--anim" : "help__info"}>
      <button
        className={helpVisible ? "help__close" : "help__close--none"}
        onClick={() => {
          setHelpVisible(false);
        }}
      >
        X
      </button>
      <nav className="help__nav">
        <ul className="help__nav-list">
          {helpData.map((item) => (
            <li
              className={`help__nav-item ${
                id === item.id && "help__nav-item--active"
              }`}
              key={item.id}
              onClick={() => findActive(item.id)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
      <div className="help-main">
        <h2 className="help-main__heading">{heading}</h2>
        <p className="help-main__paragraph">{paragraph}</p>
        <video controls loop width="100%" key={`/assets/${video}.mp4`}>
          <source src={`/assets/${video}.mp4`} type="video/mp4"></source>
          Your browser does not support HTML5 video.
        </video>

        <div className="help-main__more">
          <h3 className="help-main__more-heading">
            Not quite what you are looking for?
          </h3>
          <button className="help-main__more-btn">Get Help</button>
        </div>
      </div>
    </div>
  );
}
