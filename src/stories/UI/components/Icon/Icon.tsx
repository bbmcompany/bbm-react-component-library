import './icon.scss'

interface IconProps {

    size?: 'small' | 'medium' | 'large' | 'x-large' | '2x-large' | '3x-large';
    icon?: string;

};

export const Icon = ({
                         size = 'medium',
                         icon = 'academy',

                     }: IconProps) => {
    return (
        <div className={'bbm-rcl-icon'}>
            <div className={`bbm-rcl-icon--${size} bbm-rcl-icon--${icon}`}/>
        </div>
    )
}