import { C3Icon } from '../Icon/Icon';
import './progress-indicator.scss'

interface C3ProgressIndicatorProps {
    white?: boolean,
    black?: boolean,
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    error?: boolean;
    warning?: boolean;
    success?: boolean;
    info?: boolean;
    orange?: boolean;
    grey?: boolean;
    max?: number;
    value?: number;
    isError?: boolean;
    errorMessage?: string;
    title?: string;
    percent?: boolean;
    size?: string;
    className?: string;
}

export const C3ProgressIndicator = ({
                                        max = 0,
                                        value = 0,
                                        percent = false,
                                        isError = false,
                                        errorMessage = 'C3PO failed',
                                        size = 's',
                                        title = ' ',
                                        className = ' ',
                                        ...props
                                    }: C3ProgressIndicatorProps) => {
    if(value > max) {
        value = max;
    }
    let cssProp = {}
    // @ts-ignore
    cssProp['--max'] = max;
    // @ts-ignore
    cssProp['--value'] = value;
    let variantClasses = ' ';
    for (const [key, value] of Object.entries(props)) {
        if (value) {
            variantClasses += ` bbm-rcl-progress-indicator--${key}`;
        }
    }
    return (
        <div className={['bbm-rcl-progress-indicator', variantClasses, className].join(' ')}>
            <div className={'bbm-rcl-progress-indicator--title-group'}>
                {isError ?
                    <>
                        <C3Icon icon={'exclamation'} error/>
                        <p className={'error'}>{errorMessage}</p>
                    </>
                    :
                    <>
                        <p>{title}</p>
                        {
                            percent ?
                                <b>{value}/{max}</b>
                                :
                                <></>
                        }
                    </>
                }
            </div>
            <div className={['bbm-rcl-progress-indicator--progress', `--${size}`].join(' ')} style={cssProp}/>
        </div>
    )
}