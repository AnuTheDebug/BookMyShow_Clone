import React, {useState, useEffect} from 'react';
import HeroSlider from "react-slick";
import axios from "axios";

import {BsChevronLeft,BsChevronRight} from "react-icons/bs"
//import {NextArrow, PrevArrow} from "./Arrows.component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () =>
{

const [images, setImages] = useState([]);

useEffect(async() => {
    const requestNowPlayingMovies = async() => {
        const getImages = await axios.get("/movie/now_playing");
        setImages(getImages.data.results);
    };
    requestNowPlayingMovies();
}, []); 

    const settings = 
    {
        arrows: true,
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:  <div><BsChevronRight class="bg-gray-800 absolute top-0 bottom-0 px-1 rounded-l-lg fill-current text-white w-11 h-11"/></div>,
        prevArrow: <div><BsChevronLeft class="bg-gray-800 absolute top-0 bottom-0 px-1 rounded-r-lg fill-current text-white w-11 h-11"/></div>,
      };

    const settingsLg =
    {
        dots: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "70px",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        nextArrow:  <div><BsChevronRight class="bg-gray-700 absolute bottom-0 rounded-l-lg fill-current text-white w-11 h-11"/></div>,
        prevArrow: <div><BsChevronLeft class="bg-gray-700 absolute bottom-0 rounded-r-lg fill-current text-white w-11 h-11"/></div>,
    }


return(
  <>
  <div class="lg:hidden">
  <div class="bg-navCol-50 mt-2 rounded">
                      <ul class="flex">
                          <li class="cursor-pointer"><img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/movies-v3-collection-202101080832.png" alt="Movies"/></li>
                          <li class="cursor-pointer"><img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/stream-v3-new-tag-collection-202102040316.png" alt="Movies"/></li>
                          <li class="cursor-pointer"><img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/events-v3-collection-202101080832.png" alt="Movies"/></li>
                          <li class="cursor-pointer"><img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/sports-v3-collection-202101080832.png" alt="Movies"/></li>
                          <li class="cursor-pointer"><img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/plays-v3-collection-202101080832.png" alt="Movies"/></li>
                          <li class="cursor-pointer"><img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/activities-v3-collection-202101080832.png" alt="Movies"/></li>
                      </ul>
                  </div>          
      <HeroSlider {...settings}>
      {   
          images.map((image)=>
          (
              <div>
                  <div class="px-1 py-2 h-44 w-full rounded">
                  <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
      alt="testing" className="w-full h-full rounded-md"/>
                  </div>
              </div>
          )
          )
      }
      </HeroSlider>
  </div>

  <div class="hidden lg:block">
  <HeroSlider {...settingsLg}>
  {
      
      images.map((image)=>
      (
          <div class="px-1 py-2 w-full h-80 rounded">
              <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
      alt="testing" className="w-full h-full rounded-md"/>
          </div>
      )
      )
  }
  </HeroSlider>
  </div>

  </>
);
}

export default HeroCarousal;

  