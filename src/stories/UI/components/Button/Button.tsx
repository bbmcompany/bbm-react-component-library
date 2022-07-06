import './button.scss'

interface ButtonProps {
    size?: 'small' | 'medium' | 'large';
    primary?: boolean,
    children?: string,
    secondary?: boolean,
    tertiary?: boolean,
    text?: boolean
    danger?: boolean,
    success?: boolean,
    iconButton?: boolean,
    outline?: boolean,
    transparent?: boolean,
    disabled?: boolean;
    progress?: boolean;
    isProgressText?: boolean;
    progressText?: string;
    label?: string;
    target?: string;
    display?: string;
    maxWidth?: number;
    icon?: string;
}


export const Button = ({
                           disabled = false,
                           progress = false,
                           isProgressText = false,
                           size = 'medium',
                           label = 'Button',
                           target = '_self',
                           display = ' ',
                           icon = ' ',
                           iconButton = false,
                           children = label,
                           progressText = 'Saving...',
                           maxWidth = 0,
                           ...props
                       }: ButtonProps) => {
    const isDisabled = disabled ? 'bbm-rcl-button--disabled' : ' ';
    let isProgress = progress ? 'bbm-rcl-button--progress' : ' ';
    let variantClasses = '';
    if (isProgressText) {
        isProgress = 'bbm-rcl-button--progress';
        children = progressText;
    }
    if(iconButton && icon == ' ') {
        icon = 'academy';
    }

    for (const [key, value] of Object.entries(props)) {
        if (value) {
            variantClasses += ` bbm-rcl-button--${key}`;
        }
    }

    return (
        <button
            style={{display: display, maxWidth: maxWidth == 0 ? "none" : maxWidth}}
            aria-disabled={disabled}
            type={'button'}
            formTarget={target}
            className={['bbm-rcl-button', `bbm-rcl-button--${size}`, isDisabled, isProgress, variantClasses].join(' ')}
        >
            {icon == ' ' ? <>
                <div className={"text"}>
                    {children}
                </div>
            </> : <div className={'icon-container'}>
                <div className={'icon'}>
                    <div className={`icon--${icon}`}></div>
                </div>
                <div className={iconButton ? 'secret-text' : 'text' }>
                    {children}
                </div>
            </div>}
        </button>
    )
}