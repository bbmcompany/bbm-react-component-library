import './input.scss'

interface C3InputProps {
    type?: string;
    minLenght?: number;
    maxLenght?: number;
    label?: string;
    placeHolder?: string;
    required?: boolean;
    labelFixed?: boolean;
}

export const C3Input = ({
                            minLenght = 1,
                            maxLenght = 25,
                            label = ' ',
                            placeHolder = ' ',
                            required = false,
                            labelFixed = false,
                            type = 'text',
                            ...props
                        }: C3InputProps) => {
    let controlClass = 'bbm-rcl-input';

    if(labelFixed || label == ' ') {
        controlClass += '-label-fixed';
    }

    return (
        <div className={'bbm-rcl-input-container'}>
                <div className={controlClass}>
                    <label className={`bbm-rcl-input-label--${label}`}>{label}</label>
                    <input
                        type={type}
                        minLength={minLenght}
                        maxLength={maxLenght}
                        placeholder={placeHolder}
                        required={required}
                    />
                </div>
        </div>
    );


}

