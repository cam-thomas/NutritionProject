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
// response = {
//   dailyNutrients: {
//     calories: 2197,
//     carbs: 247,
//     protein: 64,
//     fat: 49,
//   },
//   currentNutrients: {
//     calories: 0,
//     carbs: 0,
//     protein: 0,
//     fat: 0,
//   },
//   recommendedFoods: [
//     {
//       foodName: "Chicken & Rice",
//       calories: 532,
//       carbs: 22,
//       protein: 68,
//       fat: 17,
//     },
//      NOTE: 3 more of these food objects are sent back.. leaving them out to keep this short
//   ],
// };

//****** LOGIN USER (KAI) ********/
// loginCreds = {
//   email: "kai123@gmail.com",
//   password: "password",
// };
export const loginUserCall = async (loginCreds) => {
  const res = await fetch('http://localhost:8080/api/v1/auth/login', {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loginCreds)
  })

  const data = await res.json()
  return data
}

//****** LOGOUT USER ********/
export const logoutCall = async () => {
  const res = await fetch('http://localhost:8080/api/v1/auth/logout', {
    method: 'get',
    headers: { 'Content-Type': 'application/json' }
  })
  // alert response code or something if needed..
}

//****** ADD FOOD  ********/
// addedFood = "Chicken & Rice" // just needs to be the name (string) of one of the foods in our backend foodList
export const addFoodCall = async (addedFood) => {
  const res = await fetch('http://localhost:8080/api/v1/users/addFood', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    // TODO: pass this info fron create form ?
    body: JSON.stringify({
      addedFood: addedFood
    })
  })
  const data = await res.json()
  console.log('Response from adding food: ', JSON.stringify(data))
  return data
}
