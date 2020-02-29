import React, { Component } from 'react';

class TopArtists extends Component {
    constructor() {
        super();
        this.state = {
          artists: []
        };
    }

    componentDidMount() {
        fetch('https://christineislistening.herokuapp.com/favourites')
          .then(res => res.json())
          .then(data => {
            this.setState({
              artists: data
            });
          })
          .catch(error => console.log(error));
    }

    render() {
        const { artists } = this.state;

        return (
            <div>
              <h2 className="tl">Top Artists</h2>
                <table className="tl">
                  <tbody>
                    {artists.map(({ imageUrl, artist, genres }, index) => (
                    <tr key={index}>
                        <td>
                            <img src={imageUrl} alt='artist' height={100} width={100}/>
                        </td>
                        <td>
                            <b>{artist}</b><br/>{genres.join(', ')}
                        </td>
                    </tr>
                    )
                    )}
                  </tbody>
                </table>
            </div>
        )
    }
}

export default TopArtists;
