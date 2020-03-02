import React from "react";
import "./styles.css";

export default function Career() {
  return (
    <div className="introduction" id="exp">
      <h2 className="cheader">Career</h2>
      <hr />
      <div className="career">
        <div className="cleft">
          <div className="cblock">
            <ul>
              <b>California State University, Fullerton</b>
            </ul>
            <ul>Reaseach Assistant/Programmer</ul>
            <ul>Fullerton, CA</ul>
            <ul>Aug 2019 - Dec 2020</ul>
          </div>
          <div className="cblock">
            <ul>
              <b>Tech Mahindra</b>
            </ul>
            <ul>Software Engineer</ul>
            <ul>Pune, India</ul>
            <ul>Aug 2016 - Aug 2018</ul>
          </div>
        </div>
        <div className="cright">
          <div className="cpullright">
            <img
              src="https://pbs.twimg.com/profile_images/673942335068049408/0N1rT3re_400x400.png"
              height="80"
              width="80"
              alt=""
            />
          </div>
          <div className="c2pullright">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Tech_Mahindra_New_Logo.svg/618px-Tech_Mahindra_New_Logo.svg.png"
              height="80"
              width="110"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
