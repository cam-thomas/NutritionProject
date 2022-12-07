export const foodsList: foodType[] = [
  {
    foodName: 'Banana',
    calories: 105,
    carbs: 27,
    protein: 1,
    fat: 1
  },
  {
    foodName: 'Apple',
    calories: 95,
    carbs: 25,
    protein: 1,
    fat: 1
  },
  {
    foodName: 'Chicken & Rice',
    calories: 532,
    carbs: 22,
    protein: 68,
    fat: 17
  },
  {
    foodName: 'Steak',
    calories: 610,
    carbs: 0,
    protein: 58,
    fat: 41
  },
  {
    foodName: 'Oatmeal',
    calories: 166,
    carbs: 28,
    protein: 6,
    fat: 4
  },
  {
    foodName: 'Ice Cream',
    calories: 273,
    carbs: 31,
    protein: 5,
    fat: 15
  },
  {
    foodName: 'Turkey Sandwich',
    calories: 324,
    carbs: 29,
    protein: 21,
    fat: 13
  },
  {
    foodName: 'Fried Eggs',
    calories: 180,
    carbs: 1,
    protein: 13,
    fat: 13
  },
  {
    foodName: 'Bacon',
    calories: 161,
    carbs: 1,
    protein: 12,
    fat: 12
  },
  {
    foodName: 'Mango Smoothie',
    calories: 120,
    carbs: 22,
    protein: 5,
    fat: 2
  }
]

export interface foodType {
  foodName: string
  calories: number
  carbs: number
  protein: number
  fat: number
  fiber: number
}
