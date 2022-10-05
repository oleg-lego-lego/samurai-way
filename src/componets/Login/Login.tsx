import React, {FC} from 'react';
import {reduxForm, InjectedFormProps, Field} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';
import {RootStoreType} from "../../redux/redux-store";
import s from "./../common/FormsControls/FormsControls.module.css"

type LoginFormPropsType = {

}

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

type MapStateToPropsType = {
    isAuth: boolean
}

type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType;



export const Login: FC<LoginPropsType> = (props) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};


export const LoginForm: FC<InjectedFormProps<FormDataType, LoginPropsType> & LoginPropsType > = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} type={'password'} component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input}/> remember me
            </div>
            {props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType, any>({form: 'login'})(LoginForm)


const mapStateToProps = (state: RootStoreType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

export const LoginContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStoreType>(mapStateToProps,  {login})(Login)