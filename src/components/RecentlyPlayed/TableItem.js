import React from 'react';
import './TableItem.css';
import { format, isThisWeek, isToday } from 'date-fns';

const formatTime = timestamp => {
    const datePlayed = new Date(timestamp);
    let outputFormat = 'E d.M.yyyy HH.mm';
    if (isToday(datePlayed)) {
        outputFormat = 'HH:mm';
    } else if (isThisWeek(datePlayed)) {
        outputFormat = 'E HH:mm';
    }
    return format(datePlayed, outputFormat);
}

const TableItem = (item) => (
      <tr key={item.played_at}>
        <td><img src={item.image} alt='track' height={100} width={100}/></td>
        <td><b>{item.track_name}</b><br/>{item.artist}</td>
        <td>{formatTime(item.played_at)}</td>
      </tr>
    );

export default TableItem;