"use client"
import { useState } from 'react';
import Card from "../components/card";
import { branding, categories, flyers, logos } from "./dataa";

const Design = () => {
    const [activeCategory, setActiveCategory] = useState("All Projects");

    // Combine all your project types into one array
    const allProjects = [
        ...branding.map(item => ({ ...item, type: "Branding" })),
        ...flyers.map(item => ({ ...item, type: "Flyers" })),
        ...logos.map(item => ({ ...item, type: "Logos" })),
    ];

    // Filter projects based on active category
    const filteredProjects = activeCategory === "All Projects"
        ? allProjects
        : allProjects.filter(project => project.type === activeCategory);

    return (
        <main className="p-4 md:p-16">
            <div className="my-8">
                <h2 className="text-4xl font-semibold mb-8 md:hidden">🎨 Design</h2>
                <section className="flex flex-wrap gap-4 w-full">
                    {categories.map((category) => (
                        <button
                            key={category.label}
                            onClick={() => setActiveCategory(category.label)}
                            className={`flex items-center px-4 py-2 h-9 rounded-full transition-colors duration-300 ${activeCategory === category.label
                                ? "bg-[#F2F2F2] text-[#121212]"
                                : "bg-[#1C1C1C] text-[#8A8A8A] hover:bg-[#F2F2F2] hover:text-[#121212]"
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </section>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                    <Card
                        key={index}
                        image={project.image}
                        title={project.title}
                        year={project.year}
                        description={project.description}
                    />
                ))}
            </div>
        </main>
    );
};

export default Design;