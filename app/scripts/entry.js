// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Backbone from 'backbone';
import FilterBox from'./components/FilterBox.js';
import NavComponent2 from './components/NavComponent2.js';
import JobRow from './components/JobRow.js';
import InfoBox from './components/InfoBox.js';
import CompanyBox from './components/CompanyBox.js';

// import a module from another file.
import tiy from './app.js';



ReactDOM.render(<NavComponent2 />, document.querySelector('.main1'));
ReactDOM.render(<FilterBox />, document.querySelector('.main2'));
ReactDOM.render(<JobRow />, document.querySelector('.main3'));
ReactDOM.render(<InfoBox />, document.querySelector('.main4'));
ReactDOM.render(<CompanyBox />, document.querySelector('.main5'));
