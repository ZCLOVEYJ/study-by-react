import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//获取图片相关的数据
var imagesDatas = require('../src/data/imagesData.json');

//利用自执行的函数，将图片名信息转成图片URL路径信息
imagesDatas = (function genImageURL(imagesDatasArr) {
  for (let i = 0, j = imagesDatasArr.length; i < j; i++) {
    var simpleImageData = imagesDatasArr[i];
    simpleImageData.imageURL = require('../src/images/' + simpleImageData.fileName);
    imagesDatasArr[i] = simpleImageData;
  }
  return imagesDatasArr;
})(imagesDatas);




class App extends Component {
  render() {
    return (

      <section className="stage">
        <section className="img-sec"> </section>
        <nav className="controller-nav"></nav>
      </section>
    );
  }
}

export default App;

