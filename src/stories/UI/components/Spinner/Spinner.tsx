import './spinner.scss'

interface C3SpinnerProps {
    size?: string,
    white?:boolean,
    primary?: boolean,
    secondary?: boolean,
    tertiary?: boolean,
    danger?: boolean,
    success?: boolean,
    dualRing?: boolean,
}

export const C3Spinner = ({
                              size = 'medium',
                              dualRing = false,
                              ...props
                          }: C3SpinnerProps) => {

    let variantClasses = ' ';
    for (const [key, value] of Object.entries(props)) {
        if (value) {
            variantClasses += ` bbm-rcl-spinner--${key}`;
        }
    }
    return (
        <>
            {dualRing ?
                <div
                    className={['bbm-rcl-spinner', 'bbm-rcl-spinner--dual-ring', variantClasses, `--${size}`].join(' ')}>
                </div>
                :
                <div className={['bbm-rcl-spinner', variantClasses, `--${size}`].join(' ')}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            }
        </>


    )
}