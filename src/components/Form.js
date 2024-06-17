//  https://stackoverflow.com/questions/38937915/serialize-form-data-in-react-js-to-submit-post-request
// https://www.w3schools.com/react/react_forms.asp

import { useState } from "react"

export default function Form({fields}) {
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        console.log(event.target);
        console.log(event.target[0]);
        console.log(event.target[2]);
        // alert(inputs);
    }

    return <form onSubmit={handleSubmit}>
        {fields.map((field, idx) => <div key={idx}>{field}</div>)}
    </form>
};
