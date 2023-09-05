import React from "react";
import { Carousel } from "flowbite-react";

function CarouseL() {
  return (
    <Carousel
      className="  h-[80vh] sm:h-[40vh] child:rounded-none"
      slideInterval={3000}
    >
      <img
        src="https://images.unsplash.com/photo-1542219550-2da790bf52e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
        alt="image 1"
        className="carouselimg"
      />
      <img
        src="https://images.unsplash.com/photo-1548768041-2fceab4c0b85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="image 2"
        className="carouselimg"
      />
      <img
        src="https://images.unsplash.com/photo-1605518215584-5ba74df5dfd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
        alt="image 3"
        className="carouselimg"
      />
    </Carousel>
  );
}

export default CarouseL;
