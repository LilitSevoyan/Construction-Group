import React from "react"
//import "../../Style/aboutpage/about.css"
import {gyurjyan27} from '../../assets';

let divStyle = {
  backgroundImage: "url(" + gyurjyan27 + ")"
};

export default function ImageWrapper() {
  
  return (
      <div className="MainContent">
          <div style={ divStyle } className="AboutWrapper">
            <div className="CountsWrapper">
              <div className="counts-bg">
                <h1 className="about-main-title">ՀԱՄԱԼԻՐԻ ՄԱՍԻՆ</h1>
              </div>
            </div>
          </div>
      </div>
    
  )
}
