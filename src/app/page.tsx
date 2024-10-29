import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LatestNews from "@/components/LatestNew";
import Navbar from "@/components/Navbar";
import VideoBackground from "@/components/VideoBackground";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <main className="">
        <VideoBackground />
        <Hero />
        <LatestNews />
      </main>
      <Footer />
    </div>
  );
}
