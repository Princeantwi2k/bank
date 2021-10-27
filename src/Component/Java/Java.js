

import React, { useRef, useLayoutEffect } from "react";
import "../Java/Java.css";
import img from "../../Image/me.jpg";
const Home = () => {
  const inputRef = useRef(null);

  const text = "Hi am Prince Antwi a software developer ";

  let idx = 1;

  useLayoutEffect(() => {
    writeText();
  }, []);

  function writeText() {
    const textEl = document.getElementById("text");
    const speedEl = document.getElementById("speed");
    let speed = 300 / inputRef.current.value;
    textEl.innerText = text.slice(0, idx);
    idx++;

    if (idx > text.length) {
      idx = 1;
    }
    setTimeout(writeText, speed);
  }

  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 java">
              <div className="col-xs-12 col-sm-12 col-md-8">
                <h1 id="text">Starting......</h1>
                <label for="speed">Speed</label>
                <input
                  ref={inputRef}
                  type="number"
                  name="speed"
                  id="speed"
                  value="1"
                  min="1"
                  max="5"
                  step="1"
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4">
                {" "}
                <img src={img} alt="profile" className="profile-pic" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
