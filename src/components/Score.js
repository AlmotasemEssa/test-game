import React, { Component} from 'react';
import computer from '../images/computer.jpg';
import user from '../images/user.png';
import '../App.css';

class Score extends Component{
    render()
    {

      const {userChoice, computerChoice,userResult, computerResult, handleReset, winner,
        firstComputerResult,secondComputerResult, handleResultReset,firstComputerChoice,
        secondComputerChoice,showComputer, showUser, showMessage, showUserMessage
      } = this.props;

      return(
          <div className="score">
              <div className="score-header">
                <p> Score</p>
              </div>
              <div className="result">
                {showUser && <img src={user} className="score-player" alt="User Icon"/>}

                {showComputer && <img src={computer} className="score-computer" alt="Computer Icon" />}

                {showUser && <div className="score-numbers">
                    <span>{userResult}</span>
                    -
                    <span>{computerResult}</span>
                </div>
                }

                {showComputer && <div className="score-numbers">
                    <span>{firstComputerResult}</span>
                    -
                    <span>{secondComputerResult}</span>
                </div>
                }

                <img src={computer} className="score-computer" alt="Computer Icon" />
              </div>
              <div className="reset" onClick={(e)=> showUser ? handleReset() : handleResultReset()}>
                  Reset Score
              </div>
              <div className="final-result">
                  {showMessage &&
                    <p> Welcome to  the game, please press Play to start playing</p>
                  }

                  {showUserMessage &&
                    <p> Welcome to the game, please choose from pictures below </p>
                  }

                  { showUser && !showUserMessage && <p> player chose {userChoice}
                   {` `}and computer chose  {computerChoice} so  {winner} won </p>
                  }

                  { showComputer && !showMessage && <p> first Computer chose {firstComputerChoice}
                  {` `}and second Computer chose {secondComputerChoice} so  {winner} won </p>
                  }
              </div>
          </div>
            );
    }
};

export default Score;