import React, { useState, useEffect } from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

URL = 'http://localhost:8001/tracks'

function TracksPage() {
const [tracks, setTracks] = useState([])

useEffect(() => {
fetch(URL)
.then(res => res.json())
.then(data => setTracks(data))
}, [])
    
  return (
    <div>
      <Search />
      <AddTrackForm />
      <TracksList tracks={tracks} />
    </div>
  )
}

export default TracksPage