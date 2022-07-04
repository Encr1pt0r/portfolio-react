import React from 'react';
import "./Home.scss";
import Landing from '../components/Landing';
import Footer from '../components/Footer';
import Nav from '../components/Nav';


export default function Home() {
  return (
    <>
        <Nav />
        <Landing />
        <Footer />
    </>
  )
}
