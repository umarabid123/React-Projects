import React from "react";
import BgImage from "/src/assets/bg-slate.png";
import CoffeeMain from "/src/assets/black.png";
import Navbar from "../Navbar/Navbar";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  return (
    <div className="bg-heo-pattern" style={bgImage}>
      <section className=" w-full min-h-[750px]">
        <div className="container`">
          <Navbar />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <h1 className=" text-7xl font-bold leading-tight ml-14">
                Blvck Tumbler
              </h1>
              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Black Lifestyle Lovers, </h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum voluptates ullam corrupti deserunt corporis tempora,
                    molestias sed nesciunt dignissimos quas delectus illo nobis
                    ipsum natus eum voluptate laudantium necessitatibus?
                    Perferendis!
                  </h1>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[210px] bg-gray-700/25"></div>
              </div>
            </div>
            {/* hero image section */}
            <div className="relative">
              <img src={CoffeeMain} alt="" className="relative z-40 h-[400px] md:h-[700px] img-shadow "/>
            <div className="h-[180px] w-[180px] absolute top-24 -right-16 border-primary rounded-full border-[20px] z-10"></div>
           <div className="absolute -top-20 left-[200px] z-[1]">
           <h1 className="text-[140px] scale-150 font-bold text-darkGray/40 leading-none">Blvck Tumbler</h1>
           </div>

            </div>
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <h1 className=" text-7xl font-bold leading-tight ml-14 opacity-0">
                Blvck Tumbler
              </h1>
              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Black Tumbler </h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum voluptates ullam corrupti deserunt corporis tempora,
                    molestias sed 
                    
                  </h1>
                </div>
                <div className="absolute -top-6 -right-10 w-[270px] h-[210px] bg-darkGray/50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
