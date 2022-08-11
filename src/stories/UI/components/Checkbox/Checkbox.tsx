import './checkbox.scss'

interface C3CheckboxProps {
    defaultChecked?: boolean;
    disabled?: boolean;
    primary?: boolean,
    secondary?: boolean,
    tertiary?: boolean,
    error?: boolean,
    success?: boolean,
    warning?:boolean,
    size?: string;
    className?: string,
}

export const C3Checkbox = ({
                               defaultChecked = false,
                               disabled = false,
                               size = 's',
                               className = ' ',
                               ...props
                           }: C3CheckboxProps) => {

    let variants = '';
    for (const [key, value] of Object.entries(props)) {
        if (value) {
            variants += ` bbm-rcl-checkbox--${key}`;
        }
    }

    return (
        <div className={['bbm-rcl-checkbox', className].join(' ')}>
            {
                defaultChecked ? <input className={[` bbm-rcl-checkbox--${size}`, variants].join('')} type={'checkbox'}
                                        defaultChecked/> :
                    disabled ? <input className={([` bbm-rcl-checkbox--${size}`, variants].join(''))} type={'checkbox'}
                                      disabled/> :
                        <input className={[` bbm-rcl-checkbox--${size}`, variants].join('')} type={'checkbox'}></input>
            }
        </div>

    )
}