import React from "react";

function InputField(props) {
    return(
        <input type={props.type} placeholder = {props.name} onChange={props.onChange}/>
    );
}
export default InputField;