import './button.scss'
import {object} from "prop-types";

interface ButtonProps {
    size?: 'small' | 'medium' | 'large';
    primary?: boolean,
    children?: string,
    secondary?: boolean,
    tertiary?: boolean,
    text?: boolean
    danger?: boolean,
    success?: boolean,
    outline?: boolean,
    transparent?: boolean,
    disabled?: boolean;
    progress?: boolean;
    isProgressText?: boolean;
    progressText?: string;
    label?: string;
    target?: string;
}


export const Button = ({
                           disabled = false,
                           progress = false,
                           isProgressText = false,
                           size = 'medium',
                           label = 'Button',
                           target = '_self',
                           children = label,
                           progressText = 'Saving...',
                           ...props
                       }: ButtonProps) => {
    const isDisabled = disabled ? 'bbm-rcl-button--disabled' : ' ';
    let isProgress = progress ? 'bbm-rcl-button--progress' : ' ';
    let variantClasses = '';

    if (isProgressText) {
        isProgress = 'bbm-rcl-button--progress';
        label = progressText;
    }

    for (const [key, value] of Object.entries(props)) {
        if (value) {
            variantClasses += ` bbm-rcl-button--${key}`;
        }
    }


    return (
        <button
            aria-disabled={disabled}
            type={'button'}
            formTarget={target}
            className={['bbm-rcl-button', `bbm-rcl-button--${size}`, isDisabled, isProgress, variantClasses].join(' ')}
        >{children}</button>
    )
}