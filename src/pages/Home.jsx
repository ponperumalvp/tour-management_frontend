import React from "react";
import Subtitle from "../shared/Subtitle";
import worldImage from "../assets/images/world.png";
import heroImg1 from "../assets/images/hero-img01.jpg";
import heroImg2 from "../assets/images/hero-img02.jpg";
import experienceImg from "../assets/images/experience.png";
import heroVideo from "../assets/images/hero-video.mp4";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";

import FeatureTourList from "../feature-tours/FeatureTourList";
import MasonryImagesGallery from "../imgGallery/MasonryImagesGallery";
import Testimonials from "../testimonials/Testimonials";
import Newsletter from "../shared/Newsletter";
const Home = () => {
  return (
    <div className="  ">
      <div className=" container grid grid-cols-2 mt-10">
        <div className="col-span-1">
          <div className="flex ">
            <Subtitle subtitle={"Know Before You Go"} />
            <img src={worldImage} alt="" className="w-[2rem] " />
          </div>
          <h1 className="mt-4">
            Traveling opens the door to creating{" "}
            <span className="text-[var(--secondary-color)]">Memories</span>
          </h1>
          <p className="text-sm mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam id
            blanditiis aperiam pariatur aliquid vero incidunt eaque ut culpa
            reprehenderit ad quia sapiente, placeat inventore reiciendis porro
            voluptatibus eligendi modi fuga, ipsam nobis nulla voluptatum
            distinctio. Ad excepturi reprehenderit porro sapiente labore iusto
            aperiam earum perspiciatis, repellat incidunt repudiandae temporibu
          </p>
        </div>
        <div className="  col-span-1 ">
          <div className="flex">
            <img
              src={heroImg1}
              alt=""
              className="w-[30%] mr-6 h-[350px] rounded-[20px] border-2 border-[var(--secondary-color)]"
            />
            <video
              src={heroVideo}
              controls
              className=" mr-6 w-[30%] object-cover mt-4 h-[350px] rounded-[20px] border-2 border-[var(--secondary-color)] "
            />
            <img
              src={heroImg2}
              alt=""
              className="w-[30%]   mt-5 h-[350px] border-2 rounded-[20px] border-[var(--secondary-color)]"
            />
          </div>
        </div>
      </div>
      {/* {feature tour section start} */}

      <SearchBar />
      <div className="flex mt-20 container">
        <div className="mt-2">
          <h5 className="text-[var(--secondary-color)] italic font-medium">
            What We serve
          </h5>
          <h2 className="mt-4">we offer our best servises</h2>
        </div>
        <div>
          <ServiceList />
        </div>
      </div>
      <div className="mt-20 container">
        <div>
          <Subtitle subtitle={"Explore"} />
          <h2>Our Featured Tours</h2>
        </div>
        <FeatureTourList />
      </div>
      {/* {feature tour section start} */}

      {/* Experience section start */}
      <div className="container ">
        <div className="grid grid-cols-2 mt-14">
          <div className="">
            <div className="">
              <Subtitle subtitle={"Experience"} />
              <h2 className="mt-4">
                With our all experience <br /> We wil serve you
              </h2>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
                Exercitationem debitis facilis quis.
              </p>
            </div>
            <div className="flex justify-between mt-12">
              <div>
                <span className="h-[70px] w-[70px] bg-[var(--secondary-color)] rounded-md p-3 text-lg text-white m-auto flex items-center justify-center">
                  12k+
                </span>
                <h5 className="text-sm mt-1">Successful Trip</h5>
              </div>
              <div>
                <span className="h-[70px] w-[70px] bg-[var(--secondary-color)] rounded-md p-3 text-lg text-white m-auto flex items-center justify-center">
                  2k+
                </span>
                <h5 className="text-sm mt-1">Regular Trip</h5>
              </div>
              <div>
                <span className="h-[70px] w-[70px] bg-[var(--secondary-color)] rounded-md p-3 text-lg text-white m-auto flex items-center justify-center">
                  15k+
                </span>
                <h5 className="text-sm mt-1">Years of Experience</h5>
              </div>
            </div>
          </div>
          <div>
            <img src={experienceImg} alt="" className="w-[90%] ml-10" />
          </div>
        </div>
      </div>
      {/* Experience section end */}

      {/* Gallery section start */}

      <div className="container">
        <Subtitle subtitle={"Gallery"} />
        <h2>Visit our customers Gallery</h2>
        <div className="">
          <MasonryImagesGallery />
        </div>
      </div>
      {/* Gallery section start */}

      {/* testimonial section start */}

      <div className="container mt-14">
        <div className="mt-4">
          <Subtitle subtitle={"Fans love"} />
          <h2 className="mt-4">what our fans say About as</h2>
        </div>
        <div className="mt-4">
          <Testimonials />
        </div>
      </div>
      {/* testimonial section end */}
      <Newsletter />
    </div>
  );
};

export default Home;
