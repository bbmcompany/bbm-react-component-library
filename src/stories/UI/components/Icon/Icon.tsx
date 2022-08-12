import './icon.scss'

interface C3IconProps {
    size?: string;
    icon?: string;
    width?: number;
    white?:boolean;
    black?:boolean;
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    error?: boolean;
    warning?: boolean;
    success?: boolean;
    info?: boolean;
    orange?: boolean;
    grey?: boolean;
    className?: string;
};

export const C3Icon = ({
                           size = 's',
                           icon = 'academy',
                           className = ' ',
                           width = 0,
                           ...props
                       }: C3IconProps) => {

    let variantClasses = '';
    for (const [key, value] of Object.entries(props)) {
        if (value) {
            variantClasses += ` bbm-rcl-icon--${key}`;
        }
    }
    return (
        <div
            className={['bbm-rcl-icon', className].join(' ')}>
            <div
                style={{width: width == 0 ? "none" : `${width}px`, height: width == 0 ? 'none' : `${width}px`}}
                className={[`bbm-rcl-icon--${size} bbm-rcl-icon--${icon}`, variantClasses ,className].join(' ')}/>
        </div>
    )
}