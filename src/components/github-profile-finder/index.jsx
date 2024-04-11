import React, { useEffect, useState } from 'react'
import User from './User.jsx'
import './style.css';

const GithubProfileFinder = () => {
  const [username, setUsername] = useState('toindranildutta')
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)
  const handleSumbit = () => {
    fetchGithubUserData()
  }

  async function fetchGithubUserData() {
    setLoading(true)
    const response  = await fetch(`https://api.github.com/users/${username}`)
    const data  = await response.json()
    if(data){
      setUserData(data)
    }
    console.log(data)
    setLoading(false)
    setUsername('')
  }

  useEffect(() => {
    fetchGithubUserData()
  },[])

  if(loading) {
    return <h1>Loading...! Please wait.</h1>
  }

  return (
    <div className="github-profile-container">
        <div className="input-wrapper">
            <input
            name='search-by-username'
            type="text" 
            placeholder='Search by username'
            value={username}
            onChange={e => setUsername(e.target.value)}
            />
            <button onClick={handleSumbit}>Search</button>
        </div>
        { userData !== null ? <User user={userData} /> : null }
    </div>
  )
}

export default GithubProfileFinder