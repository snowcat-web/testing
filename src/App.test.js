import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from './App';
import Profile from './components/Profile/Profile';
import Login from './pages/Login';
import { shallow } from 'enzyme';
import Toolbar from './components/Toolbar/Toolbar'
import { act } from "react-dom/test-utils";

let container = null;

beforeEach(() => { 
  process.env = Object.assign(process.env, { REACT_APP_API_KEY:'xxxxx' });  
  container = document.createElement("div");
  document.body.appendChild(container);
});

it("renders correctly", () => {
  shallow(<App />);
});
