import React from 'react';

export default function OpenSeaHero() {
  return (
    <div>
      <div className="max-w-6xl mx-auto flex mt-10 ">
        <div className="flex justify-center items-center w-[50%] bg-orange-400 p-40 text-gray-50 font-bold">
          <p>
            Get Our Nft from<br></br> OpenSea to access Our exclusive<br></br>{' '}
            <span className="text-2xl">Gallery</span>
          </p>
        </div>
        <div className="flex justify-center items-center w-[50%] p-40 text-gray-50 font-bold bg-cyan-500">
          <a
            href="https://testnets.opensea.io/collection/cryptobros-2"
            className="bg-white text-cyan-500 px-8 py-4 rounded-full"
            target="_blank"
            rel="noreferrer"
          >
            Get NFT
          </a>
        </div>
      </div>
      <div className="max-w-6xl bg-emerald-600 py-20 mt-0 text-center mx-auto text-white">
        <p className="font-bold">
          Connect your wallet from below and follow the steps to validate and
          view our gallery
        </p>
      </div>
    </div>
  );
}
