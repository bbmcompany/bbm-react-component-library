import './tabs.scss'

interface C3TabsProps {
    className?: string,
    children?: any,
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    error?: boolean;
    warning?: boolean;
    success?: boolean;
    info?: boolean;
    orange?: boolean;
    grey?: boolean;
    fluid?: boolean,
}

export const C3Tabs = ({

                           className = ' ',
                           fluid = false,
                           children = undefined,
                           ...props
                       }: C3TabsProps) => {
    let variantClasses = '';
    let fluidClass = fluid ? 'fluid' : '';
    for (const [key, value] of Object.entries(props)) {
        if (value) {
            variantClasses += ` bbm-rcl-tabs--${key}`;
        }
    }
    return (
        <div className={['bbm-rcl-tabs', className].join(' ')}>
            <div className={['bbm-rcl-tabs--button-group b-border-t-4', variantClasses, fluidClass].join(' ')}>
                {children}
            </div>
        </div>
    );
}