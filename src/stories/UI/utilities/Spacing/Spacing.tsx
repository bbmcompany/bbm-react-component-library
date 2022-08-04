import './spacing.scss';

interface C3SpacingProps {
    className?: string;
    children?: string;
}

export const C3Spacing = ({
                              className = ' ',
                              children = ' ',
                          }: C3SpacingProps) => {
    return (
        <div className={['bbm-rcl-spacing', className].join(' ')}>{children}</div>
    )
}