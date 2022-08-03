import './switch.scss'

interface C3SwitchProps {
    size?: string,
    primary?: boolean,
    secondary?: boolean,
    tertiary?: boolean,
    danger?: boolean,
    success?: boolean,
    className?: string,

}

export const C3Switch = ({
                             size = 'medium',
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