import React, { Component } from 'react';
import styles from './Vote.module.css';

class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = { numberOfVotes: 0 };
  }

  incrementVotes = () => {
    let newAmount = this.state.numberOfVotes + 1;
    this.setState({ numberOfVotes: newAmount });

    this.props.onIncrement(newAmount, this.props.name);
  };
  render() {
    return (
      <div className={styles.container} onClick={this.incrementVotes}>
        <div>{this.props.name}</div>
        <div>{this.state.numberOfVotes}</div>
      </div>
    );
  }
}

export default Vote;
