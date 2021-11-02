export interface SearchInterface {
  name: string | null;
  rating: number | null;
  distance: number | null;
  price: number | null;
  cuisine: string | null;
}

export const DefaultSearchValues = {
  name: null,
  rating: null,
  distance: null,
  price: null,
  cuisine: null
}
