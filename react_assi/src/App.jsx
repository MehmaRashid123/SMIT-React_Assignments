import Nav from './components/Nav'
import Hero from './components/Hero'
import Hero2 from './components/Hero2'
import Community from './components/Community'

const App = () => {
  return (
    <div className='bg-gray-900 h-screen text-white'>
      <Nav/>
      <Hero/>
      <Hero2/>
      <Community/>
    </div>
  )
}

export default App