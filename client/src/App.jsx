import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import './App.css';
import Image from "./doctor.png"

/* NOTE: EDIT BUTTON AND LOGOUT BUTTONS ARE STILL BEING IMPLEMENTED */

function FoodsEatenToday({foodEaten}) {
  return (
    <div className="foodsEatenToday">
      <h3 className="foodsEatenHeader"> Foods Eaten Today </h3>
    </div>
  );
}




function RecommendedNutrients({userSignedIn, recommendedNutrition}) {
  /* TODO: Add units */
  if (userSignedIn) {
    return (
      <div className="recommendedNutrients">
          <h3 className="recNutrientsHeader">Your Recommended Daily Nutrients</h3>
        <ul className="list-group">
          {Object.keys(recommendedNutrition).map((key, index) => (
            <li className="recNutrientsList"> 
              {key+":"} {recommendedNutrition[key]}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function NutrientsEaten({ userSignedIn, nutrientsEaten, recommendedNutrition }) {
  /* TODO: Add units */
  if (userSignedIn) {
    return (
      <div className="nutrientsEaten">
       <h3 className="nutrientsEatenHeader">Nutrients Eaten Today</h3>
        <ul className="list-group">
          {Object.keys(nutrientsEaten).map((key, index) => {
            if (nutrientsEaten[key] >= recommendedNutrition[key]) {
              return (
                <li key={key} className="nutrientRequirementAchieved">
                  {key + ":"} {nutrientsEaten[key]}
                </li>
              );
            }
            else {
              return (
                <li key={key} className="nutrientsEatenList">
                  {key + ":"} {nutrientsEaten[key]}
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }

}


function SignUpButton({userSignedIn, setIsSignUpButtonClicked}) {
  /* TODO: Need to add functionality when user clicks Sign Up Button  */
  function onSignUpClick(event) {
    setIsSignUpButtonClicked(true)
  }
  if (!userSignedIn) {
    return (
      <div className="signUpDiv">
          <button  onClick={onSignUpClick} className="signUpButton"> Sign Up</button>
      </div>
    )
  }
}


function FoodInputForm({userSignedIn, userinputFood, handleUserInputFood, handleUserInputFormSubmit}) {
  if (userSignedIn) {
    return (
      <form onSubmit={handleUserInputFormSubmit}>
            <label className="label">
              Add Foods You've Eaten Today: 
              <br/>
              <input type="text" className= "inputFoodForm" value={userinputFood} onChange={handleUserInputFood} />
            </label>
      </form>
    )
  }
}


function EditForm({userInfo, setuserInfo, setIsEditButtonClicked}) {
  const [genderInputValue, setgenderInputValue] = useState(userInfo.Gender)
  const [heightInputValue, setHeightInputValue] = useState(userInfo.Height)
  const [ageInputValue, setageInputValue] = useState(userInfo.Age)
  const [weightInputValue, setweightInputValue] = useState(userInfo.Weight)

  function handleUserEditGender(event){
    setgenderInputValue(event.target.value)
  }

  function handleUserEditHeight(event) {
    setHeightInputValue(event.target.value)
  }

  function handleUserEditAge(event) {
    setageInputValue(event.target.value)
  }

  function handleUserEditWeight(event) {
    setweightInputValue(event.target.value)
  }

  function submitEditForm(event) {
    console.log("Submit clicked")
    event.preventDefault()
    setuserInfo({...userInfo, Gender: genderInputValue, Height: heightInputValue, Age: ageInputValue, Weight: weightInputValue})
    setIsEditButtonClicked(false)
  }

  function handleCancelClick(event) {
    console.log("Cancel clicked")
    setIsEditButtonClicked(false)
  }

  return (
    <div className="editInfo"> 
      <h3 className="editInfoHeader"> Edit Your Information </h3>
      <div className="editOptions">
        <form onSubmit={submitEditForm}> 
          <label>
            Gender:
            <input className="editLabel" type="text" value={genderInputValue} onChange={handleUserEditGender}/>
          </label>
          <br/>
          <label>
            Age:
            <input className="editLabel" type="text" value={ageInputValue} onChange={handleUserEditAge} />
          </label>
          <br/>
          <label>
            Height In Inches:
            <input className="editLabel" type="text" value={heightInputValue} onChange={handleUserEditHeight}/>
          </label>
          <br/>
          <label>
            Weight:
            <input className="editLabel" type="text" value={weightInputValue} onChange={handleUserEditWeight}/>
          </label>
        </form>  
        <div className="cancelAndSubmitButtons">
          <button onClick={handleCancelClick}> Cancel </button>
          <button onClick={submitEditForm}>Submit</button>
        </div>
        
      </div>
    </div>
  );
}


function CreateAccount({userInfo, setuserInfo, setIsSignUpButtonClicked, setuserSignedIn, setuserAccountInfo}) {
  const [genderInputValue, setgenderInputValue] = useState(userInfo.Gender)
  const [heightInputValue, setHeightInputValue] = useState(userInfo.Height)
  const [ageInputValue, setageInputValue] = useState(userInfo.Age)
  const [weightInputValue, setweightInputValue] = useState(userInfo.Weight)
  const [nameInputValue, setnameInputValue] = useState("")
  const [emailInputValue, setemailInputValue] = useState("")
  const [passwordInputValue, setpasswordInputValue] = useState("")


  function handleUserEditName(event) {
    setnameInputValue(event.target.value)
  }

  function handleUserEditEmail(event) {
    setemailInputValue(event.target.value)
  }

  function handleUserEditPassword(event) {
    setpasswordInputValue(event.target.value)
  }

  function handleUserEditGender(event){
    setgenderInputValue(event.target.value)
  }

  function handleUserEditHeight(event) {
    setHeightInputValue(event.target.value)
  }

  function handleUserEditAge(event) {
    setageInputValue(event.target.value)
  }

  function handleUserEditWeight(event) {
    setweightInputValue(event.target.value)
  }



  function submitEditForm(event) {
    console.log("Submit clicked")
    event.preventDefault()
    setuserInfo({...userInfo, Gender: genderInputValue, Height: heightInputValue, Age: ageInputValue, Weight: weightInputValue})
    setuserAccountInfo({Name: nameInputValue,  Email: emailInputValue,  Password: passwordInputValue})
    setIsSignUpButtonClicked(false)
    setuserSignedIn(true)
    
  }

  function handleCancelClick(event) {
    console.log("Cancel clicked")
    setIsSignUpButtonClicked(false)
  }

  return (
    <div className="editInfo"> 
      <div className="inputAccountInfo">
        <h3 className="createAccountHeader"> Create Your Account</h3>
        <form> 
          <label>
            Name:
            <input className="editLabel" type="text" value={nameInputValue} onChange={handleUserEditName}/>
          </label>
          <br/>
          <label>
            Email:
            <input className="editLabel" type="text" value={emailInputValue} onChange={handleUserEditEmail} />
          </label>
          <br/>
          <label>
            Password:
            <input className="editLabel" type="text" value={passwordInputValue} onChange={handleUserEditPassword}/>
          </label>
          <br/>
        </form>
      </div>
      <div className="editOptions">
        <h3 id="signupInput" className="editInfoHeader"> Input Your Information </h3>
        <form onSubmit={submitEditForm}> 
          <label>
            Gender:
            <input className="editLabel" type="text" value={genderInputValue} onChange={handleUserEditGender}/>
          </label>
          <br/>
          <label>
            Age:
            <input className="editLabel" type="text" value={ageInputValue} onChange={handleUserEditAge} />
          </label>
          <br/>
          <label>
            Height In Inches:
            <input className="editLabel" type="text" value={heightInputValue} onChange={handleUserEditHeight}/>
          </label>
          <br/>
          <label>
            Weight:
            <input className="editLabel" type="text" value={weightInputValue} onChange={handleUserEditWeight}/>
          </label>
        </form>  
        <div className="cancelAndSubmitButtons">
          <button onClick={handleCancelClick}> Cancel </button>
          <button onClick={submitEditForm}>Submit</button>
        </div>
        
      </div>
    </div>

    
  );
}

function LoginForm({setuserInfo, setuserAccountInfo, setIsSignUpButtonClicked, setuserSignedIn, setrecommendedNutrition, setIsLoginButtonClicked}) {
  const [nameInputValue, setnameInputValue] = useState("")
  const [emailInputValue, setemailInputValue] = useState("")
  const [passwordInputValue, setpasswordInputValue] = useState("")


  function handleUserEditName(event) {
    setnameInputValue(event.target.value)
  }

  function handleUserEditEmail(event) {
    setemailInputValue(event.target.value)
  }

  function handleUserEditPassword(event) {
    setpasswordInputValue(event.target.value)
  }

  function submitEditForm(event) {
    console.log("Submit clicked")
    event.preventDefault()
    /* TODO: NEED TO CONNECT WITH BACKEND 
    setuserInfo({...userInfo, Gender: genderInputValue, Height: heightInputValue, Age: ageInputValue, Weight: weightInputValue})
    setuserAccountInfo({Name: nameInputValue,  Email: emailInputValue,  Password: passwordInputValue}) */
    setIsSignUpButtonClicked(false)
    setuserSignedIn(true)
    setIsLoginButtonClicked(false)
    
  }

  function handleCancelClick(event) {
    console.log("Cancel clicked")
    setIsSignUpButtonClicked(false)
    setIsLoginButtonClicked(false)
  }

  return (
    <div className="editInfo"> 
      <div className="inputAccountInfo">
          <h3 className="createAccountHeader"> Create Your Account</h3>
          <form> 
            <label>
              Name:
              <input className="editLabel" type="text" value={nameInputValue} onChange={handleUserEditName}/>
            </label>
            <br/>
            <label>
              Email:
              <input className="editLabel" type="text" value={emailInputValue} onChange={handleUserEditEmail} />
            </label>
            <br/>
            <label>
              Password:
              <input className="editLabel" type="text" value={passwordInputValue} onChange={handleUserEditPassword}/>
            </label>
            <br/>
          </form>
      </div>
      <div className="cancelAndSubmitButtons">
          <button onClick={handleCancelClick}> Cancel </button>
          <button onClick={submitEditForm}>Submit</button>
      </div>
    </div>

    
  );
}

function App(props) {
  const[isLoginButtonClicked, setIsLoginButtonClicked] = useState(false)
  const[isSignUpButtonClicked, setIsSignUpButtonClicked] = useState(false)
  const [isEditButtonClicked, setIsEditButtonClicked] = useState(false)
  const [userSignedIn, setuserSignedIn] = useState(false)
  const [userinputFood, setuserinputFood] = useState("")
  // foodEaten: {apple : {Calories: ..., Carbohydrates: ..., }}
  const [foodEaten, setfoodEaten] = useState({})
  const [recommendedNutrition, setrecommendedNutrition] = useState({Calories: 0, Carbohydrates: 0, Fiber : 0, Protein: 0, Fat: 0, Water: 0})
  const [consumedNutrients, setconsumedNutrients] = useState({ Calories: 0, Carbohydrates: 0, Fiber: 0, Protein: 0, Fat: 0, Water: 0 })
  /* UserInfo dictionary may need to be updated based on backend */
  const [userInfo, setuserInfo] = useState({Gender: "", Height: "", Weight: "", Age: ""})
  const [userAccountInfo, setuserAccountInfo] = useState({Username: "", Password: "", Email: ""})

  function handleUserInputFood(event) {
    setuserinputFood(event.target.value)
  }

  function handleUserInputFormSubmit(event) {
    // Need to add access database stuff here
    // REMOVE LATER
    event.preventDefault()
    foodEaten[userinputFood] = "TEST"
    setfoodEaten({...foodEaten})
  }

  /* TODO: Need to implement */
  function handleEditClick(event) {
    console.log("Edit clicked")
    setIsEditButtonClicked(true)
    
  }

  /* TODO: Need to implement */
  function handleLogoutClick(event) {
    console.log("Logout clicked")
    // REMOVE LATER
    // setIsEditButtonClicked(false)
    setuserSignedIn(false)
    setIsSignUpButtonClicked(false)
    setIsEditButtonClicked(false)
  }

  function handleLoginClick(event) {
    console.log("Login Clicked")
    setIsSignUpButtonClicked(false)
    setIsLoginButtonClicked(true)

  }

  return (
    <div className="App">
      <div className="topHeader">
        <h1 className="header"> GoNutrition </h1>
        {/* Need Login Stuff */}
        {userSignedIn ? (
        <div className="navigation">
          <button className="editButton" onClick={handleEditClick}>
            Edit
          </button>
          <button className="logoutButton" onClick={handleLogoutClick}>
            Logout
          </button>
        </div>) : <div className="navigation"> <button className="logoutButton" onClick={handleLoginClick}> Login </button> </div>}
      </div>
      {isLoginButtonClicked ? (
        // setUserInfo, setuserAccountInfo, setIsSignUpButtonClicked, setuserSignedIn, setrecommendedNutrition, setIsLoginButtonClicked
        <LoginForm setuserInfo={setuserInfo} setuserAccountInfo={setuserAccountInfo} setIsSignUpButtonClicked={setIsSignUpButtonClicked} setuserSignedIn={setuserSignedIn} setrecommendedNutrition={setrecommendedNutrition} setIsLoginButtonClicked={setIsLoginButtonClicked} />
      ) : null}
      {isEditButtonClicked ? (
        <EditForm userInfo={userInfo} setuserInfo={setuserInfo} setIsEditButtonClicked={setIsEditButtonClicked} />
      ) : null}
      {isSignUpButtonClicked ? (
        <CreateAccount userInfo={userInfo} setuserInfo={setuserInfo} setIsSignUpButtonClicked={setIsSignUpButtonClicked} setuserSignedIn={setuserSignedIn} setuserAccountInfo={setuserAccountInfo}/>
      ) : null}
      <div className="bodyOne" style={{display : isEditButtonClicked || isSignUpButtonClicked || isLoginButtonClicked? 'none' : 'block'}}>
        <div className="improveHeadline">
          <h1 id="improveNutrition">Improve your Nutrition</h1>
          <h2 id="improveDes">Using the foods you've eaten, we calculate what nutrients you lack or have in excess</h2>
        </div>
        <div className="doctorImage">
            <img src={Image} alt="DoctorImage"/>
        </div>
        <SignUpButton userSignedIn={userSignedIn} setIsSignUpButtonClicked={setIsSignUpButtonClicked} />
      </div>

      <div className="signedInContent" style={{display : isEditButtonClicked || !userSignedIn ? 'none' : 'block'}}>
        <div className="inputFood" >
            <FoodInputForm userSignedIn={userSignedIn} userinputFood={userinputFood} handleUserInputFood={handleUserInputFood} handleUserInputFormSubmit={handleUserInputFormSubmit}/>
        </div>
        <RecommendedNutrients userSignedIn={userSignedIn} recommendedNutrition={recommendedNutrition}/>
        <NutrientsEaten userSignedIn={userSignedIn} nutrientsEaten={consumedNutrients} recommendedNutrition={recommendedNutrition} />
        {/* <FoodsEatenToday foodEaten={foodEaten} /> */}
      </div>
    </div>
  );

  
}

export default App;
