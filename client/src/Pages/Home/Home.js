import React from "react";
import Banner from "./Banner/Banner";
import Captured from "./Captured/Captured";
import CapturedMoment from "./CapturedMoment/CapturedMoment";
import CardType from "./CardType/CardType";
import Gallery from "./Gallery/Gallery";
import WeOffer from "./WeOffer/WeOffer";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Captured></Captured>
      <CardType></CardType>
      <CapturedMoment></CapturedMoment>
      <WeOffer></WeOffer>
      <Gallery></Gallery>
    </>
  );
};

export default Home;
