import './button.scss'

interface ButtonProps {
    primary?:boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    borderRadius?: number;
    onclick?: () => void;
}

export const Button = ({
    primary = false,
    size = 'medium',
    borderRadius = 4,
    backgroundColor,
    label,
    ...props
}: ButtonProps) => {
    const mode = primary ? 'bbm-rcl-button--primary' : 'bbm-rcl-button--secondary';

    return (
        <button
        type={'button'}
        className={['bbm-rcl-button', `bbm-rcl-button--${size}`, mode].join(' ')}
        style={{backgroundColor: backgroundColor, borderRadius: borderRadius}}
        {...props}
        >{label}</button>
    )
}