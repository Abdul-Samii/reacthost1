import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {ActionName,actionWish} from './action/Action';

function App(props) {
  const wish=props.mywish.map(item=>{
        return <p>{item}</p>
      })
  return (
    <div className="App">
      <h1>Welcome to Redux Testing</h1>
      <h1>Name -> {props.myname}</h1>
      {wish}
      <button onClick={()=>{props.changeName()}} >Change</button>
      <button onClick={()=>{props.addWish()}} >Add Wish</button>
    </div>
  );
}

const mapStateToProps=(state)=>{
  return {
    myname:state.name,
    mywish:state.wish
  }
}

function mapDispatchToProps(dispatch) {
  return {

    changeName: (name) => {
      dispatch(ActionName(name))
         },

    addWish:()=>{dispatch(actionWish())}
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
