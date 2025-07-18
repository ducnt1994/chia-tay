import Banner from '@/components/Banner';
import FarewellMessage from '@/components/FarewellMessage';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import { farewellData } from '@/data/farewell-data';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner person={farewellData.person} />
      <FarewellMessage
        farewellMessage={farewellData.farewellMessage} 
      />
      <Testimonials />
      <Gallery gallery={farewellData.gallery} />
      <Footer footer={farewellData.footer} />
    </main>
  );
}
