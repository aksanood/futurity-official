
export interface PortfolioItem {
  id: string;
  title: string;
  slug: string;
  client: string;
  date: string;
  description: string;
  challenge: string;
  solution: string;
  results: string;
  image_url: string;
  gallery: string[];
  portfolio_category: string; // This should be the id of the category
  featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  created_at?: string;
  updated_at?: string;
}
