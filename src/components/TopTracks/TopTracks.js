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
          audio: new Audio(),
          selectedTrack: null
        };

        this.state.audio.addEventListener('ended', () => {
            this.updateTrackState(this.state.selectedTrack);
        });
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

    updateTrackState(selectedTrack) {
        let updatedTracks = this.state.tracks;

        updatedTracks[selectedTrack].playState = 'stopped';

        this.setState({ tracks: updatedTracks });
    }

    render() {
        const { tracks, audio } = this.state;

        const playPreview = async (preview, index) => {
            tracks.forEach(item => {
                if (item.preview !== preview) {
                    audio.pause();
                    item.playState = 'stopped';
                }
            });

            let trackState = tracks[index].playState;
            if (trackState === 'playing') {
                audio.pause();
                tracks[index].playState = 'paused';
            } else {
                if (!audio.src || trackState === 'stopped') {
                    audio.src = preview;
                }
                tracks[index].playState = 'playing';
                audio.play();
            }

            this.setState({ selectedTrack: index });
        };

        return (
            <div>
              <h2 className="tl">Top Tracks</h2>
                <table className="tl">
                  <tbody>
                    {tracks.map(({ imageUrl, artist, track, preview, playState }, index) => (
                        <tr key={index}>
                            <td>
                                {index+1}
                            </td>
                            <td>
                                <img src={imageUrl} alt='artist' height={100} width={100}/>
                            </td>
                            <td>
                                <b>{artist}</b><br/>
                                {track}
                            </td>
                            <td>
                                <IconButton onClick={() => playPreview(preview, index)}>
                                    { playState === 'playing' ? <PauseIcon /> : <PlayIcon />}
                                </IconButton>
                            </td>
                        </tr>
                    ))}
                  </tbody>
                </table>
            </div>
        )
    }
}

export default TopTracks;
