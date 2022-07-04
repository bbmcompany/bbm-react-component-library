import './button.scss'

interface ButtonProps {
    variant?: 'primary' | 'outline' | 'danger' | 'success';
    border?: boolean;
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    progress?: boolean;
    label?: string;
    onclick?: () => void;
}

export const Button = ({
                           variant = 'primary',
                           disabled = false,
                           border = false,
                           progress = false,
                           size = 'medium',
                           label,
                           ...props
                       }: ButtonProps) => {
    const isDisabled = disabled ? 'bbm-rcl-button--disabled' : ' ';
    const isProgress = progress ? 'bbm-rcl-button--progress' : ' ';
    const isBorder = !border ? 'bbm-rcl-button--border' : ' ';
    return (
        <button
            aria-disabled={disabled}
            type={'button'}
            className={['bbm-rcl-button', `bbm-rcl-button--${size}`, `bbm-rcl-button--${variant}`, isDisabled, isProgress, isBorder].join(' ')}
            {...props}
        >{label}</button>
    )
}