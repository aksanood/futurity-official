export interface PortfolioItem {
  id: string;
  title: string;
  slug: string;
  client: string;
  portfolio_category: string; // references service_categories.id
  description: string;
  challenge: string;
  solution: string;
  results: string;
  image_url: string;
  gallery: string[];
  featured: boolean;
  date: string;
  created_at?: string;
  updated_at?: string;
}
