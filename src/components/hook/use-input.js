import { useState } from 'react';

function useInput(validateValue) {
    const [ inputValue, setInputValue ] = useState('');
    const [ touched, setTouched ] = useState(false);

    const valueIsValid = validateValue(inputValue);
    const hasError =  !valueIsValid && touched;

    function inputChangeHandler(event) {
        setInputValue(event.target.value);
    }

    function inputBlurHandler(event) {
        setTouched(true);
    }

    function reset() {
        setInputValue('');
        setTouched(false);
    }

    return {
        value: inputValue,
        isValid: valueIsValid,
        hasError: hasError,
        inputChangeHandler,
        inputBlurHandler,
        reset
    };
}


export default useInput;
