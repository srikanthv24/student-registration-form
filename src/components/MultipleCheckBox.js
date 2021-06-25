import React, {useState, useEffect } from 'react';


const  MultipleCheckBox = (props) => {
    const [ courses, setCourses ] = useState([]);

    function handleCourseChange(event) {
        const { checked, value } = event.target;

        var index = courses.indexOf(value);

        if(checked){
            setCourses(prevState => [...prevState, value]);   
        }else{
            setCourses(() => {
                courses.splice(index, 1);
                return [...courses]
              });
        }
       
    }
    useEffect(() => {
        props.displayCourses(courses);
    }, [courses])

    
    return(
        <div className="form-check m-3" >
            <p>Programming Skills</p>
            <div className="form-check form-check-inline">    
                <input className="form-check-input" type="checkbox" name="courses" value="c++" onChange={handleCourseChange}/>
                <label className="form-check-label">C++</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" name="courses" value="javascript" onChange={handleCourseChange}/>
                <label className="form-check-label">Javascript</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" name="courses" value="python" onChange={handleCourseChange}/>
                <label className="form-check-label">Python</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" name="courses" value="java" onChange={handleCourseChange}/>
                <label className="form-check-label">Java</label>
            </div>
        </div>
        );
    }

  export default MultipleCheckBox;