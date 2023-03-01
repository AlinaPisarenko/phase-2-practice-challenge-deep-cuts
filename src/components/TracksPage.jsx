import {useEffect, useState} from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

// storing URL as global variable 
const baseURL = 'http://127.0.0.1:8001/tracks'

function TracksPage() {
const [tracks, setTracks] = useState([])
const [search, setSearch] = useState('')

// fetching data
useEffect(() => {
  fetch(baseURL)
  .then(res => res.json())
  .then(data => setTracks(data))
},[])

// function that adds a new object to database and dom
const handleAddTrack = newTrack => {

  // changing type of BPM from string to a number
  newTrack.BPM = Number(newTrack.BPM)

  // post request
  fetch(baseURL, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTrack)
    })
  .then(res => res.json())
  // setting tracks list to a copy of existing array and adding a new object
  // we need to make a copy of an existing array to trigger re-render
  // if we use the same array react react won't recognize that the state has changed
  .then(data => setTracks([...tracks, data]))
}

// function that sort list by Artist or BPM
const handleClick = (name) => {
  if (name === 'Artist') {
    // sort returns an existed array after sorting elements
    // we need to make a copy of an existing array to trigger re-render
    const sortedArray = [...tracks].sort((a, b) => a.artist.toLowerCase() < b.artist.toLowerCase() ? -1 : 1)
    setTracks(sortedArray)
  } else if (name === 'BPM') {
    const sortedArray = [...tracks].sort((a, b) => a.BPM < b.BPM ? -1 : 1)
    setTracks(sortedArray)
  }
}


// function that deletes a track from database and updates the state to delete that object from the dom
const handleDelete = (id) => {
  fetch(`${baseURL}/${id}`, {
    method: "DELETE"
  })
  const updatedList = tracks.filter(track => track.id !== id)
  setTracks(updatedList)
}

// filtering array for a search bar to be able to search by artist or title
const filteredList = tracks.filter(track => {
  return track.artist.toLowerCase().includes(search.toLowerCase()) ||
         track.title.toLowerCase().includes(search.toLowerCase())
})

  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      <AddTrackForm handleAddTrack={handleAddTrack} />
      <TracksList handleClick={handleClick} handleDelete={handleDelete} tracks={filteredList} />
    </div>
  )
}

export default TracksPage