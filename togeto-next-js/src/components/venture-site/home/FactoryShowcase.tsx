import Image from "next/image";

type FactoryImage = { src: string; alt: string };

// Placeholder slots: drop the real factory photos into public/factory-1...5.
// (keep the same filenames) and they appear here automatically.
const images: FactoryImage[] = [
  { src: "/factory-1.jpg", alt: "Venture EMS production floor" },
  { src: "/factory-2.jpg", alt: "SMT assembly line" },
  { src: "/factory-3.jpg", alt: "PCB assembly close-up" },
  { src: "/factory-4.jpg", alt: "Assembled board inspection" },
  { src: "/factory-5.jpg", alt: "Automated assembly equipment" },
];

export function FactoryShowcase() {
  return (
    <section className="factory" aria-labelledby="factory-title">
      <div className="factory__inner">
        <header className="factory__head">
          <p className="factory__eyebrow">Our facility</p>
          <h2 id="factory-title" className="factory__title">
            Venture Electronics and our <span className="accent">EMS factory</span>
          </h2>
          <p className="factory__lead">
            A look inside the PCBA and EMS production environment, surface-mount, through-hole,
            and BGA assembly, in-line testing, and box build supporting turnkey electronics
            projects.
          </p>
        </header>
      </div>

      <div className="factory__viewport" aria-label="Venture facility photos">
        <div className="factory__track">
          {[...images, ...images].map((img, i) => (
            <div
              className="factory__slide"
              key={`${img.src}-${i}`}
              aria-hidden={i >= images.length ? true : undefined}
            >
              <Image
                className="factory__img"
                src={img.src}
                alt={i < images.length ? img.alt : ""}
                fill
                sizes="(max-width: 620px) 280px, 380px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
