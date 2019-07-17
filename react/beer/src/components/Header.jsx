import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

class Header extends Component {
  static props = {
    siteName: PropTypes.string
  }
  state = {  }
  render() { 
    return (  
      <h1>
        <Link to="/">{this.props.siteName}</Link>
      </h1>
    );
  }
}
 
export default Header;