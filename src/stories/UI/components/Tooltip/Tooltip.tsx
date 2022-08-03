import {C3Button} from "../Button/Button"
import './tooltip.scss';

interface C3TooltipProps {
    transparent?: boolean;
    text?: string;
    icon?: string;
    size?: string;
    variant?: string;
    display?: string;
    className?: string,
}

export const C3Tooltip = ({
                              transparent = false,
                              icon = 'alert',
                              size = 'small',
                              text = 'C3PO Default',
                              variant = 'primary',
                              display = ' ',
                              className = ' ',
                              ...props
                          }: C3TooltipProps) => {

    if (text == ' ') {
        text = 'C3PO Default';
    }

    return (
        <div className={['bbm-rcl-tooltip', className].join(' ')}>
            {transparent ?
                <div className={`bbm-rcl-tooltip--with-icon --${display}`}>
                    <C3Button primary iconButton transparent icon={icon} size={size}/>
                    <span
                        className={[`bbm-rcl-tooltip--with-icon--text --${size} --${display}`].join(' ')}>{text}</span>
                </div>
                :
                <div className={`bbm-rcl-tooltip--with-icon --${display}`}>
                    <C3Button variant={variant} primary iconButton icon={icon} size={size}/>
                    <span
                        className={[`bbm-rcl-tooltip--with-icon--text --${size} --${display}`].join(' ')}>{text}</span>
                </div>}
        </div>
    )
}