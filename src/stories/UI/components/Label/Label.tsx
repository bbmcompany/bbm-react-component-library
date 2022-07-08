import './label.scss'
import {Icon} from "../Icon/Icon";

interface LabelProps {
    size?: string;
    children?: string;
    color?: string;
    options?: string;
    backgroundColor?: string;
    icon?: string;
    iconLabel?: boolean;
}

export const Label = ({
                          size = 'medium',
                          children = ' ',
                          color = ' ',
                          options = ' ',
                          backgroundColor = ' ',
                          icon = ' ',
                          iconLabel = false,
                          ...props
                      }: LabelProps) => {
    if (iconLabel && icon == ' ') {
        icon = 'academy';
    }

    return (
        <div className={'bbm-rcl-label'}>
             <span
                 className={[`bbm-rcl-label--${options}`, `bbm-rcl-label--${size}`].join(' ')}
                 style={{color: color, backgroundColor: backgroundColor}}
             >
    {icon == ' ' ? <>
        <div className={"text"}>
            {children}
        </div>
    </> : <div className={'icon-container'}>
        <Icon icon={icon}></Icon>
        <div className={iconLabel ? 'secret-text' : 'text'}>
            {children}
        </div>
    </div>}
        </span>

        </div>
    );
}