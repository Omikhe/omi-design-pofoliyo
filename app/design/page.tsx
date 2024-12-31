import Card from "../components/card";

const branding = [
    {
        "title": "Valuations Africa",
        "image": "/branding/valuations-africa.png",
        "year": "2024",
        "description": "A unique brand identity for a real estate valuation company, focusing on a professional logo, modern visuals, and consistent branding elements to convey trust and expertise."
    },
    {
        "title": "Ziyemebe Community Radio",
        "image": "/branding/ziyemebe-radio.png",
        "year": "2024",
        "description": "An elegant brand identity for a local Malawian radio station."
    },
    {
        "title": "Valuations Africa",
        "image": "/branding/valuations-africa.png",
        "year": "2024",
        "description": "A unique brand identity for a real estate valuation company, focusing on a professional logo, modern visuals, and consistent branding elements to convey trust and expertise."
    },
    {
        "title": "Ziyemebe Community Radio",
        "image": "/branding/ziyemebe-radio.png",
        "year": "2024",
        "description": "An elegant brand identity for a local Malawian radio station."
    }

]

const categories = [
    {
        lebel: "All Projects"
    },
    {
        lebel: "Branding"
    },
    {
        lebel: "Flyers"
    },
    {
        lebel: "Logos"
    },
    {
        lebel: "Birthday Artworks"
    },

]
export default function Design() {
    return (
        <main className="p-16">
            <section className="flex gap-4 w-full mb-4">
                {categories.map((category) => (
                    <span key={category.lebel} className="flex items-center bg-[#1C1C1C] px-4 py-2 h-9 text-[#8A8A8A] rounded-full hover:bg-[#F2F2F2] hover:text-[#121212] transition-colors duration-300">{category.lebel}</span>
                ))}
            </section>


            {/* Grid container for cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {branding.map((brand, index) => (
                    <Card
                        key={index}
                        image={brand.image}
                        title={brand.title}
                        year={brand.year}
                        description={brand.description}
                    />
                ))}
            </div>


        </main>
    );
}