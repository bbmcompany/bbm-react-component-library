import './display.scss'

interface C3DisplayProps {
    children?: any;
    className?: string;
}

export const C3Display = ({
                              children = undefined,
                              className = ' ',
                          }: C3DisplayProps) => {
    return (
        <span className={['display', className].join(' ')}>{children}</span>
    )
}