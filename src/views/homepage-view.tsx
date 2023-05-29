import { HeroSection } from "@/components";
import { FeaturesContainer } from "@/components/features";
import { NewsContainer } from "@/components/news";

export default function HomepageView() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-darkerBlue">
      <HeroSection />
      <FeaturesContainer />
      <NewsContainer />
    </div>
  );
}
