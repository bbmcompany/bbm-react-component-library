import './icon.scss'

interface C3IconProps {

    size?: 'small' | 'medium' | 'large' | 'x-large' | '2x-large' | '3x-large';
    icon?: string;
    width?: number;
};

export const C3Icon = ({
                         size = 'medium',
                         icon = 'academy',
                         width = 0,
                     }: C3IconProps) => {
    return (
        <div

            className={'bbm-rcl-icon'}>
            <div
                style={{width: width == 0 ? "none" : `${width}px`, height: width == 0 ? 'none' : `${width}px`}}
                className={`bbm-rcl-icon--${size} bbm-rcl-icon--${icon}`}/>
        </div>
    )
}