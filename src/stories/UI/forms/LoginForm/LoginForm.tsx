import {C3Button} from "../../components/Button/Button";
import {C3Input} from "../../components/Input/Input";
import './login-form.scss'

interface C3LoginFormProps {
    // @ts-ignore
    input: IntrinsicAttributes & C3LoginFormProps,


};

export const C3LoginForm = ({
                                ...props
                            }: C3LoginFormProps) => {
    let formData = {};
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
                <div className={'form--title'}>Login</div>
                <div className={'form--input'}>
                    {
                        [...Object.values(props)].map((prop, index) => {
                            return (
                                <C3Input id={prop[3]} label={prop[0]} placeHolder={prop[1]} type={prop[3]} key={index}/>
                            )
                        })
                    }
                </div>
                <div className={'form--submit'}>
                    <C3Button type={'submit'} onClick={handleSubmit} label={'Login'} primary/>
                </div>
            </form>
        </div>

    );
}