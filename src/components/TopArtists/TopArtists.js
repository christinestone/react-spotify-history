import React, { Component } from 'react';

class TopArtists extends Component {
    constructor() {
        super();
        this.state = {
          artists: []
        };
    }

    componentDidMount() {
        const token = window.sessionStorage.getItem('token');
        fetch('https://christineislistening.herokuapp.com/favourites', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': token
            }
        })
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
            <div className="tl helvetica">
                <h2 style={{color: '#66b2b2'}}>Top Artists</h2>
                <table>
                  <tbody>
                    {artists.map(({ imageUrl, artist, genres }, index) => (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td><img src={imageUrl} alt='artist' height={100} width={100}/></td>
                        <td><b>{artist}</b><br/>{genres.join(', ')}</td>
                    </tr>
                    ))}
                  </tbody>
                </table>
            </div>
        )
    }
}

export default TopArtists;
