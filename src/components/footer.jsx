import React, { Component } from 'react';

const Footer = (props) => {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">© {props.copyright}</a>
      </nav>
      );
}

export default Footer;
