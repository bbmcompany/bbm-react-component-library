import {C3Button} from '../Button/Button'
import { C3Icon } from '../Icon/Icon';
import './tabs.scss'

interface C3ArrayTabsProps {
    tabs: object,
    className?: string,
    primary?: boolean,
    secondary?: boolean,
    tertiary?: boolean,
    success?: boolean,
    danger?: boolean,
    fluid?: boolean,
    seperator?: boolean,
    icon?: string,
}

export const C3ArrayTabs = ({
                                tabs = {},
                                fluid = false,
                                seperator = false,
                                icon = ' ',
                                className = ' ',
                                ...props
                            }: C3ArrayTabsProps) => {

    let fluidClass = fluid ? 'fluid' : ' ';
    let variantClasses = '';
    for (const [key, value] of Object.entries(props)) {
        if (value) {
            variantClasses += ` bbm-rcl-tabs--${key}`;
        }
    }
    return (
        <div className={['bbm-rcl-tabs', className].join(' ')}>
            {
                Object.values(tabs).length > 0 ?
                    <div className={['bbm-rcl-tabs--button-group b-border-t-4', variantClasses, fluidClass].join(' ')}>
                        {
                            [...Object.values(tabs).map((tab, index) => {
                                return (
                                    <>
                                        <C3Button
                                            size={'large'}
                                            id={tab.toLowerCase()}
                                            transparent
                                        >{tab}</C3Button>
                                        {icon != ' ' ?
                                            <C3Icon icon={icon}></C3Icon>
                                            :
                                            <></>
                                        }
                                        {
                                            index != Object.values(tabs).length - 1 && seperator ?
                                                <div className={'bbm-rcl-tabs--seperator'}></div>
                                                :
                                                <></>
                                        }
                                    </>

                                )
                            })]
                        }
                    </div>
                    :
                    <></>
            }
        </div>
    )
}