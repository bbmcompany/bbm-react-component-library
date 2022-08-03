import React, {useState} from "react"
import './radio.scss';

interface C3RadioProps {
    children?: string;
    inputValue?: string;
    size?: string;
    labelPlacement?: string;
    className?: string;
}

export const C3Radio = ({
                            children = ' ',
                            inputValue = 'default',
                            size = 'medium',
                            labelPlacement = 'start',
                            className = ' ',
                            ...props
                        }: C3RadioProps) => {

    const [value, setValue] = useState<String>();
    const inputHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
        await setValue(event.target.value);

    }
    return (
        <div className={['bbm-rcl-radio', className].join(' ')}>
            {
                children == ' ' ?
                    <input
                        className={[`bbm-rcl-radio--${size}`].join('')}
                        onChange={(event) => inputHandler(event)}
                        type={'radio'} value={inputValue}/>
                    :
                    <div
                        className={[`bbm-rcl-radio--${size}`, 'bbm-rcl-radio--group', `bbm-rcl-radio--${labelPlacement}`].join(' ')}>
                        <label>{children}</label>
                        <input
                            onChange={(event) => inputHandler(event)}
                            type={'radio'} value={children.toLowerCase()}/>
                    </div>

            }
        </div>
    )
}