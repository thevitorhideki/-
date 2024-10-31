"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex px-16f flex-col gap-4">
      <h1 className="font-bold text-4xl">у спогадах Феліпе Баковського</h1>
      <Carousel className="mx-auto max-w-md">
        <CarouselContent>
          <CarouselItem>
            <Image src={"/b.jpeg"} alt="B" width={500} height={500} />
          </CarouselItem>
          <CarouselItem>
            <Image src={"/a.jpeg"} alt="A" width={500} height={500} />
          </CarouselItem>
          <CarouselItem>
            <Image src={"/k.jpeg"} alt="K" width={500} height={500} />
          </CarouselItem>
          <CarouselItem>
            <Image src={"/o.jpeg"} alt="O" width={500} height={500} />
          </CarouselItem>
          <CarouselItem>
            <Image src={"/d.jpeg"} alt="D" width={500} height={500} />
          </CarouselItem>
          <CarouselItem>
            <Image src={"/edu.png"} alt="Edu" width={500} height={500} />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
