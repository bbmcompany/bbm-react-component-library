import {C3Button} from "../Button/Button"
import {C3Icon} from "../Icon/Icon";
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
    className?: string,
}

export const C3Tooltip = ({
                              transparent = false,
                              icon = 'alert',
                              size = 's',
                              text = 'C3PO Default',
                              variant = 'primary',
                              className = ' ',
                              ...props
                          }: C3TooltipProps) => {

    let variantButtonClasses = '';
    let variantIconClasses = '';
    for (const [key, value] of Object.entries(props)) {
        if (value) {
            variantButtonClasses += ` bbm-rcl-button--${key}`;
            variantIconClasses += ` bbm-rcl-icon--${key}`;
        }
    }
    if (text == ' ') {
        text = 'C3PO Default';
    }

    return (
        <div className={['bbm-rcl-tooltip'].join(' ')}>
            {transparent ?
                <div className={`bbm-rcl-tooltip--with-icon`}>
                    <C3Icon icon={icon} size={size}
                            className={[className, variantIconClasses, 'b-p-3'].join(' ')}/>
                    <span
                        className={[`bbm-rcl-tooltip--with-icon--text --${size}`].join(' ')}>{text}</span>
                </div>
                :
                <div className={`bbm-rcl-tooltip--with-icon`}>
                    <C3Button variant={variant} iconButton icon={icon} size={size}
                              className={[className, variantButtonClasses].join(' ')}/>
                    <span
                        className={[`bbm-rcl-tooltip--with-icon--text --${size}`].join(' ')}>{text}</span>
                </div>}
        </div>
    )
}