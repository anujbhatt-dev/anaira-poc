import React from 'react';

function Banner() {
  return (
    <div className="md:px-[10rem] px-[1rem] h-[12rem] my-[1rem] w-full overflow-hidden font-sans">
      <div
        style={{ backgroundImage: "url(black-texture.jpg)", backgroundSize: 'cover', backgroundPosition: 'center' }}
        className="h-full flex items-center justify-center relative text-white"
      >        
        <div className="relative">
          <h2 className="text-2xl md:text-6xl font-bold mb-[1.5rem]">Pre-Launch Sale - Limited Time Offer!</h2>
          <p className="text-lg md:text-xl p-4 px-10 bg-gradient-to-r to-zinc-900 from-zinc-800 inline-block">Use Code: <span className="font-semibold bg-white text-black px-2 py-1 rounded">ANAIRA10</span> for 10% Off</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
