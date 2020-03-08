import React, { Component } from 'react';
import TableItem from './TableItem';

class RecentlyPlayed extends Component {
    constructor() {
        super();
        this.state = {
          recentlyPlayed: []
        }
    }

    componentDidMount() {
        const token = window.sessionStorage.getItem('token');
        fetch('https://christineislistening.herokuapp.com/history', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': token
            }
        })
          .then(res => res.json())
          .then(data => {
            this.setState({
              recentlyPlayed: data
            });
          })
          .catch(error => console.log(error));
    }

    render() {
        const { recentlyPlayed } = this.state;
        return (
            <div className="tl helvetica">
                 <h2 className="tc">Recently Played</h2>
                 <table className="table">
                   <tbody>{recentlyPlayed.map((e, index) => TableItem(e, index))}</tbody>
                 </table>
               </div>
        )
    }
}

export default RecentlyPlayed;
