import React,{Component} from 'react';
import '../App.css';
import rock from '../images/rock.png';
import paper from '../images/paper.png';
import scissor from '../images/scissor.svg';
import Score from './Score';

class PlayerComputer extends Component{
    constructor(props){
        super(props);
        this.state ={
            computerResult: 0,
            userResult: 0,
            userChoice: '',
            computerChoice: '',
            winner: '',
            showUserMessage: true
        }
    }

    handleReset = ()=>{
        this.setState({ computerResult: 0, userResult: 0});
    }

     userWin(userChoice,computerChoice){
         const { userResult} = this.state;
        this.setState({userResult : userResult+1, userChoice, computerChoice, winner: 'user'});
    };

     userLose(userChoice,computerChoice){
         const { computerResult} = this.state;
        this.setState({computerResult: computerResult+1, userChoice, computerChoice, winner:'computer'});
    };

     userDraw(userChoice,computerChoice){
        this.setState({userChoice,computerChoice, winner: 'no one'})
    }

    handleImageClick(userChoice){
        const choices = ["rock", "paper", "scissor"];
        const randomChoice = Math.floor(Math.random()*3);
        const computerChoice = choices[randomChoice];
        this.setState({showUserMessage: false})

        switch(`${userChoice} vs ${computerChoice}`){
            case "rock vs scissor":
            case "paper vs rock":
            case "scissor vs paper":
                this.userWin(userChoice,computerChoice);
                break;
            case "scissor vs rock":
            case "rock vs paper":
            case "paper vs scissor":
                this.userLose(userChoice,computerChoice);
                break;
            case "scissor vs scissor":
            case "rock vs rock":
            case "paper vs paper":
                this.userDraw(userChoice,computerChoice);
                break;
            default:
        }
    }

    render(){
        const { userResult, computerResult, computerChoice, userChoice, winner, showUserMessage}= this.state;
        return(
            <div>

                <Score
                  userResult={userResult}
                  computerResult={computerResult}
                  handleReset={this.handleReset}
                  computerChoice={computerChoice}
                  userChoice={userChoice}
                  winner={winner}
                  showUser
                  showUserMessage={showUserMessage}/>

            <div className="player-choose">
                <img src={rock} className="choice-image" alt="rock" id="rock"
                onClick={()=>this.handleImageClick('rock')}/>

                <img src={paper} className="choice-image" alt="paper" id="paper"
                onClick={()=>this.handleImageClick('paper')}/>

                <img src={scissor} className="choice-image" alt="scissor" id="scissor"
                onClick={()=>this.handleImageClick('scissor')}/>
            </div>
            </div>
            )
    }
};

export default PlayerComputer;