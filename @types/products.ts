export type Product = {
  name: string;
  price: number;
  description: string[];
  images: string[];
  tags: string[];
  status: string;
  id: number;
  currency: string;
  featured?: boolean;
  ref_url?: string;
}

export type FilterTag = {
  label: string;
  tag: string;
  selected?: boolean;
}