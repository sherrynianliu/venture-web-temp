import Image from "next/image";
import type { CSSProperties } from "react";
import { ventureImages, type VentureImageId } from "@/components/venture-site/image-manifest";

type EvidenceImageBlockProps = {
  title: string;
  images: VentureImageId[];
};

export function EvidenceImageBlock({ title, images }: EvidenceImageBlockProps) {
  if (!images.length) return null;
  const headingId = `evidence-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <aside className="stage3-evidence-images" aria-labelledby={headingId}>
      <h3 id={headingId}>{title}</h3>
      <div className="stage3-evidence-images__grid">
        {images.map((id) => {
          const image = ventureImages[id];

          return (
            <figure
              className="stage3-evidence-image"
              style={{ "--evidence-max": `${image.maxDisplayCssPx}px` } as CSSProperties}
              key={image.id}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes={`(max-width: 780px) calc(100vw - 48px), ${image.maxDisplayCssPx}px`}
                loading="lazy"
              />
              <figcaption>{image.caption}</figcaption>
            </figure>
          );
        })}
      </div>
    </aside>
  );
}
