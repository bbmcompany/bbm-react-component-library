interface C3BoxProps {
    m?: 'auto' | '0' | '1' | '2' | '3' | '4' | '5' | '10' | '15' | '20' | '25' | '50' | '75' | '100',
    mt?: 'auto' | '0' | '1' | '2' | '3' | '4' | '5' | '10' | '15' | '20' | '25' | '50' | '75' | '100',
    mb?: 'auto' | '0' | '1' | '2' | '3' | '4' | '5' | '10' | '15' | '20' | '25' | '50' | '75' | '100',
    mr?: 'auto' | '0' | '1' | '2' | '3' | '4' | '5' | '10' | '15' | '20' | '25' | '50' | '75' | '100',
    ml?: 'auto' | '0' | '1' | '2' | '3' | '4' | '5' | '10' | '15' | '20' | '25' | '50' | '75' | '100',
    mx?: 'auto' | '0' | '1' | '2' | '3' | '4' | '5' | '10' | '15' | '20' | '25' | '50' | '75' | '100',
    my?: 'auto' | '0' | '1' | '2' | '3' | '4' | '5' | '10' | '15' | '20' | '25' | '50' | '75' | '100',
    p?: '0' | '1' | '2' | '3' | '4' | '5' | '10' | '15' | '20' | '25' | '50' | '75' | '100',
    pt?: '0' | '1' | '2' | '3' | '4' | '5' | '10' | '15' | '20' | '25' | '50' | '75' | '100',
    pb?: '0' | '1' | '2' | '3' | '4' | '5' | '10' | '15' | '20' | '25' | '50' | '75' | '100',
    pr?: '0' | '1' | '2' | '3' | '4' | '5' | '10' | '15' | '20' | '25' | '50' | '75' | '100',
    pl?: '0' | '1' | '2' | '3' | '4' | '5' | '10' | '15' | '20' | '25' | '50' | '75' | '100',
    px?: '0' | '1' | '2' | '3' | '4' | '5' | '10' | '15' | '20' | '25' | '50' | '75' | '100',
    py?: '0' | '1' | '2' | '3' | '4' | '5' | '10' | '15' | '20' | '25' | '50' | '75' | '100',
    w?: 'auto' | '10' | '25' | '50' | '75' | '100',
    h?: 'auto' | '10' | '25' | '50' | '75' | '100',
    sz?: 'auto' | '10' | '25' | '50' | '75' | '100',
    mxw?: '10' | '25' | '50' | '75' | '100',
    mxh?: '10' | '25' | '50' | '75' | '100',
    mnw?: '10' | '25' | '50' | '75' | '100',
    mnh?: '10' | '25' | '50' | '75' | '100',
    position?: 'absolute' | 'relative' | 'center' | 'fixed' | 'inherit' | 'revert',
    d?: 'none' | 'inline' | 'inline-block' | 'block' | 'table' | 'table-cell' | 'table-row' | 'flex' | 'inline-flex',
    className?: string,
    children?: any,
    displaydirection?: 'column' | 'column-reverse' | 'row' | 'row-reverse' | 'unset' | 'inherit' | 'revert' | 'initial',
    align?: 'center' | 'initial' | 'revert' | 'end' | 'start' | 'inherit' | 'normal',
    justify?: 'normal' | 'inherit' | 'start' | 'end' | 'between' | 'around' | 'evenly',
}

export const C3Box = ({
                          className = ' ',
                          children = undefined,
                          ...props
                      }: C3BoxProps) => {
    let boxClasses = ' ';
    for (const [key, value] of Object.entries(props)) {
        if (value) {
            boxClasses += ` b-${key}-${value}`;
        }
    }
    console.log(boxClasses)
    return (
        <div className={['bbm-rcl-box', className, boxClasses].join(' ')}>
            {children}
        </div>
    )
}