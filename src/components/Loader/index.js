import React from 'react';
import {Spinner} from "react-bootstrap";
import './style.scss'

const Loader = () => {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden"></span>
    </Spinner>
  );
};

export default Loader;