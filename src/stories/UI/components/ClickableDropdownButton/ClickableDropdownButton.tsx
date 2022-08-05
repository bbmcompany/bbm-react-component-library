import {C3Button} from "../Button/Button"
import './clickable-dropdown-button.scss'

interface C3ClickableDropdownButtonProps {
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

export const C3ClickableDropdownButton = ({
                                              children = undefined,
                                              iconPosition = 'right',
                                              size = 'medium',
                                              label = 'Clickable Dropdown',
                                              className = ' ',
                                              ...props

                                          }: C3ClickableDropdownButtonProps) => {
    let variantClasses = ' ';
    let listVariants = ' ';
    for (const [key, value] of Object.entries(props)) {
        if (value) {
            variantClasses += ` bbm-rcl-button--${key}`;
            listVariants = key;
        }
    }
    return (
        <div className={['bbm-rcl-clickable-dropdown', className].join(' ')}>
            <C3Button className={[`bbm-rcl-clickable-dropdown--button --${iconPosition}`, variantClasses].join(' ')}
                      icon={'arrow_down'}
                      size={size}>{label}
            </C3Button>
            <div className={[`bbm-rcl-clickable-dropdown--list --${listVariants}`, 'b-border-4'].join(' ')}>
                {children}
            </div>
        </div>
    )
}