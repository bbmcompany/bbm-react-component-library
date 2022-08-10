import './switch.scss'

interface C3SwitchProps {
    size?: string,
    white?: boolean,
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    error?: boolean;
    warning?: boolean;
    success?: boolean;
    info?: boolean;
    orange?: boolean;
    grey?: boolean;
    className?: string,

}

export const C3Switch = ({
                             size = 'm',
                             className = ' ',
                             ...props
                         }: C3SwitchProps) => {
    let variantClasses = ' ';
    for (const [key, value] of Object.entries(props)) {
        if (value) {
            variantClasses += ` bbm-rcl-switch--${key}`;
        }
    }
    return (
        <label className={['bbm-rcl-switch', `--${size}`, variantClasses, className].join(' ')}>
            <input type={'checkbox'}/>
            <span className={'slider'}/>
        </label>
    )
}