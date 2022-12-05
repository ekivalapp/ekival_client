import type { NextPage } from 'next';
import Navbar from '../components/Navbar'
import SidePanel from './../components/SidePanel'

const Home: NextPage = () => {
  return (
    <>
      <div className="app-container">
        <Navbar/>
        <div className="publicDelegates__container">
          <div className="delegates__container">
            <div className="delegates__mainContainer">

            </div>
            <div className="delegates__sideContainer">
              <SidePanel/>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Home
