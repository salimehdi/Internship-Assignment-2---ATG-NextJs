// Grid.js
"use client";
import React from 'react';
import SignInSignUp from './SignInSignUp';
import people1 from '../assets/people1.svg';
import people2 from '../assets/people2.svg';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Grid = () => {
    const [mobRes, setMobRes] = useState(false);
    useEffect(() => {
        const updateMobRes = () => {
          if (window.innerWidth <= 991.98) {
            setMobRes(true); 
          } else if (window.innerWidth > 991.98){
            setMobRes(false); 
          }
        };
        updateMobRes();
        window.addEventListener("resize", updateMobRes);
        return () => {
          window.removeEventListener("resize", updateMobRes);
        };
      }, []); 
    
  return (
    <>
      <div className="row custom-preview text-black">
        <div
          className="col-lg-7 d-flex flex-column justify-content-start position-relative align-items-center "
          style={{ height: `${mobRes ? "130svh" : "90svh"}` }}
        >
          <div className="pt-5 pt-lg-0 d-flex flex-column justify-content-center  align-items-stretch">
            <h1
              style={{ fontWeight: "600", fontStyle: "italic" }}
              className="ps-0 ps-lg-5 px-0 px-lg-2 mx-5 pt-0 pt-lg-5"
            >
              Explore your <span style={{ color: "#0096C8" }}>hobby</span> or{" "}
              <span style={{ color: "#8064A2" }}>passion</span>
            </h1>
            <p className="ps-0 ps-lg-5 px-0 px-lg-2 mx-5 pt-5">
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform.{" "}
              <span className="toHide">
                Your hobby may be about visual or performing arts, sports,
                games, gardening, model making, cooking, indoor or outdoor
                activities…
              </span>
            </p>
            <p className=" toHide ps-0 ps-lg-5 px-0 px-lg-2 mx-5 pt-0 pt-lg-5">
              If you are an expert or a seller, you can Add your Listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride.
            </p>
          </div>

          {mobRes && <SignInSignUp />}

          <div
            className="row d-flex justify-content-center position-absolute"
            style={{ width: "100%", bottom: "0" }}
          >
            <div className="col-5">
              <Image
                src={people1}
                alt="Description for people1"
                className="position-absolute bottom-0"
                style={{ width: "40%" }}
                layout="intrinsic"
              />
              
            </div>
            <div className="col-5">
              <Image
                src={people2}
                alt="Description for people2"
                className="position-absolute bottom-0"
                style={{ width: "40%" }}
                layout="intrinsic"
              />
            </div>
          </div>
        </div>
        <div
          className=" toHide col-lg-5 d-flex justify-content-center align-items-center"
          style={{ height: "90vh" }}
        >
          <SignInSignUp />
        </div>
      </div>
    </>
  );
}

export default Grid;
