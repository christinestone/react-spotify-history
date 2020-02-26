import React, { Component } from 'react';
import PlayIcon from '@material-ui/icons/PlayCircleOutlineOutlined';

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
        const { tracks } = this.state;

        const playPreview = async (preview) => {
            const { audio } = this.state;
            audio.pause();
            this.state.audio.src = preview;
            audio.play();
        };

        return (
            <div>
              <h2>Top Tracks</h2>
                <table className="tl">
                  <tbody>
                    {tracks.map(({ imageUrl, artist, track, preview }, index) => (
                    <tr key={index}>
                        <td>
                            <img src={imageUrl} alt='artist' height={100} width={100}/>
                        </td>
                        <td>
                            <b>{artist}</b><br/>
                            {track}
                        </td>
                        <td>
                            <PlayIcon onClick={() => playPreview(preview)} />
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
