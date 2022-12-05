import type { NextPage } from 'next';
import Navbar from '../components/Navbar'
// import InitWallet from '../components/connectWallet/initWallet'

const Home: NextPage = () => {
  return (
    <>
      <div className="app-container">
        <Navbar/>
      </div>
    </>

  )
}

export default Home
