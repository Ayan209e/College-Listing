import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import { ReactNode } from "react";

export type CarouselApi = UseEmblaCarouselType[1];
export type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
export type CarouselOptions = UseCarouselParameters[0];
export type CarouselPlugin = UseCarouselParameters[1];

export type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

export type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

export interface ICarouselItem {
  id?: number | string;
  title: string;
  description?: string;
  image?: ReactNode | Element;
  onclick?: () => void;
}

export interface ICarouselProps {
  items: ICarouselItem[];
}

export interface ICarouselItemProps {
  item: ICarouselItem;
}
