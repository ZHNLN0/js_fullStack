import React, {Component} from 'react';
import {connect} from 'react-redux'
import logo from './logo.svg';
import './App.css';

class Count extends Component {
  
  state = {  }
  handleDe = () => {
    // store.dispatch({type:'DECREMENT'})
    
    this.props.decrement()
  }
  handleIn = () =>  {
    // store.dispatch({type:'INCREMENT'})
    this.props.increment()
  }
  handleAddFilm = () => {
    // store.dispatch({type:'ADD_FILM', film: {name: '123'}})
    this.props.addFilm()
  }
  render() { 
    const { count, films} = this.props
    console.log(this.props)
    return (  
      <div>
        count: {count}
      
        <button onClick={this.handleIn}>+</button>
        <button onClick={this.handleDe}>-</button>
        <button onClick={this.handleAddFilm}>添加电影</button>
        {
          films.map((film, i)  => (
            <li key={i}>{film.name}</li>
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    films: state.films
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    foo: () => {console.log('foo')},
    increment: () => {dispatch({type: 'INCREMENT'})},
    decrement: () => {dispatch({type: 'DECREMENT'})},
    addFilm: () => {dispatch({type: 'ADD_FILM', film: {name: '123'}})}
  }
  
}
export default connect(mapStateToProps, mapDispatchToProps)(Count);