const images = [
    "https://i.pinimg.com/474x/73/70/f3/7370f3888d39a0aa06165b0ed0fda7fb.jpg",
    "https://i.pinimg.com/736x/47/e2/93/47e29310d6a505896d3df873381eaff5.jpg",
    "https://i.pinimg.com/474x/a7/56/0a/a7560a80cbe21f2b64806466c3044f2e.jpg",
    "https://i.pinimg.com/736x/40/76/83/407683e94684a32a04ce7729321ec544.jpg",
    "https://i.pinimg.com/474x/29/89/5e/29895e5eafe01b49da3eb294395e8e63.jpg",
    "https://i.pinimg.com/736x/aa/23/1c/aa231c32aad003c00fdbc9f81b020077.jpg",
    "https://i.pinimg.com/474x/83/c2/6c/83c26c69beee3592d781811e94ae3075.jpg",
    "https://i.pinimg.com/736x/a1/be/d7/a1bed78fe56c73dca263bc968fee643c.jpg"
]
export default function Page() {
    return (
        <main className="h-screen flex flex-col items-center justify-center px-4">
            <div className="columns-1 sm:columns-2 lg:columns-4 py-10 md:py-20 gap-4">
                {images.map((src, index) => (
                    <div key={index} className="mb-4 break-inside-avoid">
                        <img src={src} className="w-full object-cover" />
                    </div>
                ))}

            </div>
        </main>
    );
}