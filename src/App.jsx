import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/heroSection/HeroSection'
import NewArrivals from './components/Sections/NewArrivals'
import Category from './components/Sections/Categories/Category'
import content from './data/content.json'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <HeroSection></HeroSection>
      <NewArrivals></NewArrivals>
      {content?.pages?.shop?.sections && content?.pages?.shop?.sections?.map((item, index) => <Category key={item?.title+index} {...item} />)}
      <Footer content={content?.footer}></Footer>
    </div>
  )
}

export default App
