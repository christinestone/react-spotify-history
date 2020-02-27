import React, { Component } from 'react';
import PlayIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import { IconButton } from '@material-ui/core';
import PauseIcon from '@material-ui/icons/PauseCircleOutline';
import './index.css';

class TopTracks extends Component {
    constructor() {
        super();
        this.state = {
          tracks: [],
          audio: new Audio
        };
    }

    componentDidMount() {
        fetch('https://christineislistening.herokuapp.com/tracks')
          .then(res => res.json())
          .then(data => {
            this.setState({
              tracks: data
            });
          })
          .catch(error => console.log(error));
    }

    render() {
        const { tracks, audio } = this.state;

        return (
            <div>
              <h2>Top Tracks</h2>
                <table className="tl">
                  <tbody>
                    {tracks.map(({ imageUrl, artist, track, preview }, index) => (
                        <Track imageUrl={imageUrl} artist={artist} track={track} preview={preview} key={index} audio={audio} />
                    ))}
                  </tbody>
                </table>
            </div>
        )
    }
}

class Track extends React.Component {
    constructor(props) {
        super();
        this.state = {
          playState: 'stopped'
        }

        props.audio.addEventListener('ended', () => {
            this.setState({ playState: 'stopped' });
        });
    }
    render() {
        const { imageUrl, artist, track, preview, audio } = this.props;

        const playPreview = async (preview) => {
            const { playState } = this.state;
            if (playState === 'playing') {
                audio.pause();
                this.setState({ playState: 'paused' });
            }
            else {
                if (playState === 'stopped') {
                    audio.src = preview;
                }
                audio.play();
                this.setState({ playState: 'playing' });
            }
        };

        return(
            <tr>
                <td>
                    <img src={imageUrl} alt='artist' height={100} width={100}/>
                </td>
                <td>
                    <b>{artist}</b><br/>
                    {track}
                </td>
                <td>
                    <IconButton onClick={() => playPreview(preview)}>
                        { this.state.playState === 'playing' ? <PauseIcon /> : <PlayIcon />}
                    </IconButton>
                </td>
            </tr>
        )
    }
}

export default TopTracks;
