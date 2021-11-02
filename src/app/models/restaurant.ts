

// Cuisine is exported as a keyvalue pair
export const CuisineList: { [key: number]: string } = {
  1: 'American',
  2: 'Chinese',
  3: 'Thai',
  4: 'Italian',
  5: 'French',
  6: 'Japanese',
  7: 'Turkish',
  8: 'Korean',
  9: 'Vietnamese',
  10: 'Indian ',
  11: 'Spanish ',
  12: 'Greek ',
  13: 'Mexican ',
  14: 'Malaysian ',
  15: 'African ',
  16: 'German ',
  17: 'Indonesian ',
  18: 'Russian ',
  19: 'Other',
};


export interface Restaurant {
  name: string;
  customerRating: number;
  distance: number;
  price: number
  cuisineId: number;
}