import { Routes, Route } from "react-router-dom";
import "./styles.css";
import SideBar from "./x.svg";
import imgArr from "./numbers.js";
const RouteApp = () => {
  return (
    <>
      <div className="mainDiv">
    <h1>Hi</h1>
        <Routes>
          <Route path="/" element={<P1 />} />
          <Route path="/page2" element={<P2 />} />
          <Route path="/page3" element={<P3 />} />
          <Route path="/page4" element={<P4 />} />
        </Routes>
      </div>
    </>
  );
};

const P1 = () => {
  return (
    <div className="formDiv">
      <div>
        <div className="abso">
          <div>
            <img src={imgArr[0]} className="act"></img>
            <div>
              <p>STEP 1</p>
              <p>YOUR INFO</p>
            </div>
          </div>
          <div>
            <img src={imgArr[1]}></img>
            <div>
              <p>STEP 2</p>
              <p>SELECT PLAN</p>
            </div>
          </div>
          <div>
            <img src={imgArr[2]}></img>
            <div>
              <p>STEP 3</p>
              <p>ADD-ONS</p>
            </div>
          </div>
          <div>
            <img src={imgArr[3]}></img>
            <div>
              <p>STEP 4</p>
              <p>SUMMARY</p>
            </div>
          </div>
        </div>

        <img src={SideBar} className="mainImg"></img>
      </div>

      <div>
        <div>
          <h1>Personal Info </h1>
          <p>Please provide your name, email address and phone number.</p>
          <div className="input">
            <label>Name:</label>
            <input type="text" placeholder="Your Name"/>
            <label>Email Address:</label>
            <input type="text" placeholder="Email Address"/>
            <label>Phone Number:</label>
            <input type="text" placeholder="Phone Number"/>
          </div>
          <div className="btn">
            <div>Go Back</div>
            <div>Next</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const P2 = () => {
  return (
    <div className="formDiv">
      <div>a</div>
      <div>a</div>
      <div>a</div>
    </div>
  );
};

const P3 = () => {
  return (
    <div className="formDiv">
      <div>b</div>
      <div>b</div>
      <div>b</div>
    </div>
  );
};

const P4 = () => {
  return (
    <div className="formDiv">
      <h1>summary</h1>
    </div>
  );
};

export default RouteApp;
