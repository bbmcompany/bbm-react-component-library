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
    primary?: boolean;
    secondary?:boolean;
    tertiary?:boolean;
    error?:boolean;
    warning?:boolean;
    success?:boolean;
    info?:boolean;
    orange?:boolean;
    grey?:boolean;
    id?: string;
    className?: string;
}

export const C3Input = ({
                            minLenght = 1,
                            maxLenght = 25,
                            label = ' ',
                            placeHolder = ' ',
                            required = false,
                            labelFixed = false,
                            type = 'text',
                            id = 'input',
                            className = ' ',
                            ...props
                        }: C3InputProps) => {

    let controlClass = 'bbm-rcl-input';
    let inputHasValue = ' ';
    let variantClasses = ' ';
    const [value, setValue] = useState('');

    for (const [key, value] of Object.entries(props)) {
        if (value) {
            variantClasses += ` bbm-rcl-input--${key}`;
        }
    }

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }
    if (value.length > 0) {
        inputHasValue += 'bbm-rcl-input-has-value';
    }

    if (labelFixed || label == ' ' || (type == 'date' || type == 'datetime-local'
        || type == 'file' || type == 'month' || type == 'week' || type == 'range' || type == 'time')) {
        controlClass += '-label-fixed';
    }

    return (
        <div className={['bbm-rcl-input-container', className].join(' ')}>
            <div className={[controlClass, inputHasValue , variantClasses].join(' ')}>
                <label className={`bbm-rcl-input-label--${label}`}>{label}</label>
                <input
                    className={[className, 'b-border-4'].join(' ')}
                    id={id}
                    name={label}
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

