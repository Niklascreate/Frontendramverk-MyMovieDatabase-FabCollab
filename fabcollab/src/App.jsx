import './index.css'
import './App.css'
import Header from './components/header/Header'

import HomePage from './pages/homepage/HomePage'
import SingleMoviePage from './pages/singlemoviepage/SingleMoviePage'


function App() {

  return (
    <div className="app">    
      <Header/>
      <HomePage />
      <SingleMoviePage />
    </div>
  )
}

export default App
