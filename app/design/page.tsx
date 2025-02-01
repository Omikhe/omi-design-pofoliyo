import Card from "../components/card";
import { branding, categories } from "./dataa";

export default function Design() {
    return (
        <main className="p-4 md:p-16">

            <div className="my-8">
                <h2 className="text-4xl font-semibold mb-8 md:hidden">🎨 Design</h2>
                <section className="flex flex-wrap gap-4 w-full">
                    {categories.map((category) => (
                        <span key={category.label} className="flex items-center bg-[#1C1C1C] px-4 py-2 h-9 text-[#8A8A8A] rounded-full hover:bg-[#F2F2F2] hover:text-[#121212] active:bg-[#F2F2F2] active:text-[#121212] transition-colors duration-300">{category.label}</span>
                    ))}
                </section>
            </div>


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