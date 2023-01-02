import React, { useState } from "react";
import "./Dashboard.scss";
import { BiDownload } from "react-icons/bi";
import img from "./../assets/1.jpg";
import red from "./../assets/red.png";
import blue from "./../assets/blue.png";
import green from "./../assets/green.png";
import pink from "./../assets/pink.png";
import yellow from "./../assets/yellow.png";
import CircularColor from "react-circular-color";

const Dashboard = () => {
  const persons =[1,1,1,11,1,1];
  const [selectedIcon, setSelectedIcon] = useState(red);
  function handleColorChange(color) {}
  return (
    <div className="dashboard">
      <div className="top">
        <div className="top-first">
          <h2>Dashboard</h2>
          <button>
            <BiDownload />
            Generate report
          </button>
        </div>
        <div className="top-second">
          <div className="outter-card blue">
            <div className="top-second-card">
              <div className="img-container">
                <img
                  src="https://www.w3schools.com/bootstrap4/img_avatar3.png"
                  alt="Avatar"
                />
              </div>
              <div className="container">
                <h3>Angella Williams</h3>
                <p>Yumma</p>
              </div>
              <div className="tag">
                <p>
                  20<span>sec</span>
                </p>
              </div>
            </div>
          </div>
          <div className="outter-card purple">
            <div className="top-second-card">
              <div className="img-container">
                <img
                  src="https://www.w3schools.com/bootstrap4/img_avatar3.png"
                  alt="Avatar"
                />
              </div>
              <div className="container">
                <h3>David Valatine</h3>
                <p>Showertimer</p>
              </div>
              <div className="tag">
                <p>Next</p>
              </div>
            </div>
          </div>
          <div className="outter-card green">
            <div className="top-second-card">
              <div className="img-container">
                <img
                  src="https://www.w3schools.com/bootstrap4/img_avatar3.png"
                  alt="Avatar"
                />
              </div>
              <div className="container">
                <h3>Nisha Henry</h3>
                <p>Trebee</p>
              </div>
              <div className="tag">
                <p>Next</p>
              </div>
            </div>
          </div>
          <div className="outter-card yellow">
            <div className="top-second-card">
              <div className="img-container">
                <img
                  src="https://www.w3schools.com/bootstrap4/img_avatar3.png"
                  alt="Avatar"
                />
              </div>
              <div className="container">
                <h3>Nisha Henry</h3>
                <p>Trebee</p>
              </div>
              <div className="tag">
                <p>Next</p>
              </div>
            </div>
          </div>
          <div className="outter-card blue">
            <div className="top-second-card">
              <div className="img-container">
                <img
                  src="https://www.w3schools.com/bootstrap4/img_avatar3.png"
                  alt="Avatar"
                />
              </div>
              <div className="container">
                <h3>John Doe</h3>
                <p>Architect & Engineer</p>
              </div>
              <div className="tag">
                <p>Next</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="buttom">
        <div className="video-call">
          <div className="header">
            <h4>Live Stream</h4>
          </div>
          <div className="video-container">
            <video
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              controls
            ></video>
          </div>
        </div>
        <div className="right-container">
          <div className="light-control">
            <div className="header">
              <h4>LIGHT CONTROL</h4>
            </div>
            <div className="color-picker-container">
              <div className="img-container">
                <img src={img} alt="" />
              </div>
              <div className="color-picker">
                <CircularColor size={200} onChange={handleColorChange} />
                <div className="circle">
                  <img src={selectedIcon} alt="" />
                </div>
              </div>
              <div className="icons">
                <div
                  className="icon-container"
                  onClick={setSelectedIcon.bind(this, red)}
                >
                  <img src={red} alt="" />
                </div>
                <div
                  className="icon-container"
                  onClick={setSelectedIcon.bind(this, blue)}
                >
                  <img src={blue} alt="" />
                </div>
                <div
                  className="icon-container"
                  onClick={setSelectedIcon.bind(this, green)}
                >
                  <img src={green} alt="" />
                </div>
                <div
                  className="icon-container"
                  onClick={setSelectedIcon.bind(this, pink)}
                >
                  <img src={pink} alt="" />
                </div>
                <div
                  className="icon-container"
                  onClick={setSelectedIcon.bind(this, yellow)}
                >
                  <img src={yellow} alt="" />
                </div>
                <div
                  className="icon-container"
                  onClick={setSelectedIcon.bind(this, pink)}
                >
                  <img src={pink} alt="" />
                </div>
                <div
                  className="icon-container"
                  onClick={setSelectedIcon.bind(this, blue)}
                >
                  <img src={blue} alt="" />
                </div>
                <div
                  className="icon-container"
                  onClick={setSelectedIcon.bind(this, green)}
                >
                  <img src={green} alt="" />
                </div>
                <div
                  className="icon-container"
                  onClick={setSelectedIcon.bind(this, pink)}
                >
                  <img src={pink} alt="" />
                </div>
                <div
                  className="icon-container"
                  onClick={setSelectedIcon.bind(this, red)}
                >
                  <img src={red} alt="" />
                </div>
                <div
                  className="icon-container"
                  onClick={setSelectedIcon.bind(this, pink)}
                >
                  <img src={pink} alt="" />
                </div>
                <div
                  className="icon-container"
                  onClick={setSelectedIcon.bind(this, yellow)}
                >
                  <img src={yellow} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="light-control">
            <div className="header">
              <h4>PERSONS</h4>
            </div>
            <div className="persons-wrapper">
              {persons.map((r,i) => {
                return (
                  <div key={i} className="person-card-container">
                    <div className="avatr-container">
                      <img
                        src="https://www.w3schools.com/bootstrap4/img_avatar3.png"
                        alt=""
                      />
                    </div>
                    <div className="details">
                      <h3>Angella Williams</h3>
                      <p>Yumma</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard;
