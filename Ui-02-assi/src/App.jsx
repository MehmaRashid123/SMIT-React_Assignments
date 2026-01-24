import React from 'react'
import Hero from './components/Hero'
import CardItem from './components/CardItem'
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export const cardData = [
  {
    id: 1,
    title: "Main Home",
    img: "/card1.jpg",
    slide: "vertical"
  },
  {
    id: 2,
    title: "Floating Portfolio",
    img: "/card2.jpg",
    slide: "vertical"
  },
  {
    id: 3,
    title: "Portfolio Pintrest",
    img: "/card3.jpg",
    slide: "vertical"
  },
  {
    id: 4,
    title: "Animated Slider",
    img: "/card4.jpg",
    slide: "vertical"
  },
  {
    id: 5,
    title: "Portfolio Metro",
    img: "/card5.jpg",
    slide: "vertical"
  },
  {
    id: 6,
    title: "Portfolio Gallery",
    img: "/card6.jpg",
    slide: "vertical"
  },
  {
    id: 7,
    title: "Interactive Links",
    img: "/card7.jpg",
    slide: "horizontal"
  },
  {
    id: 8,
    title: "Split Slider Showcase",
    img: "/card8.jpg",
    slide: "vertical"
  },
  {
    id: 9,
    title: "Portfolio Carousel",
    img: "/card9.jpg",
    slide: "horizontal"
  },
];


const App = () => {
  
  return (
    
    <div className='bg-white h-full cursor-none'>
      <CustomCursor/>
      <Hero/>
      <div className="cards-grid">
      {cardData.map(card => (
        <CardItem key={card.id} title={card.title} img={card.img} slide={card.slide}/>
      ))}
    </div>
    <Footer/>
    </div>
  )
}

export default App 