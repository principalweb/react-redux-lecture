import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
 
  handleNum1Change = (evt) => {
    this.props.dispatch({value: Number(evt.target.value), type: 'first'})
  }

  handelNum2Change = (evt) => {
    this.props.dispatch({value: Number(evt.target.value), type: 'second'})
  }

  render () {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <input type="number" onChange={this.handleNum1Change}/>
          <span>+</span>
          <input type="number" onChange={this.handelNum2Change}/>
          <span>=</span>
          <span>{this.props.count ? this.props.count : 0}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.calc.count
})

export default connect(mapStateToProps)(Counter);