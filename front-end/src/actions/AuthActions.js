// An action is a JS function that returns an object. That object MUST have at least a property of type
import axios from 'axios';

export default function (formData) {
    // console.log("auth action is running")
    console.log(formData);
    var axiosPromise = axios({
        url: `${window.apiHost}/register`,
        method:"POST", 
        data: formData
    })
    return{
        type: "AUTH_ACTION",
        payload: axiosPromise
        // redux-promise middleware will kick in because 
        // payload value is a promise . redux promise will hold up the dispatch
    }
}
