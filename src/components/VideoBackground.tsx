import React from "react";

const VideoBackground = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden md:w-full md:h-screen">
      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://www.youtube.com/embed/VFqQenE_Iz8?si=pbrPxDM2LUrHvXl7&autoplay=1&mute=1&loop=1&playlist=VFqQenE_Iz8&controls=0&showinfo=0&modestbranding=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      {/* Overlay untuk teks atau konten tambahan */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
          {/* Selamat Datang di Sekolah Kami */}
        </h1>
      </div>
    </div>
  );
};

export default VideoBackground;
