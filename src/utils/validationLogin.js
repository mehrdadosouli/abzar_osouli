export const validationLogin = (data,type) => {
    const emailvalid = /\w{6}.+@(gmail|email)\.com/g;
    const errors = {};

    if (!data.inputEmail) {
        errors.email = 'لطفاً ایمیل را وارد کنید';
    } else if (!emailvalid.test(data.inputEmail)) {
        errors.email = 'ایمیل معتبر نیست یا کمتر از ۶ کاراکتر است';
    } else {
        delete errors.email;
    }

    if (!data.inputPassword) {
        errors.password = 'لطفاً رمز عبور را وارد کنید';
    } else if (data.inputPassword.length < 6) {
        errors.password = 'رمز عبور باید حداقل ۶ کاراکتر باشد';
    } else {
        delete errors.password;
    }

    if (type === 'signup') {
        if (!data.inputName) {
            errors.name = 'لطفاً نام کاربری را وارد کنید';
        } else {
            delete errors.name;
        }

        if (!data.inputConfirm) {
            errors.comfirm = 'لطفاً تأیید رمز عبور را وارد کنید';
        } else if (data.inputConfirm !== data.inputPassword) {
            errors.comfirm = 'رمز عبور و تکرار آن یکسان نیستند';
        } else {
            delete errors.comfirm;
        }

        if (!data.inputCheckbox) {
            errors.checkbox = 'لطفاً شرایط را بپذیرید';
        } else {
            delete errors.checkbox;
        }
    }

    return errors;
}
