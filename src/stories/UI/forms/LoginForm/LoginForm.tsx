import {C3Button} from "../../components/Button/Button";
import {C3Input} from "../../components/Input/Input";
import './login-form.scss'

interface C3LoginFormProps {
    fixedLabel?: boolean,
    buttonText?: string,
    forgotPassword?: boolean,
    title?: string,
    // @ts-ignore
    input: object,

};

export const C3LoginForm = ({
                                fixedLabel = false,
                                title = 'Login',
                                buttonText = 'Login',
                                forgotPassword = true,
                                ...props

                            }: C3LoginFormProps) => {
    let formData = {};
    let prop = props;
    const handleSubmit = () => {

        [...Object.values(props).map((prop, index) => {
            const key = prop[2];
            // @ts-ignore
            const value = document.getElementById(prop[3]).value;
        })]
    }
    return (
        <div className={'form-container'}>
            <form onSubmit={handleSubmit} className={'form'}>
                <div className={'form--title'}>{title}</div>
                <div className={'form--input'}>
                    {
                        Object.values(prop).length > 0 ?
                            <>
                                {
                                    [...Object.values(props).map((inputArea, index) => {
                                        return <div className={'input-area'}>
                                            {
                                                [...inputArea].map((input, index) => {
                                                    return (fixedLabel) ? <C3Input
                                                            labelFixed
                                                            id={input[3]}
                                                            label={input[0]}
                                                            placeHolder={input[1]}
                                                            type={input[3]}
                                                            key={index}
                                                        /> :
                                                        <C3Input
                                                            id={input[3]}
                                                            label={input[0]}
                                                            placeHolder={input[1]}
                                                            type={input[3]}
                                                            key={index}
                                                        />
                                                })
                                            }
                                        </div>
                                    })]

                                }
                            </> : <></>

                    }
                </div>
                {forgotPassword ? <div className={'forgot-password'}>
                    <a>
                        <span>I Forgot My Password</span>
                    </a>
                </div> : <></>}

                <div className={'form--submit'}>
                    <C3Button type={'submit'} onClick={handleSubmit} label={buttonText} primary/>
                </div>
            </form>
        </div>

    );
}