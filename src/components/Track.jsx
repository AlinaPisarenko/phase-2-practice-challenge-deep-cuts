import React from 'react'
import defaultVinyl from '../assets/vinyl_PNG111.png'

function Track({track, handleDelete}) {
  
  const { id, BPM, artist,image,title } = track
  
  return (
    <tr className="table-row">
        <td className="row-image">
            {/* src is conditional, if the image doesn't exist it will render the default img */}
            <img src={image ? image : defaultVinyl} alt="title" />
        </td>
        <td className="row-title">{title}</td>
        <td>{artist}</td>
        <td>{BPM}</td>
        <td><button onClick={() => handleDelete(id)}>Delete</button></td>
    </tr>
  )
}

export default Track