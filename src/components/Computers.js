import React,{ Component } from 'react';
import Score from './Score';

class Computers extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstComputerResult: 0,
      secondComputerResult: 0,
      firstComputerChoice: '',
      secondComputerChoice: '',
      winner: '',
      showMessage: true,
    }
  }

  handleReset = ()=>{
    this.setState({ firstComputerResult: 0, secondComputerResult: 0});
  }

  firstComputerWin(firstComputerChoice,secondComputerChoice){
    const { firstComputerResult} = this.state;
   this.setState({firstComputerResult : firstComputerResult+1, firstComputerChoice,
     secondComputerChoice, winner: 'first computer'});
  };

  firstComputerLoose(firstComputerChoice,secondComputerChoice){
      const { secondComputerResult} = this.state;
    this.setState({secondComputerResult: secondComputerResult+1, firstComputerChoice,
       secondComputerChoice, winner:'second computer'});
  };

  Draw(firstComputerChoice,secondComputerChoice){
    this.setState({firstComputerChoice,secondComputerChoice, winner: 'no one'})
  };

  handleButtonClick(){
    const choices = ["rock", "paper", "scissor"];
    const firstRandom = Math.floor(Math.random()*3);
    const SecondRandom = Math.floor(Math.random()*3);
    const firstComputerChoice = choices[firstRandom];
    const secondComputerChoice = choices[SecondRandom];
    this.setState({showMessage: false})

    switch(`${firstComputerChoice} vs ${secondComputerChoice}`){
        case "rock vs scissor":
        case "paper vs rock":
        case "scissor vs paper":
            this.firstComputerWin(firstComputerChoice,secondComputerChoice);
            break;
        case "scissor vs rock":
        case "rock vs paper":
        case "paper vs scissor":
            this.firstComputerLoose(firstComputerChoice,secondComputerChoice);
            break;
        case "scissor vs scissor":
        case "rock vs rock":
        case "paper vs paper":
            this.Draw(firstComputerChoice,secondComputerChoice);
            break;
        default:
    }
  }

  render(){
    const {firstComputerResult, secondComputerResult, firstComputerChoice, secondComputerChoice,
       winner, showMessage} = this.state;
    return(
      <div>

        <div className="computer-game-start"
        onClick={()=>this.handleButtonClick()}>
          play
        </div>

        <Score
            firstComputerResult={firstComputerResult}
            secondComputerResult={secondComputerResult}
            handleResultReset={this.handleReset}
            firstComputerChoice={firstComputerChoice}
            secondComputerChoice={secondComputerChoice}
            winner={winner}
            showComputer
            showMessage={showMessage}
            />

      </div>
      );
  }
};

export default Computers;