"use client";
import FeaturePost from "@/components/FeaturePost";
import FeatureVideo from "@/components/FeatureVideo";
import HeroBlog from "@/components/HeroBlog";
import HeroSection from "@/components/HeroSection";
import HomeBlog from "@/components/HomeBlog";
import RecentPost from "@/components/RecentPost";


export default function Home() {

  return (
    <>
      <div className="relative w-full bg-slate-950 h-full pb-10">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
        </div>
        {/* <HeroSection /> */}
        <div className="px-12 flex flex-col relative py-10">
          <HeroSection />
          <HeroBlog />
        </div>
        <div className="pb-10 relative">
          <HomeBlog />
          <FeaturePost />
          <RecentPost />
          <FeatureVideo />
        </div>
      </div>

    </>
  );
}



