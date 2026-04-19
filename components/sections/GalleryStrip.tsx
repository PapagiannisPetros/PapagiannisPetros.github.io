import Image from "next/image";

type GalleryItem = { image: string; alt: string };

type Props = {
  gallery: GalleryItem[];
  ui: { ariaLabel: string };
};

export function GalleryStrip({ gallery, ui }: Props) {
  return (
    <section className="section" aria-label={ui.ariaLabel}>
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
