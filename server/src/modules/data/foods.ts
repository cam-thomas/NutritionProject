export const foodsList: foodType[] = [
  {
    foodName: 'Banana',
    Calories: 105,
    Carbohydrates: 27,
    Protein: 1,
    Fat: 1,
    Fiber: 3
  },
  {
    foodName: 'Apple',
    Calories: 95,
    Carbohydrates: 25,
    Protein: 1,
    Fat: 1,
    Fiber: 4
  },
  {
    foodName: 'Chicken & Rice',
    Calories: 532,
    Carbohydrates: 22,
    Protein: 68,
    Fat: 17,
    Fiber: 1
  },
  {
    foodName: 'Steak',
    Calories: 610,
    Carbohydrates: 0,
    Protein: 58,
    Fat: 41,
    Fiber: 0
  },
  {
    foodName: 'Oatmeal',
    Calories: 166,
    Carbohydrates: 28,
    Protein: 6,
    Fat: 4,
    Fiber: 4
  },
  {
    foodName: 'Ice Cream',
    Calories: 273,
    Carbohydrates: 31,
    Protein: 5,
    Fat: 15,
    Fiber: 1
  },
  {
    foodName: 'Turkey Sandwich',
    Calories: 324,
    Carbohydrates: 29,
    Protein: 21,
    Fat: 13,
    Fiber: 2
  },
  {
    foodName: 'Fried Eggs',
    Calories: 180,
    Carbohydrates: 1,
    Protein: 13,
    Fat: 13,
    Fiber: 0
  },
  {
    foodName: 'Bacon',
    Calories: 161,
    Carbohydrates: 1,
    Protein: 12,
    Fat: 12,
    Fiber: 0
  },
  {
    foodName: 'Mango Smoothie',
    Calories: 120,
    Carbohydrates: 22,
    Protein: 5,
    Fat: 2,
    Fiber: 2
  },
  {
    foodName: 'Chicken Alfredo',
    Calories: 1190,
    Carbohydrates: 71,
    Protein: 46,
    Fat: 81,
    Fiber: 4
  },
  {
    foodName: 'Enchiladas',
    Calories: 574,
    Carbohydrates: 60,
    Protein: 28,
    Fat: 24,
    Fiber: 5
  },
  {
    foodName: 'Chicken Caesar Salad',
    Calories: 508,
    Carbohydrates: 14,
    Protein: 48,
    Fat: 28,
    Fiber: 3
  },
  {
    foodName: 'Fruit Salad',
    Calories: 97,
    Carbohydrates: 24,
    Protein: 1,
    Fat: 1,
    Fiber: 3
  },
  {
    foodName: 'Pizza (3 pcs)',
    Calories: 855,
    Carbohydrates: 108,
    Protein: 36,
    Fat: 30,
    Fiber: 8
  },
  {
    foodName: 'Edamame',
    Calories: 188,
    Carbohydrates: 14,
    Protein: 18,
    Fat: 8,
    Fiber: 8
  },
  {
    foodName: 'Beer (1 Pint)',
    Calories: 204,
    Carbohydrates: 17,
    Protein: 2,
    Fat: 0,
    Fiber: 0
  }
]

export interface foodType {
  foodName: string
  Calories: number
  Carbohydrates: number
  Protein: number
  Fat: number
  Fiber: number
}
