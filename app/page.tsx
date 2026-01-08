import { HomeHero } from "@/components/marketing/home/home-hero";
import { HomeFeatureGrid } from "@/components/marketing/home/home-feature-grid";
import { HomeWorkflow } from "@/components/marketing/home/home-workflow";
import { HomeProofPoints } from "@/components/marketing/home/home-proof-points";
import { HomeCta } from "@/components/marketing/home/home-cta";
import { HomeFinalCta } from "@/components/marketing/home/home-final-cta";
import { MarketingFooter } from "@/components/marketing/marketing-footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HomeHero />
      <div className="mx-auto max-w-7xl">
        <HomeFeatureGrid />
        <HomeWorkflow />
        <HomeProofPoints />
        <HomeCta />
        <HomeFinalCta />
      </div>
      <MarketingFooter />
    </div>
  );
}
