import React, {Component} from 'react';
import './App.css';

const soundBanks = [
    {
        soundBanksName: "default",
        soundFiles: [
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

        ]
    }, {
        soundBanksName: "extra",
        soundFiles: [
            {
                keyCode: 81,
                keyTrigger: 'Q',
                id: 'Chord-1',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
            }, {
                keyCode: 87,
                keyTrigger: 'W',
                id: 'Chord-2',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
            }, {
                keyCode: 69,
                keyTrigger: 'E',
                id: 'Chord-3',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
            }, {
                keyCode: 65,
                keyTrigger: 'A',
                id: 'Shaker',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
            }, {
                keyCode: 83,
                keyTrigger: 'S',
                id: 'Open-HH',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
            }, {
                keyCode: 68,
                keyTrigger: 'D',
                id: 'Closed-HH',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
            }, {
                keyCode: 90,
                keyTrigger: 'Z',
                id: 'Punchy-Kick',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
            }, {
                keyCode: 88,
                keyTrigger: 'X',
                id: 'Side-Stick',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
            }, {
                keyCode: 67,
                keyTrigger: 'C',
                id: 'Snare',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
            }

        ]
    }

]

class Display extends React.Component {

    render() {
        return <header id="display" className="App-header">
            <p>
                {this.props.text}
            </p>
        </header>

    }
}
// redo drum buttons
class DrumButton extends React.Component {
    constructor(props) {
        super(props);

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
        this
            .props
            .updateDisplaySoundFileName(this.props.soundId);

        sound.play();

    }

    render() {
        return (

            <div id={this.props.soundId} onClick={this.playSound}>
                <audio
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

        let soundFiles = this.props.currentBankSet.soundFiles;

        const drumButtons = soundFiles.map((drumObj, i, soundFilesArr) => {
            return (< DrumButton updateDisplaySoundFileName = {
                this.props.updateDisplaySoundFileName
            }
            soundId = {
                soundFilesArr[i].id
            }
            key = {
                soundFilesArr[i].keyTrigger
            }
            keyCode = {
                soundFilesArr[i].keyCode
            }
            keyTrigger = {
                soundFilesArr[i].keyTrigger
            }
            source = {
                soundFilesArr[i].url
            } />)
        });

        return (
            <div className="padBank">
                <div>
                    {drumButtons}
                </div>
            </div>
        );
    }
}

class Controls extends Component {

    onChange(event) {
        const soundSetName = event.target.value;
        this
            .props
            .changeSoundBanks(soundSetName);
    }

    makeSoundOptions() {
        /**
         * Retrieve the name of every bank set
         * Create and option tag with that value
        */

        const bankSets = this.props.bankSets;

        const soundSetChoices = bankSets.map((drumObj, i, padBankArr) => {

            return (
                <option key={i} value={padBankArr[i].soundBanksName}>{padBankArr[i].soundBanksName}</option>
            );
        });

        return soundSetChoices;

    }
    render() {

        return (

            <select
                name="soundset"
                onChange={this
                .onChange
                .bind(this)}>
                {this.makeSoundOptions()}

            </select>

        )
    }
}

class App extends Component {
    /* add more sound banks */


    constructor(props) {
        super(props);
        this.state = {
            bankSets: soundBanks,
            currentBankSet: soundBanks[0],
            display: "-",
            currentsoundBanksName: "default"
        }

        this.updateDisplaySoundFileName = this
            .updateDisplaySoundFileName
            .bind(this);

        this.changeSoundBanks = this
            .changeSoundBanks
            .bind(this);
    }


    // Requires testing
    // function does three things
    changeSoundBanks(newSoundBankName) {
        // change the current sound bank name
        this.setState({currentsoundBanksName: newSoundBankName});

        // retrieve all sound banks
        const availableSoundBanks = this.state.bankSets;

        let selectedSoundBank;

        for (let index = 0; index < availableSoundBanks.length; index++) {

            const soundBank = availableSoundBanks[index];

            if (soundBank.soundBanksName === newSoundBankName) {
                console.log("true");
                selectedSoundBank = soundBank;
                break;
            }

        }

        this.setState({currentBankSet: selectedSoundBank});
    }

    updateDisplaySoundFileName(name) {
        this.setState({display: name});
    }

    render() {
        return (
            <div id="drum-machine" className="App">
                <Display text={this.state.display}/>
                <PadBank
                    currentsoundBanksName={this.state.currentsoundBanksName}
                    currentBankSet={this.state.currentBankSet}
                    updateDisplaySoundFileName={this.updateDisplaySoundFileName}/>
                <div className="controls">
                    <Controls
                        changeSoundBanks={this.changeSoundBanks}
                        bankSets={this.state.bankSets}/>
                </div>
            </div>
        );
    }
}

export default App;