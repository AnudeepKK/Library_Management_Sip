import React from 'react';
import { useState } from 'react';
import Carousel from '../Components/carousel';
import Card from '../Components/card';
import Footer from '../Components/footer';
import AWAT from '../Images/AWalkAlongTracks.jpg';
import BHAA from '../Images/BeenHereAllAlong.jpg';
import Bheth from '../Images/Bethlehem.jpg';
import Grouse from '../Images/Grouse.jpg';
import LionKing from '../Images/LionKing.jpg';
import Brave from '../Images/TheBrave.jpg';
import SmallOne from '../Images/TheSmallOne.jpg';
import Thirteen from '../Images/Thirteen.jpg';
import CustomNavbar from '../Components/Navbar';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQuery = (query) => {
    setSearchQuery(query);
  };
  const generateCards = () => {
    const cardData = [
      { imageUrl: AWAT,          title: 'A Walk Along Tracks',    text: 'Embark on a literary journey with this captivating tale of adventure and discovery.' },
      { imageUrl: BHAA,          title: 'Been Here All Along',    text: 'Explore the complexities of love and relationships in this heartwarming novel.' },
      { imageUrl: Bheth,         title: 'Bethlehem',              text: 'Step into the historical past with this enchanting depiction of ancient times.' },
      { imageUrl: Grouse,        title: 'Grouse',                 text: 'Dive into the world of wildlife and nature with this beautifully illustrated book.' },
      { imageUrl: LionKing,      title: 'Lion King',              text: 'Experience the circle of life in this timeless tale of courage and friendship.' },
      { imageUrl: Brave,         title: 'The Brave',              text: 'Discover the courage within as the protagonist faces challenges in this story.' },
      { imageUrl: SmallOne,      title: 'The Small One',          text: 'Find joy in the little things as you join the protagonist on a heartwarming journey.' },
      { imageUrl: Thirteen,      title: 'Thirteen',               text: 'Uncover the secrets and mysteries surrounding the number thirteen in this read.' },
      // Add more card data entries for each card
    ];

    const filteredCardData = cardData.filter(({ title }) =>
    title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return filteredCardData.map(({ imageUrl, title, text }, index) => (
    <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <Card imageUrl={imageUrl} title={title} text={text} />
    </div>
  ));
};

return (
  <div>
    <CustomNavbar/>
    <Carousel onSearchQuery={handleSearchQuery} />
    <div className="text-center bg-light p-4 rounded shadow">
      <div className="text-danger display-6 font-weight-bold" style={{ textShadow: '2px 2px 2px rgba(255, 140, 120, 0.8)' }}>
        Welcome to Library Management.
      </div>
    </div>
    <div className="container">
      <div className="row">
        {generateCards()}
      </div>
    </div>
    <Footer />
  </div>
);
}

export default Home;