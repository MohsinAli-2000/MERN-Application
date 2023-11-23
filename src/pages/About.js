import React from 'react';
import Layout from '../components/Layout/Layout';

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        <h1 className="bg-dark p-2 text-white text-center">ABOUT US</h1>
          <p className="text-justify mt-2">
          Welcome to Online shopping store, where style meets simplicity. We're passionate about delivering quality products, blending fashion with affordability. Our curated collection reflects diverse tastes, ensuring there's something special for everyone. Join us in creating a seamless, stylish shopping experience. Your satisfaction is our commitment. Happy Shopping!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
