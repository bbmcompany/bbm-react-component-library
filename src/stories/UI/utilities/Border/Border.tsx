import './border.scss'

interface C3BorderProps {
    className?: string;
    children?: string;
}

export const C3Border = ({
                             className = ' ',
                             children = ' ',
                         }: C3BorderProps) => {
    return (
        <div className={['bbm-rcl-border', className].join(' ')}>{children}</div>
    );
}