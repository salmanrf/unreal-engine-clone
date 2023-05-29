import { HeroSection } from "@/components";
import { FeaturesContainer } from "@/components/features";

export default function Homepage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-darkerBlue">
      <HeroSection />
      <FeaturesContainer />
    </div>
  );
}
