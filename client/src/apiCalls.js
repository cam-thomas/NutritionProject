//****** CREATE USER (Erica) ********/

// userInfo = {
//   name: "Erica",
//   email: "erica123@gmail.com",
//   password: "password",
//   gender: "female",
//   age: 27,
//   height: 58,
//   weight: 175,
// };
export const registerUserCall = async (userInfo) => {
  const res = await fetch('http://localhost:8080/api/v1/auth/register', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    // TODO: pass this info fron create form ?
    body: JSON.stringify(userInfo)
  })
  const data = await res.json()
  console.log('Response from create account: ', JSON.stringify(data))
  return data
}
// example response = {
//   dailyNutrients: {
//     Calories: 2197,
//     Carbohydrates: 247,
//     Protein: 64,
//     Fat: 49,
//     Fiber: 25
//   },
//   currentNutrients: {
//     Calories: 0,
//     Carbohydrates: 0,
//     Protein: 0,
//     Fat: 0,
//     Fiber: 0
//   },
//   recommendedFoods: [
//     {
//       foodName: 'Bacon',
//       Calories: 161,
//       Carbohydrates: 1,
//       Protein: 12,
//       Fat: 12,
//       Fiber: 0
//     },
//     {
//       foodName: 'Steak',
//       Calories: 610,
//       Carbohydrates: 0,
//       Protein: 58,
//       Fat: 41,
//       Fiber: 0
//     },
//     {
//       foodName: 'Apple',
//       Calories: 95,
//       Carbohydrates: 25,
//       Protein: 1,
//       Fat: 1,
//       Fiber: 4
//     },
//     {
//       foodName: 'Chicken Caesar Salad',
//       Calories: 508,
//       Carbohydrates: 14,
//       Protein: 48,
//       Fat: 28,
//       Fiber: 3
//     }
//   ]
// }

//****** LOGIN USER (KAI) ********/
// loginCreds = {
//   email: "kai123@gmail.com",
//   password: "password",
// };
export const loginUserCall = async (loginCreds) => {
  const res = await fetch('http://localhost:8080/api/v1/auth/login', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loginCreds)
  })

  const data = await res.json()
  return data
}

// example response = {
//   dailyNutrients: {
//     Calories: 2873,
//     Carbohydrates: 323,
//     Protein: 64,
//     Fat: 64,
//     Fiber: 30
//   },
//   currentNutrients: {
//     Calories: 1917,
//     Carbohydrates: 29,
//     Protein: 77,
//     Fat: 58,
//     Fiber: 4
//   },
//   recommendedFoods: [
//     {
//       foodName: 'Banana',
//       Calories: 105,
//       Carbohydrates: 27,
//       Protein: 1,
//       Fat: 1,
//       Fiber: 3
//     },
//     {
//       foodName: 'Fried Eggs',
//       Calories: 180,
//       Carbohydrates: 1,
//       Protein: 13,
//       Fat: 13,
//       Fiber: 0
//     },
//     {
//       foodName: 'Turkey Sandwich',
//       Calories: 324,
//       Carbohydrates: 29,
//       Protein: 21,
//       Fat: 13,
//       Fiber: 2
//     },
//     {
//       foodName: 'Bacon',
//       Calories: 161,
//       Carbohydrates: 1,
//       Protein: 12,
//       Fat: 12,
//       Fiber: 0
//     }
//   ],
//   foodsEaten: [
//     {
//       foodName: 'Steak',
//       Calories: 610,
//       Carbohydrates: 0,
//       Protein: 58,
//       Fat: 41,
//       Fiber: 0
//     },
//     {
//       foodName: 'Fried Eggs',
//       Calories: 180,
//       Carbohydrates: 1,
//       Protein: 13,
//       Fat: 13,
//       Fiber: 0
//     },
//     {
//       foodName: 'Oatmeal',
//       Calories: 166,
//       Carbohydrates: 28,
//       Protein: 6,
//       Fat: 4,
//       Fiber: 4
//     }
//   ]
// }

//****** LOGOUT USER ********/
export const logoutCall = async () => {
  const res = await fetch('http://localhost:8080/api/v1/auth/logout', {
    method: 'get',
    headers: { 'Content-Type': 'application/json' }
  })
  // alert response code or something if needed..
}
// no response needed for frontend

//****** ADD FOOD (Kai)  ********/
// example for Kai
// addedFood = {
//   addedFood: 'food name'
// }
export const addFoodCall = async (addedFood) => {
  const res = await fetch('http://localhost:8080/api/v1/users/addFood', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    // TODO: pass this info fron create form ?
    body: JSON.stringify(addedFood)
  })
  const data = await res.json()
  console.log('Response from adding food: ', JSON.stringify(data))
  return data
}

// response = {
//   nutrients: {
//     Calories: 1897,
//     Carbohydrates: 179,
//     Protein: 41,
//     Fat: 34,
//     Fiber: 19
//   },
//   recommendedFoods: [
//     {
//       foodName: 'Banana',
//       Calories: 105,
//       Carbohydrates: 27,
//       Protein: 1,
//       Fat: 1,
//       Fiber: 3
//     },
//     {
//       foodName: 'Steak',
//       Calories: 610,
//       Carbohydrates: 0,
//       Protein: 58,
//       Fat: 41,
//       Fiber: 0
//     },
//     {
//       foodName: 'Turkey Sandwich',
//       Calories: 324,
//       Carbohydrates: 29,
//       Protein: 21,
//       Fat: 13,
//       Fiber: 2
//     },
//     {
//       foodName: 'Fruit Salad',
//       Calories: 97,
//       Carbohydrates: 24,
//       Protein: 1,
//       Fat: 1,
//       Fiber: 3
//     }
//   ],
//   foodsEaten: [
//     {
//       foodName: 'Steak',
//       Calories: 610,
//       Carbohydrates: 0,
//       Protein: 58,
//       Fat: 41,
//       Fiber: 0
//     },
//     {
//       foodName: 'Fried Eggs',
//       Calories: 180,
//       Carbohydrates: 1,
//       Protein: 13,
//       Fat: 13,
//       Fiber: 0
//     },
//     {
//       foodName: 'Oatmeal',
//       Calories: 166,
//       Carbohydrates: 28,
//       Protein: 6,
//       Fat: 4,
//       Fiber: 4
//     },
//     {
//       foodName: 'Turkey Sandwich',
//       Calories: 324,
//       Carbohydrates: 29,
//       Protein: 21,
//       Fat: 13,
//       Fiber: 2
//     }
//   ]
// }

//****** EDIT  ERICA ********/

// this endpoint works for scenario where Erica changes her weight to 165.. can make this work for other stuff as well if needed

// updatedInfo = {
//    "gender": "female",
//    "age": 27,
//    "height": 58,
//    "weight": 165
// }
export const EditErica = async (updatedInfo) => {
  const res = await fetch('http://localhost:8080/api/v1/users/editUser', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    // TODO: pass this info fron create form ?
    body: JSON.stringify(updatedInfo)
  })
  const data = await res.json()
  console.log('Response from editing user: ', JSON.stringify(data))
  return data
}
// example response = {
//   dailyNutrients: {
//     Calories: 2150,
//     Carbohydrates: 242,
//     Protein: 60,
//     Fat: 48,
//     Fiber: 20
//   }
// }
