import Gallery from '../gallery'
import logoSlides from "../photography/slides"

export default function Page() {
    return (
        <section className="container mx-auto px-4">
            <Gallery
                slides={logoSlides}
                columns={{ mobile: 1, tablet: 3, desktop: 4 }} // Custom column layout
                className="gap-6" // Custom gap
            />
        </section>
    );
}