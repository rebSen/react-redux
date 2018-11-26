import React from 'react';
import { connect } from 'react-redux';
import {addAction, removeAction, addtenAction, removetenAction, resetAction} from './actions/countAction'


const mapStateToProps = state => ({
  counter: state
});


const mapDispatchToProps = dispatch => ({
  onAddOne: () => dispatch(addAction),
  onRemoveOne: () => dispatch(removeAction),
  onAddTen : () => dispatch(addtenAction),
  onRemoveTen : () => dispatch(removetenAction),
  onReset : () => dispatch(resetAction),

}) 

const CounterContainer = ({ counter, onAddOne, onAddTen, onRemoveOne, onReset, onRemoveTen }) => (
  <div>
      <p> Counter : {counter}</p>
      <button onClick={onAddOne}>+ 1</button>
      <button onClick={onRemoveOne}>- 1</button>
      <button onClick={onAddTen}>+ 10</button>
      <button onClick={onRemoveTen}>- 10</button>
      <button onClick={onReset}>Reset</button>

  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)
