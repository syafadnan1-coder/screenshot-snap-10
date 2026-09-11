import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export type CarouselImage = { src: string; alt: string };

export function ImageCarousel({ images }: { images: CarouselImage[] }) {
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

  return (
    <Carousel
      opts={{ direction: "rtl", loop: true, align: "start" }}
      plugins={[autoplay.current]}
      className="w-full"
    >
      <CarouselContent className="-ms-4">
        {images.map((image) => (
          <CarouselItem
            key={image.src + image.alt}
            className="ps-4 sm:basis-1/2 lg:basis-1/3"
          >
            <figure className="surface-card overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-4/3 w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-sm font-medium text-primary">
                {image.alt}
              </figcaption>
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="start-1" />
      <CarouselNext className="end-1" />
    </Carousel>
  );
}
