import React, { useState } from 'react';

import useInput from './hook/use-input';
import Card from './Card';
import MultipleCheckBox from './MultipleCheckBox';

function Form() {
    const [ gender, setGender ] = useState('');
    const [ formDetails, setFormDetails ] = useState({});
    const [ displayCard, setDisplayCard ] = useState(false);
    const [ courseList, setcourseList ] = useState('');

    //dynamic select country and select state input code
    const [selectedCountry, setSelectedCountry] = useState("");
    const [ countryIsTouched, setCountryIsTouched ] = useState(false);

    const countryIsValid = selectedCountry.trim() !== '';;
    const countryInputError =  !countryIsValid && countryIsTouched;

    const changeSelectOptionHandler = (event) => {
        setSelectedCountry(event.target.value);
    };

    const blurSelectOptionHandler = (event) => {
        setCountryIsTouched(true);
    }

    const  resetCountryInput = () => {
        setSelectedCountry('');
        setCountryIsTouched(false);
    }
    
    const india = [ "AndhraPradesh", "Telangana", "TamilNadu", "Maharashtra", "Kerala", "Karnataka"];
    const america = ["Texas", "California", "Michigan", "Washington"];
    const germany = ["Berlin", "Munich", "Bohn", "Frankfurt", "Hamburg"];

    let type = null;
    let options = null;

    if (selectedCountry === "India") {
        type = india;
    } else if (selectedCountry === "America") {
        type = america;
    } else if(selectedCountry === "Germany") {
        type = germany;
    }

    if (type) {
        options = type.map((el) => <option key={el}>{el}</option>);
    }

    //Custom Input Hooks
    const {
        value: enteredFirstName,
        isValid: enteredFirstNameIsValid,
        hasError: firstNameInputHasError,
        inputChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: resetFirstNameInput
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredLastName,
        isValid: enteredLastNameIsValid,
        hasError: lastNameInputHasError,
        inputChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: resetLastNameInput
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredPhoneNumber,
        isValid: enteredPhoneNumberIsValid,
        hasError: phoneNumerInputHasError,
        inputChangeHandler: phoneNumberChangeHandler,
        inputBlurHandler: phoneNumberBlurHandler,
        reset: resetPhoneNumberInput
    } = useInput(value => value.trim().length === 10);

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        inputChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(value => value.includes('@'));

    //DOB handler
    const {
        value: enteredDob,
        isValid: dobIsValid,
        hasError: dobInputHasError,
        inputChangeHandler: dobChangeHandler,
        inputBlurHandler: dobBlurHandler,
        reset: resetDobInput
    } = useInput(value => value.trim !== '');

    const {
        value: enteredAddress,
        isValid: enteredAddressIsValid,
        hasError: addressInputHasError,
        inputChangeHandler: addressChangeHandler,
        inputBlurHandler: addressBlurHandler,
        reset: resetAddressInput
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredCity,
        isValid: enteredCityIsValid,
        hasError: cityInputHasError,
        inputChangeHandler: cityChangeHandler,
        inputBlurHandler: cityBlurHandler,
        reset: resetCityInput
    } = useInput(value => value.trim() !== '');

    const {
         value: enteredState,
        isValid: enteredStateIsValid,
        hasError: stateInputHasError,
        inputChangeHandler: stateChangeHandler,
        inputBlurHandler: stateBlurHandler,
        reset: resetStateInput
    } = useInput(value => value.trim() !== '');
    
    const {
        value: enteredPinCode,
        isValid: enteredPinCodeIsValid,
        hasError: pinCodeInputHasError,
        inputChangeHandler: pinCodeChangeHandler,
        inputBlurHandler: pinCodeBlurHandler,
        reset: resetPinCodeInput
    } = useInput(value => value.trim().length === 6);

    //Gender
    function genderChangeHandler(event) {
        setGender(event.target.value);
    }

    let formIsValid = false;

    if( enteredFirstNameIsValid && enteredLastNameIsValid && enteredPhoneNumberIsValid && enteredEmailIsValid 
        && dobIsValid && enteredAddressIsValid && enteredCityIsValid && countryIsValid && enteredPinCodeIsValid  
        && enteredStateIsValid){
        formIsValid = true;
        }

    function handleClear() {
        resetFirstNameInput();
        resetLastNameInput();
        resetPhoneNumberInput();
        resetEmailInput();
        resetDobInput();
        resetAddressInput();
        resetCityInput();
        resetCountryInput();
        resetStateInput();
        resetPinCodeInput();
    }

    function formSubmitHandler(event) {
        event.preventDefault();
        setFormDetails({
            firstName: enteredFirstName,
            lastName: enteredLastName,
            phone: enteredPhoneNumber,
            email: enteredEmail,
            dateOfBirth: enteredDob  ,
            genderType : gender,
            address: enteredAddress,
            city: enteredCity,
            country: selectedCountry,
            state: enteredState,
            pinCode: enteredPinCode    
        })

        setDisplayCard(true);
        handleClear();
    }

    function handleCoursesList(courses) {
        setcourseList(courses);
    }           
   
    return <React.Fragment>
        { !displayCard && 
        <div className="card">
            <h5 className="card-header bg-primary">Student Registration Form</h5>
       <form onSubmit={formSubmitHandler} style={{width : "500px",padding: "20px", margin:"30px"}}>
            <div className="form-group has-feedback">
                <input type="text" className="form-control" placeholder="First Name" onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} value={enteredFirstName} />
                <label>{ firstNameInputHasError && <span className="text-danger">First Name must not be Empty</span>}</label>
            </div>
            <div className="form-group">
                 <input type="text" className="form-control" placeholder="Last Name" onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} value={enteredLastName} />
                 <label>{lastNameInputHasError && <p className="text-danger">Last Name must not be Empty</p>}</label>
            </div>
            <div className="form-group">
                <input type="number" className="form-control" placeholder="Phone" onChange={phoneNumberChangeHandler} onBlur={phoneNumberBlurHandler} value={enteredPhoneNumber}/>
                <label>{phoneNumerInputHasError && <p className="text-danger">Please enter 10 digit Phone number</p>}</label>
            </div>
            <div className="form-group">
                <input type="email" className="form-control" placeholder="Email" onInput={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail} />
                <label>{emailInputHasError && <p className="text-danger">please enter valid email address</p>}</label>
            </div>
            <div className="form-group">
                <input type="date" className="form-control" onChange={dobChangeHandler} onBlur={dobBlurHandler} value={enteredDob}/>
                <label>{dobInputHasError && <p className="text-danger">please pick the date from the calender</p>}</label>
            </div>
            <div>
                <p>Gender</p>
                <div className="form-check form-check-inline" >
                    <input type="radio" className="form-check-input" name="gender"  value="male" onChange={genderChangeHandler}/>
                    <label className="form-check-label" >Male</label>
                </div>
                <div className="form-check form-check-inline">
                    <input type="radio" className="form-check-input" name="gender" value="female" onChange={genderChangeHandler}/>
                    <label className="form-check-label" >Female</label>
                </div>
            </div>
            <div className="form-group mt-4">
                <textarea className="form-control"  placeholder="Address" onChange={addressChangeHandler} onBlur={addressBlurHandler} value={enteredAddress} />
                <label>{addressInputHasError && <p className="text-danger">address field should not be empty</p>}</label>
            </div>
            <div className="form-group">
                <input type="text" className="form-control"  placeholder="City" onChange={cityChangeHandler} onBlur={cityBlurHandler} value={enteredCity}/>
                <label>{cityInputHasError && <p className="text-danger">city field should not be empty</p>}</label>
            </div>
            <div>
                <select className="form-select mt-3" onChange={changeSelectOptionHandler} onBlur={blurSelectOptionHandler} value={selectedCountry}>
			        <option >Country</option>
			        <option>India</option>
			        <option>America</option>
			        <option>Germany</option>
		        </select>
                <label> {countryInputError && (<p className="text-danger">Country field should not be empty</p>)}</label> 
            </div>
            <div>
                <select className="form-select  mt-3" placeholder="State" onChange={stateChangeHandler} onBlur={stateBlurHandler} value={enteredState} >
			    { options}
                {stateInputHasError && <p className="text-danger">State field should not be empty</p>}
		        </select>
            </div>
            <div className="form-group mt-3">
                <input type="number" className="form-control"  placeholder="Pin Code" maxLength={6} onChange={pinCodeChangeHandler} onBlur={pinCodeBlurHandler} value={enteredPinCode}/>
                <label>{pinCodeInputHasError && <p className="text-danger">Enter Valid Pincode</p>}</label>
            </div>
            <MultipleCheckBox displayCourses={handleCoursesList}/>
            <div>
                <button disabled={!formIsValid} className="btn btn-primary btn-lg" type="submit">Submit</button>
            
                <button className="btn btn-outline-secondary btn-lg" type="reset" onClick={handleClear}> Clear </button>
            </div>
        </form>
        </div> }

        { displayCard &&  
        <Card
            firstName = {formDetails.firstName}
            lastName = {formDetails.lastName}
            phone = {formDetails.phone}
            email = {formDetails.email}
            dob = {formDetails.dateOfBirth}
            gender = {formDetails.genderType}
            address = {formDetails.address}
            city = {formDetails.city}
            country = {formDetails.country}
            state = {formDetails.state}
            pinCode = {formDetails.pinCode}
            items={courseList}
        /> 
        }   
        </React.Fragment>
}

export default Form;
