import { TopNav } from "@/components/marketing/top-nav";
import { MarketingFooter } from "@/components/marketing/marketing-footer";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <TopNav />
      {children}
      <MarketingFooter />
    </div>
  );
}
