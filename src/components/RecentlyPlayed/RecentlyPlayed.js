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
        fetch('https://christineislistening.herokuapp.com/history')
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
            <div className="tc">
                 <h2>Recently Played</h2>
                 <table className="table tl">
                   <tbody>{recentlyPlayed.map((e, index) => TableItem(e, index))}</tbody>
                 </table>
               </div>
        )
    }
}

export default RecentlyPlayed;
