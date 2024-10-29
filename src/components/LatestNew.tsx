"use client";
import Image from "next/image";
import React, { useState } from "react";

const LatestNews = () => {
  // Contoh data berita dengan gambar
  const [news] = useState([
    {
      id: 1,
      title: "Berita Terbaru 1",
      description: "Deskripsi berita terbaru 1...",
      date: "2024-10-29",
      category: "Kegiatan",
      imageUrl: "/images/smkn2kra-logo.png", // Ganti dengan URL gambar yang sesuai
    },
    {
      id: 2,
      title: "Berita Terbaru 2",
      description: "Deskripsi berita terbaru 2...",
      date: "2024-10-28",
      imageUrl: "/images/smkn2kra-logo.png",
    },
    {
      id: 3,
      title: "Berita Terbaru 3",
      description: "Deskripsi berita terbaru 3...",
      date: "2024-10-27",
      category: "Kegiatan",
      imageUrl: "/images/smkn2kra-logo.png",
    },
  ]);

  return <div></div>;
};

export default LatestNews;
