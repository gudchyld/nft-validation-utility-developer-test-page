import React from 'react';
import happyCat from '../../assets/images/happy-cat-lover.jpg';

export default function PhotoGateHero() {
  return (
    <div className="h-[80vh] flex justify-between items-center max-w-6xl mx-auto pl-6 pr-2 mt-10 mb-10">
      <div className='flex justify-center items-center'>
        <div>
          <h1 className="text-7xl text-violet-700 mb-5 font-medium">PhotoGate</h1>
          <p className="text-sm max-w-sm text-slate-600">
            An NFT utility application that allows users to select and validate
            their token so as to access exclusive contents for holders of the
            cryptobros NFT
          </p>
        </div>
      </div>

      <div>
        <img src={happyCat} alt="" />
      </div>
    </div>
  );
}
