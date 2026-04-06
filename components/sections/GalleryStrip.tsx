import Image from "next/image";
import { gallery } from "@/data/site";

export function GalleryStrip() {
  return (
    <section className="section" aria-label="Travel gallery">
      <div className="site-shell">
        <div className="gallery-strip">
          {gallery.map((item) => (
            <div key={item.image} className="gallery-card surface-card">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="gallery-image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
