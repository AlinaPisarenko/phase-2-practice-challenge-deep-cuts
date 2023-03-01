import React from 'react'
import Track from './Track'

function TracksList({ tracks, handleClick, handleDelete }) {



  return (
    <table>
      <tbody>
        <tr>
          <th>
          <h3 className="row-image">Img</h3>

          </th>
          <th>
            <h3 className="row-title">Title</h3>
          </th>
          <th>
            <h3 onClick={(e) => handleClick(e.target.className)} className="Artist">Artist</h3>
          </th>
          <th>
            <h3 onClick={(e) => handleClick(e.target.className)} className="BPM">BPM</h3>
          </th>
        </tr>
        {/* map through tracks array and return component for each track */}
        {tracks.map(track => <Track key={track.id} track={track} handleDelete={handleDelete} />)}
      </tbody>
    </table>
  )
}

export default TracksList