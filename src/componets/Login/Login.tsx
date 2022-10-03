import React from 'react';
import reduxForm from "redux-form";

export const Login = () => {
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm/>
        </div>
    );
};


export const LoginForm = () => {
    return (
        <form>
            <div>
                <input placeholder={'Login'}/>
            </div>
            <div>
                <input placeholder={'Password'}/>
            </div>
            <div>
                <input type={'checkbox'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
