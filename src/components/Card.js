import React from 'react';

function Card(props) {
    return <React.Fragment>
            <div className="card" style={{width : "500px"}}>    
                <h5 className="card-header bg-primary">Student Information Preview</h5>
                <div className="card-body">
                    <p className="card-text">First Name : {props.firstName}</p>
                    <p className="card-text">Last Name : {props.lastName}</p>
                    <p className="card-text">Phone : {props.phone}</p>
                    <p className="card-text">Email: {props.email}</p>
                    <p className="card-text">Date Of Birth: {props.dob}</p>
                    <p className="card-text">Gender : {props.gender}</p>
                    <p className="card-text">Address : {props.address}</p>
                    <p className="card-text">City : {props.city}</p>
                    <p className="card-text">Country : {props.country}</p>
                    <p className="card-text">State : {props.state}</p>
                    <p className="card-text">Pin code : {props.pinCode}</p>
                    <p className="card-text">Programming Skills : {props.items.toString()}</p>
                </div>
            </div>
        </React.Fragment>
}

export default Card;