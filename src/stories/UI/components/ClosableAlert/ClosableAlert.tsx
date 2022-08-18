import {C3Button} from '../Button/Button';
import {C3Icon} from '../Icon/Icon';
import './closable-alert.scss'

interface C3ClosableAlertProps {
    text?: string;
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    orange?: boolean;
    grey?: boolean;
    error?: boolean;
    success?: boolean;
    warning?: boolean;
    info?: boolean;
    icon?: string;
    // @ts-ignore
    children?: IntrinsicAttributes & C3ClosableAlertProps;
    className?: string;
}

export const C3ClosableAlert = ({
                                    text = 'BBM React Component Libray Alert',
                                    icon = ' ',
                                    children = undefined,
                                    className = ' ',
                                    ...props
                                }: C3ClosableAlertProps) => {

    const closeAlert = () => {
        const alert = document.getElementById('bbm-rcl-closable-alert');
        alert!.style.display = 'none';
    }
    let iconClass = ' '
    if (children != undefined) {
        text = children;
    }
    let variantClasses = ' ';
    for (const [key, value] of Object.entries(props)) {
        if (value) {
            iconClass = key;
            variantClasses += ` bbm-rcl-closable-alert--${key}`;
        }

    }
    return (
        <div id={'bbm-rcl-closable-alert'} className={['bbm-rcl-closable-alert', variantClasses, className].join(' ')}>
            {
                icon == ' ' ?
                    <p>{text}</p>
                    :
                    <div className={'bbm-rcl-closable-alert--icon-group'}>
                        <C3Icon className={`bbm-rcl-icon--${iconClass}`} icon={icon}></C3Icon>
                        <p>{text}</p>
                    </div>
            }

            <C3Button iconButton transparent primary icon={'close'} onClick={() => closeAlert()}/>
        </div>
    )
}