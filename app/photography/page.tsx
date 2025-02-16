import Gallery from "@/app/components/gallery"
import photoSlides from "./slides"

export default function Page() {
    return (
        <section className="container mx-auto px-4 w-full">
            <div className="my-8">
                <h2 className="block md:hidden text-4xl font-semibold mb-8">📸 Photography</h2>
            </div>
            <Gallery
                slides={photoSlides}
                columns={{ mobile: 1, tablet: 3, desktop: 4 }} // Custom column layout
                className="gap-16" // Custom gap
            />
        </section>
    )
}