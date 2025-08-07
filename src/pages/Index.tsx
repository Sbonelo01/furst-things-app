import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import PodcastEmbed from "@/components/PodcastEmbed";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ProductGrid />
      <PodcastEmbed />
      <Footer />
    </div>
  );
};

export default Index;
