import './badge.scss'

interface BadgeProps {
    children?: string;
    size?: string;
}

export const Badge = ({
                          children = '+1',
                          size =  'medium',
                      }: BadgeProps) => {
    return (
        <span className={['bbm-rcl-badge', `bbm-rcl-badge--${size}`].join(' ')}>{children}</span>
    )
}