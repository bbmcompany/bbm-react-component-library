import './label.scss'
import {C3Icon} from "../Icon/Icon";

interface C3LabelProps {
    size?: string;
    children?: string;
    color?: string;
    options?: string;
    backgroundColor?: string;
    icon?: string;
    iconLabel?: boolean;
    className?: string;
}

export const C3Label = ({
                            size = 'medium',
                            children = ' ',
                            color = ' ',
                            options = ' ',
                            backgroundColor = ' ',
                            icon = ' ',
                            className = ' ',
                            iconLabel = false,
                            ...props
                        }: C3LabelProps) => {
    if (iconLabel && icon == ' ') {
        icon = 'academy';
    }

    return (
        <div className={['bbm-rcl-label', className].join(' ')}>
             <span
                 className={[`bbm-rcl-label--${options}`, `bbm-rcl-label--${size}`].join(' ')}
                 style={{color: color, backgroundColor: backgroundColor}}
             >
    {icon == ' ' ? <>
        <div className={"text"}>
            {children}
        </div>
    </> : <div className={'icon-container'}>
        <C3Icon icon={icon}></C3Icon>
        <div className={iconLabel ? 'secret-text' : 'text'}>
            {children}
        </div>
    </div>}
        </span>

        </div>
    );
}