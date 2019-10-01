import React from "react";

// 1 Connect Component to Redux
import { connect } from 'react-redux';



class Counter extends React.Component {

  constructor(props) {
    super(props);
  }

  increment = () => {
    this.props.dispatch({type:"INCREMENT"});
  };

  decrement = () => {
    this.props.dispatch({type:"DECREMENT"});
  };

  reset = () => {
    this.props.dispatch({type:"RESET"});
  };

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">{this.props.counter.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
        <div>
            <button className="reset" onClick={this.reset}>RESET</button>
        </div>

      </div>
    );
  }
}

// 1.1 Connect Component to Redux    
const mapStateToProps = state => {
  return {
    counter: state.counter,   
  }
}

/*
const mapDispatchToProps = {};
*/

export default connect(mapStateToProps /* ,  mapDispatchToProps */ )(Counter);  //mapping from state into props

