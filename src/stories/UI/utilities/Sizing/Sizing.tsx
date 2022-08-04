import './sizing.scss'

interface C3SizingProps {
    className?: string;
    children?: string;
}

export const C3Sizing = ({
                             className = ' ',
                             children = ' ',
                         }: C3SizingProps) => {
    return (
        <div className={['bbm-rcl-sizing', className].join(' ')}>{children}</div>
    )
}