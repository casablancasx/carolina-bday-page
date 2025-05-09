import React from 'react'
import Header from './components/Header/Header'
import MainPageContainer from './components/MainPageContainer/MainPageContainer'
import './App.css'

function App() {
  return (
    <div className="app-wrapper">

      <MainPageContainer>
        <Header />
        <h1>Welcome to the Page!</h1>
        <p>This content is inside the main container.</p>
      </MainPageContainer>
    </div>
  )
}

export default App