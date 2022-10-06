const validation = (values) => {

    let errors={};
    
    if (!values.fullname){
        errors.fullname="Name is required";
    }
    if (!values.email){
        errors.email="Email is required";
    } else if(!/\S+@\S+\.\S/.test(values.email)){
        errors.email="Email is invalid";
    }
    if (!values.token){
        errors.token="Token is required";
    }
    if (!values.password){
        errors.password="Password is required";
    } else if (values.password.length <5){
        errors.password="Pass must be more than 5 characters";
    }

  return errors;

}

export default validation;