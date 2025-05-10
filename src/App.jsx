import React from 'react'
import Header from './components/Header/Header'
import MainPageContainer from './components/MainPageContainer/MainPageContainer'
import ProfilePicture from './components/ProfilePicture/ProfilePicture'
import ProfileInfo from './components/ProfileInfo/ProfileInfo'
import MainNavigation from './components/MainNavigation/MainNavigation'
import CreatePost from './components/CreatePost/CreatePost'
import UpdatesFeed from './components/UpdatesFeed/UpdatesFeed'
import './App.css'

function App() {
  return (
    <div className="app-wrapper">
      <MainPageContainer>
        <Header />
        <div className='main-contentainer'>
          <div className='profile-container'>
            <ProfilePicture />
            <ProfileInfo />
            </div>
            <div className='profile-actions'>
              <MainNavigation />
              <CreatePost />
              <UpdatesFeed />
          </div>
        </div>
      </MainPageContainer>
    </div>
  )
}

export default App