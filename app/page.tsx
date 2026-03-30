import HeroSection from '@/components/home/HeroSection';
import InfoBanner from '@/components/home/InfoBanner';
import QuickLinksBar from '@/components/home/QuickLinksBar';
import SchoolOfChoice from '@/components/home/SchoolOfChoice';
import NewsCarousel from '@/components/home/NewsCarousel';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <InfoBanner />
      <QuickLinksBar />
      <SchoolOfChoice />
      <NewsCarousel />
    </main>
  );
}
