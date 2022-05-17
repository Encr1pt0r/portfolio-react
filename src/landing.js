import React from 'react';
import './Landing.scss';

export default function landing() {
  return (
    <>
      <div className='landing'>
        <div className='title'>
          <h1 className='title__main'>Kevin Mbuluko</h1>
          <h2 className='title__sub'>Web and Mobile Developer Based in London</h2>
        </div>

        <div className='profile'>
          <div className='profile__bio'></div>
          <div className='profile__skills'></div>
        </div>

        <div className='call-to-action'></div>
      </div>
      <div className='b'></div>
    </>
  )
}
