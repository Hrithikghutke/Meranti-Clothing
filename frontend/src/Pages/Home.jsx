import React from "react";
import { Header, CarouseL, Product } from "../Components";

const product = {
  name: "plain white t-shirt",
  image: [
    {
      url: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
  ],
  price: "$4000",
  _id: "/home",
};

const Home = () => {
  return (
    <div>
      <div className="z-50">
        <Header />
      </div>

      <div className="min-h-[70vh] sm:min-h-[49vh]">
        <CarouseL />
      </div>

      <h3 className="w-full sm:mt-16 text-center text-black uppercase tracking-widest drop-shadow-md">
        New Arrivals
      </h3>
      <div className="grid grid-cols-4 sm:grid-cols-2 ">
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </div>
  );
};

export default Home;
