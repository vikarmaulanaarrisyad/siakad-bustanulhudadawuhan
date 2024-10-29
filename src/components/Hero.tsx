import React from "react";

const Hero = () => {
  return (
    <section className=" text-black h-screen flex items-center justify-center">
      <div className="text-center px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-1">
          Selamat Datang di Sekolah Kami
        </h1>
        <p className="text-lg md:text-2xl mb-1">
          Mencetak Generasi Unggul untuk Masa Depan
        </p>
        <a
          href="#about"
          className=" text-blue-700 py-2 px-4 rounded-md text-lg hover:bg-gray-200 transition"
        >
          Pelajari Lebih Lanjut
        </a>
      </div>
    </section>
  );
};

export default Hero;
