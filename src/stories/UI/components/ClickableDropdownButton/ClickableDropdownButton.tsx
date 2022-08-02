import { C3Button } from "../Button/Button"
import './clickable-dropdown-button.scss'
interface C3ClickableDropdownButtonProps {
    children?: any,
    label?: string,
    size?: string,
    iconPosition?: string,
    primary?:boolean,
    secondary?:boolean,
    tertiary?:boolean,
    danger?:boolean,
    success?:boolean,
    text?:boolean,
}
export const C3ClickableDropdownButton = ({
                                              children = undefined,
                                              iconPosition = 'right',
                                              size = 'small',
                                              label = 'Clickable Dropdown',
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
    return(
        <div className={'bbm-rcl-clickable-dropdown'}>
            <C3Button className={[`bbm-rcl-clickable-dropdown--button --${iconPosition}`,variantClasses].join(' ')} icon={'arrow_down'}
                      size={size}>{label}
            </C3Button>
            <div className={`bbm-rcl-clickable-dropdown--list --${listVariants}`}>
                {children}
            </div>
        </div>
    )
}