import React, { useState } from 'react'

  // creating a blueprint for the object
  const defaultFormData = {
    image: '',
    title: '',
    artist: '',
    BPM: ''
  }

  function AddTrackForm({ handleAddTrack }) {
    const [formData,setFormData] = useState(defaultFormData)


  // function that runs every time there is a change inside the input
  const handleChange = e => {
      // setting formData state to the input values
      setFormData({...formData, [e.target.name]: e.target.value})
  }

  // calling function that was passed from TracksPage.jsx and passing it a new object
  const handleSubmit = e => {
    e.preventDefault()
    handleAddTrack(formData)
  // resetting the state
  // this will also clear out inputs because we set up controlled form
    setFormData(defaultFormData)
  }

  return (
      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={handleChange} value={formData.image} type="text" name="image" placeholder="Image URL"/>
          <input onChange={handleChange} value={formData.title} type="text" name="title" placeholder="title" />
          <input onChange={handleChange} value={formData.artist} type="text" name="artist" placeholder="Artist" />
          <input onChange={handleChange} value={formData.BPM} type="number" name="BPM" placeholder="BPM" step="1.00" />
        </div>
        <input className="" type="submit" value="Add Track" />
      </form>
  )
}

export default AddTrackForm