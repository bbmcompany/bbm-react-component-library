import {C3Button} from "../Button/Button"
import './tooltip.scss';

interface C3TooltipProps {
    transparent?: boolean;
    text?: string;
    icon?: string;
    size?: string;
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    error?: boolean;
    warning?: boolean;
    success?: boolean;
    info?: boolean;
    orange?: boolean;
    grey?: boolean;
    variant?: string;
    display?: string;
    className?: string,
}

export const C3Tooltip = ({
                              transparent = false,
                              icon = 'alert',
                              size = 's',
                              text = 'C3PO Default',
                              variant = 'primary',
                              display = ' ',
                              className = ' ',
                              ...props
                          }: C3TooltipProps) => {

    let variantClasses = '';
    for (const [key, value] of Object.entries(props)) {
        if (value) {
            variantClasses += ` bbm-rcl-button--${key}`;
        }
    }
    console.log(variantClasses)
    if (text == ' ') {
        text = 'C3PO Default';
    }

    return (
        <div className={['bbm-rcl-tooltip'].join(' ')}>
            {transparent ?
                <div className={`bbm-rcl-tooltip--with-icon --${display}`}>
                    <C3Button iconButton transparent icon={icon} size={size}
                              className={[className, variantClasses].join(' ')}/>
                    <span
                        className={[`bbm-rcl-tooltip--with-icon--text --${size} --${display}`].join(' ')}>{text}</span>
                </div>
                :
                <div className={`bbm-rcl-tooltip--with-icon --${display}`}>
                    <C3Button variant={variant} iconButton icon={icon} size={size}
                              className={[className, variantClasses].join(' ')}/>
                    <span
                        className={[`bbm-rcl-tooltip--with-icon--text --${size} --${display}`].join(' ')}>{text}</span>
                </div>}
        </div>
    )
}