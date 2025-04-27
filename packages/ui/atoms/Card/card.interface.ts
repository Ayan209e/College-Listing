export interface ICardHeaderProps {
  name: string;
  location?: string;
  fees?: string;
  stream?: string;
  link?: string;
}

export interface ICardProps extends ICardHeaderProps {
  rating?: number;
  imageSrc?: string;
}

export interface ICardImageProps {
  src?: string;
  alt?: string;
  rating?: number;
}
