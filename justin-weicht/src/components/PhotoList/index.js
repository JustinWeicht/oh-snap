import React from 'react';

const PhotoList = ({ category }) => {
  return (
    <div className="row">
      <div className="column">
        <a href="http://bardic.herokuapp.com/" rel="noreferrer" target="_blank">
          <img src={require("../../assets/small/work/0.jpg").default} alt="gallery" />
        </a>
        <a href="https://module-14-tech-blog.herokuapp.com/" rel="noreferrer" target="_blank">
          <img src={require("../../assets/small/work/4.jpg").default} alt="gallery" />
        </a>
      </div>
      <div className="column">
        <a href="https://booklyst-project.herokuapp.com/" rel="noreferrer" target="_blank">
          <img src={require("../../assets/small/work/1.jpg").default} alt="gallery" />
        </a>
        <a href="https://creepy-nightmare-85054.herokuapp.com/" rel="noreferrer" target="_blank">
          <img src={require("../../assets/small/work/5.jpg").default} alt="gallery" />
        </a>
      </div>
      <div className="column">
        <a href="https://foodisfuel.github.io/gp5_project1/index.html" rel="noreferrer" target="_blank">
          <img src={require("../../assets/small/work/2.jpg").default} alt="gallery" />
        </a>
        <a href="https://justinweicht.github.io/taskmaster-pro/" rel="noreferrer" target="_blank">
          <img src={require("../../assets/small/work/6.jpg").default} alt="gallery" />
        </a>
      </div>
      <div className="column">
        <a href="https://module-19-budget-tracker.herokuapp.com/" rel="noreferrer" target="_blank">
          <img src={require("../../assets/small/work/3.jpg").default} alt="gallery"/>
        </a>
        <a href="https://JustinWeicht.github.io/run-buddy/" rel="noreferrer" target="_blank">
          <img src={require("../../assets/small/work/7.jpg").default} alt="gallery" />
        </a>
      </div>
    </div>
  );
};

export default PhotoList;
