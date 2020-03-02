import React from "react";
import "./styles.css";

export default function Education() {
  return (
    <div className="edu" id="edu">
      <h2 className="eheader">Education</h2>
      <hr />
      <div className="education">
        <div className="eright">
          <div className="pullright">
            <img
              src="https://pbs.twimg.com/profile_images/673942335068049408/0N1rT3re_400x400.png"
              height="80"
              width="80"
            />
          </div>
          <div className="punepullright">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/f/f6/Savitribai_Phule_Pune_University_Logo.png"
              height="80"
              width="80"
            />
          </div>
        </div>
        <div className="eleft">
          <div className="eblock1">
            <ul>
              <b>California State University, Fullerton</b>
            </ul>
            <ul>Masters in Computer Science</ul>
            <ul>May 2020</ul>
          </div>
          <div className="eblock2">
            <ul>
              <b>University of Pune</b>
            </ul>
            <ul>Bachelors in Computer Science</ul>
            <ul>May 2018</ul>
          </div>
        </div>
      </div>
    </div>
  );
}
