"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-screen flex justify-center items-center h-screen flex-col gap-4">
      <h1 className="font-bold text-4xl">у спогадах Феліпе Баковського</h1>
      <Carousel setApi={setApi} className="mx-auto max-w-md">
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
            <Image src={"/edu.png"} alt="Edu" width={500} height={500} />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
