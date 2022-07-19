import './input.scss'
import React, {useState} from 'react';

interface C3InputProps {
    type?: string;
    minLenght?: number;
    maxLenght?: number;
    label?: string;
    placeHolder?: string;
    required?: boolean;
    labelFixed?: boolean;
}

export const C3Input = ({
                            minLenght = 1,
                            maxLenght = 25,
                            label = ' ',
                            placeHolder = ' ',
                            required = false,
                            labelFixed = false,
                            type = 'text',
                            ...props
                        }: C3InputProps) => {
    const [value, setValue] = useState('');
    let controlClass = 'bbm-rcl-input';
    let inputHasValue = 'bbm-rcl-input';
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }
    if (value.length > 0) {
        inputHasValue += '-has-value';
    }

    if (labelFixed || label == ' ') {
        controlClass += '-label-fixed';
    }

    console.log(value)
    return (
        <div  className={'bbm-rcl-input-container'}>
            <div className={[controlClass, inputHasValue].join(' ')}>
                <label className={`bbm-rcl-input-label--${label}`}>{label}</label>
                <input
                    value={value}
                    onChange={inputHandler}
                    type={type}
                    minLength={minLenght}
                    maxLength={maxLenght}
                    placeholder={placeHolder}
                    required={required}
                />
            </div>
        </div>
    );


}

