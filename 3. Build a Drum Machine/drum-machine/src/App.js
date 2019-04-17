import React, {Component} from 'react';
import './App.css';
import './drum.css';

const soundBanks = [
    {
        soundBanksName: "Default",
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
        soundBanksName: "Extra",
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
        return (
            <header id="display" className="top">
                <div className="power-buttons">
                    <h1 className="title">
                        FCC: Drum Machine</h1>
                    <button className="power-button">Off</button>
                </div>
                <div className="Drum-display">
                    <table>
                        <thead>
                            <tr>
                                <th>Previous</th>
                                <th>Next</th>
                                <th>*</th>
                                <th>Load</th>
                            </tr>
                        </thead>
                    </table>
                    <div className="categories">
                        <h2 className="logo">{this.props.text}</h2>

                        <Controls
                            updateSoundBankAndDisplay={this.props.updateSoundBankAndDisplay}
                            bankSets={this.props.bankSets}/>

                    </div>
                </div>
            </header>
        )
    }
}

class DrumButton extends React.Component {
    constructor(props) {
        super(props);

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
        sound.volume = this.props.audioVolume;
        sound.currentTime = 0;
        sound.play();

    }

    render() {
        var myClasses = 'drum-button ' + this.props.id;
        return (
            <div>
                <p className="button-text">
                    <span>{this.props.id}:
                    </span>
                    {this.props.name}</p>

                <div id={this.props.soundId} onClick={this.playSound} className={myClasses}>
                    <p>{this.props.keyTrigger}</p>
                    <audio
                        id={this.props.keyTrigger}
                        src={this.props.source}
                        onKeyPress={this.handleKeyPress}></audio>
                </div>
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
            id = {
                i
            }

            audioVolume = {
                this.props.audioVolume
            }
            name = {
                soundFilesArr[i].id
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
                <p className="master">Pads</p>
                <div className="drum-buttons">
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
            .updateSoundBankAndDisplay(soundSetName);
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
class VolumeControl extends Component {

    onChange(event) {

        this
            .props
            .changeVolume(event.target.value / 100)

    }
    render() {

        return (
            <div className="slidecontainer">
                <input
                    type="range"
                    min="1"
                    max="100"
                    className="slider"
                    id="volume"
                    onChange={this
                    .onChange
                    .bind(this)}/>
            </div>
        )
    }

}
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bankSets: soundBanks,
            currentBankSet: soundBanks[0],
            display: "-",
            currentsoundBanksName: "default",
            audioVolume: 0.5
        }

        this.changeVolume = this
            .changeVolume
            .bind(this);

        this.updateDisplaySoundFileName = this
            .updateDisplaySoundFileName
            .bind(this);

        this.updateSoundBankAndDisplay = this
            .updateSoundBankAndDisplay
            .bind(this);
    }

    changeCurrentSoundBankName(SoundBankName) {

        this.setState({currentsoundBanksName: SoundBankName});

    }

    // Requires testing function does three things
    changeSoundBanks(newSoundBankName) {

        const soundBank = this.retrieveSoundBankViaName(newSoundBankName);

        this.setState({currentBankSet: soundBank});

    }

    changeVolume(volume) {

        this.setState({audioVolume: volume});

    }

    retrieveSoundBankViaName(name) {

        // retrieve all sound banks
        const availableSoundBanks = this.state.bankSets;

        let selectedSoundBank;

        for (let index = 0; index < availableSoundBanks.length; index++) {

            const soundBank = availableSoundBanks[index];

            if (soundBank.soundBanksName === name) {
                console.log("true");
                selectedSoundBank = soundBank;
                break;
            }

        }

        return selectedSoundBank;

    }

    updateDisplaySoundFileName(name) {

        this.setState({display: name});

    }
    updateSoundBankAndDisplay(newSoundBankName) {

        this.changeCurrentSoundBankName(newSoundBankName);
        this.changeSoundBanks(newSoundBankName)

    }
    /*


<Controls
                            updateSoundBankAndDisplay={this.updateSoundBankAndDisplay}
                            bankSets={this.state.bankSets}/>

*/

    render() {
        return (
            <div id="drum-machine" className="App">

                <Display
                    text={this.state.display}
                    updateSoundBankAndDisplay={this.updateSoundBankAndDisplay}
                    bankSets={this.state.bankSets}/>
                <div className="bottom">

                    <div className="controls">
                        <p className="master">Master</p>
                        <VolumeControl changeVolume={this.changeVolume}/>
                    </div>

                    <PadBank
                        audioVolume={this.state.audioVolume}
                        currentsoundBanksName={this.state.currentsoundBanksName}
                        currentBankSet={this.state.currentBankSet}
                        updateDisplaySoundFileName={this.updateDisplaySoundFileName}/>

                </div>
            </div>
        );
    }
}

export default App;