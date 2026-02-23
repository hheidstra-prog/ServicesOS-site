import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { Problem } from "@/components/sections/problem";
import { Solution } from "@/components/sections/solution";
import { FeatureHighlights } from "@/components/sections/feature-highlights";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Testimonials } from "@/components/sections/testimonials";
import { WaitlistCTA } from "@/components/sections/waitlist-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Problem />
      <Solution />
      <FeatureHighlights />
      <HowItWorks />
      <Testimonials />
      <WaitlistCTA />
    </>
  );
}
