import logo from './logo.svg';
import './App.css';
import Vote from './components/Vote';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trumpVotes: 0,
      bidenVotes: 0,
    };
  }

  countTotalVotes = (numberofVotes, candidate) => {
    if (candidate == 'Donald Trump') {
      this.setState({ trumpVotes: numberofVotes });
    } else if (candidate == 'Joe Biden') {
      this.setState({ bidenVotes: numberofVotes });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="total">
          Total Votes<br></br>
          {this.state.bidenVotes + this.state.trumpVotes}
        </div>
        <div className="voteContainer">
          <div className="donald">
            <Vote name={'Donald Trump'} onIncrement={this.countTotalVotes} />
          </div>
          <div className="joe">
            <Vote
              className="joe"
              name={'Joe Biden'}
              onIncrement={this.countTotalVotes}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
