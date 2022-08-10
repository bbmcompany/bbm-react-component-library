import {C3Button} from '../Button/Button';
import './dropdown-button.scss';

interface C3DropdownButtonProps {
    children?: any,
    label?: string,
    size?: string,
    icon?: boolean,
    iconPosition?: string,
    primary?: boolean,
    secondary?: boolean,
    tertiary?: boolean,
    error?: boolean,
    warning?:boolean,
    success?:boolean,
    info?:boolean,
    orange?:boolean,
    grey?:boolean,
    text?: boolean,
    className?: string,
}

export const C3DropdownButton = ({
                                     children = undefined,
                                     iconPosition = 'right',
                                     size = 'm',
                                     icon = true,
                                     label = 'Dropdown Menu',
                                     className = ' ',
                                     ...props
                                 }: C3DropdownButtonProps) => {

    let variantClasses = ' ';
    let listVariants = ' ';
    for (const [key, value] of Object.entries(props)) {
        if (value) {
            variantClasses += ` bbm-rcl-button--${key}`;
            listVariants = key;
        }
    }
    return (
            <div className={['bbm-rcl-dropdown', className].join(' ')}>
                {icon ? <C3Button className={[`bbm-rcl-dropdown--button --${iconPosition}`, variantClasses].join(' ')}
                                  icon={'arrow_down'}
                                  size={size}>{label}</C3Button>
                    :
                    <C3Button className={[`bbm-rcl-dropdown--button --${iconPosition}`, variantClasses, 'b-m-5'].join(' ')}
                              size={size}>{label}</C3Button>
                }

                <div className={[`bbm-rcl-dropdown--list --${listVariants}`, 'b-border-4', className].join(' ')}>
                    {children}
                </div>
            </div>
    )
}