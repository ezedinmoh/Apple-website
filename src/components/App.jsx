import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HeroSection from "./sections/HeroSection";
import IPhoneProSection from "./sections/IPhoneProSection";
import IPhoneSection from "./sections/IPhoneSection";
import PromoGridSection from "./sections/PromoGridSection";
import AppleTVSection from "./sections/AppleTVSection";
import MacBookAndIPadSection from "./sections/MacBookAndIPadSection";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <IPhoneProSection />
      <IPhoneSection />
      <PromoGridSection />
      <AppleTVSection />
      <MacBookAndIPadSection />
      <Footer />
    </div>
  );
}
export default App;
