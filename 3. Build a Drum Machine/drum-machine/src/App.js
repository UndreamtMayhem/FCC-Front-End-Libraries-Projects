import React, {Component} from 'react';
import './App.css';

const soundBank = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

class Display extends React.Component {
  render() {
    return <header id="display" className="App-header">
      <p>Display from component</p>
      <p>To be implemented</p>
    </header>

  }
}

class DrumButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };

    // This binding is necessary to make `this` work in the callback
    this.playSound = this
      .playSound
      .bind(this);
    this.handleKeyPress = this
      .handleKeyPress
      .bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.playSound();
    }
  }

  playSound(e) {
    const sound = document.getElementById(this.props.keyTrigger);
    sound.play();
  }

  render() {
    return (
      <div id={this.props.soundId} onClick={this.playSound}>
        <audio
          controls
          id={this.props.keyTrigger}
          src={this.props.source}
          onKeyPress={this.handleKeyPress}></audio>
        {this.props.keyTrigger}
      </div>

    )
  }
}

class PadBank extends React.Component {

  render() {
    const padBank = this
      .props
      .soundBank
      .map((drumObj, i, padBankArr) => {
        return (<DrumButton
          soundId={padBankArr[i].id}
          key={padBankArr[i].keyTrigger}
          keyCode={padBankArr[i].keyCode}
          keyTrigger={padBankArr[i].keyTrigger}
          source={padBankArr[i].url}/>)
      });

    return <div className="padBank">

      <p>TODO</p>
      <div>{padBank}</div>

    </div >;
  }
}

class App extends Component {
  /* add more sound banks*/
  constructor(props) {
    super(props);
    this.state = {
      bankSet: soundBank
    }
  }

  render() {
    return (
      <div id="drum-machine" className="App">

        <Display/>
        <PadBank soundBank={this.state.bankSet}/>
      </div>
    );
  }
}

export default App;
