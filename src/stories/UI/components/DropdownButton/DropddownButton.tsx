import {C3Button} from '../Button/Button';
import './dropdown-button.scss';

interface C3DropdownButtonProps {
    children?: any,
    label?: string,
    size?: string,
    iconPosition?: string,
}

export const C3DropdownButton = ({
                                     children = undefined,
                                     iconPosition = 'right',
                                     size = 'medium',
                                     label = 'Dropdown Menu',
                                 }: C3DropdownButtonProps) => {
    return (
        <div className={'bbm-rcl-dropdown'}>
            <C3Button className={`bbm-rcl-dropdown--button --${iconPosition}`} icon={'arrow_down'} primary size={size}>{label}</C3Button>
            <div className={'bbm-rcl-dropdown--list'}>
                {children}
            </div>
        </div>
    )
}