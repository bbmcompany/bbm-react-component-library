import {C3Button} from '../Button/Button';
import './dropdown-button.scss';

interface C3DropdownButtonProps {
    children?: any,
    label?: string,
    size?: string,
    iconPosition?: string,
    primary?: boolean,
    secondary?: boolean,
    tertiary?: boolean,
    danger?: boolean,
    success?: boolean,
    text?: boolean,
    className?: string,
}

export const C3DropdownButton = ({
                                     children = undefined,
                                     iconPosition = 'right',
                                     size = 'medium',
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
            <C3Button className={[`bbm-rcl-dropdown--button --${iconPosition}`, variantClasses].join(' ')}
                      icon={'arrow_down'}
                      size={size}>{label}</C3Button>
            <div className={`bbm-rcl-dropdown--list --${listVariants}`}>
                {children}
            </div>
        </div>
    )
}