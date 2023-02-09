interface JsonData {
  data: [];
  meta: {};
}

interface ReviewData {
  data: [Review];
  meta: {};
}

interface ProductImageData {
  data: [ProductImage];
  meta: {};
}

interface Review {
  product_id: number;
  id: number;
  email: string;
  name: string;
  rating: number;
  text: string;
  title: string;
  status: string;
  date_created: string;
  date_modified: string;
  date_reviewed: string;
}

interface ProductImage {
  id: number;
  product_id: number;
  is_thumbnail: boolean;
  sort_order: number;
  description: string;
  image_file: string;
  url_zoom: string;
  url_standard: string;
  url_thumbnail: string;
  url_tiny: string;
  date_modified: string;
}
