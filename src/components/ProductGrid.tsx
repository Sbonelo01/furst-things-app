import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const ProductGrid = () => {
  const categories = [
    {
      id: 1,
      title: "Tops",
      image: product1,
      href: "#"
    },
    {
      id: 2,
      title: "Bottoms",
      image: product2,
      href: "#"
    },
    {
      id: 3,
      title: "Sets",
      image: product3,
      href: "#"
    },
    {
      id: 4,
      title: "All Products",
      image: product4,
      href: "#"
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Signature Purple Hoodie",
      image: product1,
      href: "#"
    },
    {
      id: 2,
      name: "Premium Pink Sweatpants",
      image: product2,
      href: "#"
    },
    {
      id: 3,
      name: "Matching Set Collection",
      image: product3,
      href: "#"
    },
    {
      id: 4,
      name: "Essential Yellow Tee",
      image: product4,
      href: "#"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            NEW PRODUCTS
          </h2>
          <Button variant="ghost" className="text-lg font-bold group">
            View All
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {categories.map((category) => (
            <a
              key={category.id}
              href={category.href}
              className="group block"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Featured Products */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <a
              key={product.id}
              href={product.href}
              className="group block"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {product.name}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;