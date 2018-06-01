import React,{Component} from 'react';
import PlayerChoice from './PlayerComputer';
import Computers from './Computers';

class Panel extends Component {
  constructor(props){
    super(props);
    this.state = {
      showComputers: false,
      showUserAndComputer: false,
    }
  }

  render(){
    return(
        <div className='panel'>

            <div className="choise" onClick={()=> this.setState({showUserAndComputer: true,
               showComputers: false})}>
                player VS computer
            </div>

            <div className="choise" onClick={()=> this.setState({showComputers: true,
               showUserAndComputer: false})}>
                computer VS computer
            </div>

            {this.state.showUserAndComputer &&
            <PlayerChoice />}

            {this.state.showComputers &&
            <Computers />}

        </div>
        )
    }
};

export default Panel;