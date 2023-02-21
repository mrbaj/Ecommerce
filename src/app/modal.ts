interface JsonData {
  data: [];
  meta: {};
}

interface PCAssignmentData {
  data: [];
  meta: {};
}

interface PCAssignment {
  category_id: 18;
  product_id: 77;
}

interface CategoryData {
  data: [category];
  meta: {};
}

interface AllCategoryData {
  data: [allcategory];
  meta: {};
}

interface ProductData {
  data: [product];
  meta: {};
}

interface product {
  id: 77;
  name: string;
  type: 'physical';
  sku: 'SLCTBS';
  description: '<p>The perfect beach towel: thin, lightweight and highly absorbent. Crafted by Fog Linen in Japan using soft Lithuanian linen, each towel rolls up for compact stowaway. Dry off after a refreshing dip in the ocean and stretch out on it for a sun bath. The thinness ensures a quick dry so you can have it rolled back up in your bag without soaking your belongings.</p>\n<p>Measures 75 x 145 cm/29.5 x 57 in</p>\n<p>100% Linen</p>';
  weight: 1;
  width: 0;
  depth: 0;
  height: 0;
  price: 49;
  cost_price: 0;
  retail_price: 0;
  sale_price: 0;
  map_price: 0;
  tax_class_id: 0;
  product_tax_code: '';
  calculated_price: 49;
  categories: number[];
  brand_id: 0;
  option_set_id: 14;
  option_set_display: 'right';
  inventory_level: 0;
  inventory_warning_level: 0;
  inventory_tracking: 'none';
  reviews_rating_sum: 0;
  reviews_count: 0;
  total_sold: 4;
  fixed_cost_shipping_price: 0;
  is_free_shipping: false;
  is_visible: true;
  is_featured: false;
  related_products: [-1];
  warranty: '';
  bin_picking_number: '';
  layout_file: 'product.html';
  upc: '';
  mpn: '';
  gtin: '';
  search_keywords: '';
  availability: 'available';
  availability_description: '';
  gift_wrapping_options_type: 'any';
  gift_wrapping_options_list: [];
  sort_order: 0;
  condition: 'New';
  is_condition_shown: false;
  order_quantity_minimum: 0;
  order_quantity_maximum: 0;
  page_title: '';
  meta_keywords: [];
  meta_description: '';
  date_created: '2015-07-03T17:57:10+00:00';
  date_modified: '2015-08-05T18:17:22+00:00';
  view_count: 64;
  preorder_release_date: null;
  preorder_message: '0';
  is_preorder_only: false;
  is_price_hidden: false;
  price_hidden_label: '0';
  custom_url: {
    url: '/fog-linen-chambray-towel-beige-stripe/';
    is_customized: false;
  };
  base_variant_id: null;
  open_graph_type: 'product';
  open_graph_title: '';
  open_graph_description: '';
  open_graph_use_meta_description: true;
  open_graph_use_product_name: true;
  open_graph_use_image: true;
  image: string;
  category: number;
}

interface allcategory {
  category_id: 1;
  product_id: 77;
}
interface category {
  id: 19;
  parent_id: 0;
  name: 'Garden';
  description: '';
  views: 0;
  sort_order: 2;
  page_title: '';
  meta_keywords: [''];
  meta_description: '';
  layout_file: 'category_with_facets.html';
  image_url: '';
  is_visible: true;
  search_keywords: '';
  default_product_sort: 'use_store_settings';
  custom_url: {
    url: '/garden/';
    is_customized: false;
  };
  image: '';
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
