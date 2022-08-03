import './skeleton.scss'

interface C3SkeletonProps {
    width?: number,
    height?: number,
    borderRadius?: number,
    className?: string,
}

export const C3Skeleton = ({
                               width = 180,
                               height = 250,
                               borderRadius = 0,
                               className = ' ',
                           }: C3SkeletonProps) => {
    if (width < 1 || height < 1) {
        width = 180;
        height = 250;
    }
    return (
        <div className={['bbm-rcl-skeleton', className].join(' ')}>
            <span style={{width: `${width}px`, height: `${height}px`, borderRadius: `${borderRadius}%`}}
                  className={'skeleton-span'}></span>
        </div>
    )
}