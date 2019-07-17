import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Loader from './Loader'


class Results extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    beers: PropTypes.array.isRequired
  }
  state = {  }
  render() { 
    if(this.props.loading) {
        return <Loader message="加载中"></Loader>
      }
  }
}
 
export default Results;