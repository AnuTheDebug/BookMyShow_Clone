import React from "react";

const MovieHero = () => {
  return (
    <>
   <div className="md:hidden">
    <img
      src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
      alt="poster"
     />
   </div>

   <div className="hidden md:block lg:hidden">
   <img
     src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
     alt="poster"
    />
   </div>

   <div className="relative hidden lg:block" style={{height: "40rem"}}>

<div className="absolute h-full w-full z-10"
style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}
/>

<div className="absolute z-30 w-64 h-96 left-64 top-10">
<img
src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
alt="poster"
className="h-full w-full rounded-xl"
/>
</div>



   <img
     src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
     alt="poster"
     className="w-full h-full"
    />
   </div>
   <div className="absolute z-30 w-520px h-96 left-32px top-10">
  <h1 className="text-white text-xl font-bold">SHANG-CHI</h1>
  <div>
    <span className="text-white text-lg font-Roboto left-4px h-1.33 w-1.33">20K</span>
    <span className="text-white text-sm font-Roboto height-1.5 padding-2px 0px 0px 8px">are interested</span>
    </div>
    </div>
    
    <div >
    <div >
      <span className="text-white text-sm font-Robot">In cinemas</span>
      <span className="text-white text-sm font-Robot">Mark interested to know when bookings open</span>
      </div>
      <button className="CommonContainers__ButtonComponent-sc-8f9mtj-0 CommonContainers__CtaComponent-sc-8f9mtj-1 styles__Cta-sc-meewg8-8 eEDrDy">
        <span>I'm interested</span>
      </button></div>
   
    </>
  )
};

export default MovieHero;