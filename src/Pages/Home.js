import React from 'react';

import Carousel from '../Components/carousel';
import Card from '../Components/card';
import Footer from '../Components/footer';

function Home() {

   const numberOfCards=8;
   const generateCards=()=>{
    const cards=[]
    for(let i=0;i<numberOfCards;i++){
      cards.push(<Card key={i}/>)
    }
    return cards
   }
  return (
    <div>
      <Carousel />
      <div className='d-flex flex-wrap justify-content-center'>
        {generateCards()}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
