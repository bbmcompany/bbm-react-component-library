import './skeleton.scss'

interface C3SkeletonProps {
    width?: number,
    height?: number,
    className?: string,
}

export const C3Skeleton = ({
                               width = 180,
                               height = 250,
                               className = ' ',
                           }: C3SkeletonProps) => {
    if (width < 1 || height < 1) {
        width = 180;
        height = 250;
    }
    return (
        <div className={'bbm-rcl-skeleton'}>
            <span style={{width: `${width}px`, height: `${height}px`}}
                  className={['skeleton-span','b-border-1', className].join(' ')}></span>
        </div>
    )
}