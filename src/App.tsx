import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'

import { PostsList } from './features/posts/postList'

function App() {
  return (
    <Router>
      <Navbar />
      <table className="App table table-borderless">
        <Routes>
          <Route
            path="/"
            element={<PostsList/>} 
          />
        </Routes>
      </table>
    </Router>
  )
}

export default App
