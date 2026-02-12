import Link from "next/link";

export default function HomePage() {
  const categories = [
    {
      name: "Poissons",
      description: "Poissons frais de nos côtes",
      icon: "🐟",
    },
    {
      name: "Crustacés",
      description: "Homards, crabes et crevettes fraîches",
      icon: "🦞",
    },
    {
      name: "Coquillages",
      description: "Huîtres, moules et palourdes",
      icon: "🦪",
    },
  ];

  const features = [
    {
      icon: "🏆",
      title: "Fraîcheur garantie",
      description: "Poissons et fruits de mer livrés quotidiennement",
    },
    {
      icon: "👨‍🍳",
      title: "Savoir-faire artisanal",
      description: "Plus de 35 ans d'expérience à votre service",
    },
    {
      icon: "🛒",
      title: "Commande facile",
      description: "Commandez en ligne, retirez en magasin",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-linear-to-r from-primary to-primary-dark opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Poissonnerie Locale
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Poissons et fruits de mer frais depuis 1985
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/produits"
                className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Découvrir nos produits
              </Link>
              <Link
                href="/contact"
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Nos Catégories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/produits?category=${category.name}`}
                className="card p-8 text-center hover:scale-105 transition-transform"
              >
                <div className="text-6xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                  {category.name}
                </h3>
                <p className="text-gray-600">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Pourquoi nous choisir ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à passer commande ?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Découvrez notre sélection de poissons et fruits de mer frais
          </p>
          <Link
            href="/produits"
            className="btn-primary bg-white text-primary hover:bg-gray-100"
          >
            Voir nos produits
          </Link>
        </div>
      </section>
    </div>
  );
}
