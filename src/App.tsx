import { FC } from 'react'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Info from './components/Info/Info'
import Lounge from './components/Lounge/Lounge'
import NavBar from './components/NavBar/NavBar'
import Search from './components/Search/Search'
import Subscribers from './components/Subscribers/Subscribers'
import Support from './components/Support/Support'
import Travelers from './components/Travelers/Travelers'

const App: FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscribers />
      <Footer />
    </div>
  )
}

export default App
