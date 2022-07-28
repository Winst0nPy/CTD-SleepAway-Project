export const handleAuthRegisterFormError = (user) => {
    let response = false;
    const error = document.getElementsByClassName("errorReg");
    if (user.password.lenght < 7) {
        error[0].classList.remove("hidden");        
    }else if (user.password !== user.password2) {
        error[1].classList.remove("hidden");
    } else {
        response = true;
    }
    return response;
};            
