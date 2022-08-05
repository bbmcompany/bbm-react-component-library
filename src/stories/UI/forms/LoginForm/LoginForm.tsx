import {C3Button} from "../../components/Button/Button";
import {C3Input} from "../../components/Input/Input";
import './login-form.scss'

interface C3LoginFormProps {
    fixedLabel?: boolean,
    buttonText?: string,
    forgotPassword?: boolean,
    title?: string,
    formData?: object,
    inputArea1?: any,
    inputArea2?: any,
    inputArea3?: any,
};

export const C3LoginForm = ({
                                fixedLabel = false,
                                title = 'Login',
                                buttonText = 'Login',
                                forgotPassword = true,
                                formData = {},
                                ...props

                            }: C3LoginFormProps) => {
    const handleSubmit = (e: any) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        [...Object.values(props).map((prop, index) => {
            let value: string = (document.getElementById(prop[0][2]) as HTMLInputElement).value;
            // @ts-ignore
            formData[prop[0][2]] = value;
        })]
        return formData;
    }
    return (
        <div className={'form-container'}>
            <form onSubmit={(e) => handleSubmit(e)} className={'form'}>
                <div className={'form--title'}>{title}</div>
                <div className={'form--input'}>
                    {
                        Object.values(props).length > 0 ?
                            <>
                                {
                                    [...Object.values(props).map((inputArea, index) => {
                                        return <div key={index} className={'input-area'}>
                                            {
                                                [...inputArea].map((input, index) => {
                                                    return (fixedLabel) ? <C3Input
                                                            labelFixed
                                                            id={input[2]}
                                                            label={input[0]}
                                                            placeHolder={input[1]}
                                                            type={input[3]}
                                                            key={index}
                                                        /> :
                                                        <C3Input
                                                            id={input[2]}
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
                    <C3Button type={'submit'} onClick={handleSubmit} primary>{buttonText}</C3Button>
                </div>
            </form>
        </div>

    );
}


