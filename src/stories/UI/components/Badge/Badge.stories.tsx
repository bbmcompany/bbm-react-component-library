import {C3Badge} from "./Badge";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {C3Icon} from "../Icon/Icon";
import './badge-stories.scss'

export default {
    title: 'COMPONENTS/C3Badge',
    component: C3Badge,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: {
                    'Small': 'small',
                    'Medium': 'medium',
                    'Large': 'large',
                    'X Large': 'x-large',
                    '2X Large': '2x-large',
                    '3X Large': '3x-large',
                }
            }
        },
        float: {
            control: {
                type: 'select',
                options: {
                    'Top Left': 'top-left',
                    'Top Right': 'top-right',
                    'Bottom Left': 'bottom-left',
                    'Bottom Right': 'bottom-right',
                }
            }
        },
        icon: {
            control: {
                type: 'select',
                options: ['academy', 'add_note', 'add_photo', 'add_product', 'alert', 'archive', 'arrow-right', 'left-arrow', 'arrow-up', 'arrow_down',
                    'attach', 'award', 'back', 'back_fill', 'change', 'close','question', 'exclamation'
                ]
            }
        }
    }
} as ComponentMeta<typeof C3Badge>;

const VariantsTemplate: ComponentStory<typeof C3Badge> = args => (
    <div className={'variants'}>
        <C3Badge {...args} primary className={'b-m-5'}>1</C3Badge>
        <C3Badge {...args} secondary className={'b-m-5'}>2</C3Badge>
        <C3Badge {...args} tertiary className={'b-m-5'}>3</C3Badge>
        <C3Badge {...args} success className={'b-m-5'}>4</C3Badge>
        <C3Badge {...args} danger className={'b-m-5'}>5</C3Badge>
        <C3Badge {...args} className={'b-m-5'}>6</C3Badge>
    </div>
);
export const Variants = VariantsTemplate.bind({});

const FloatTemplate: ComponentStory<typeof C3Badge> = args => (
    <div className={'float-container'}>
        <div className={'float b-m-5'}>
            <C3Icon size={'medium'}></C3Icon>
            <C3Badge {...args} float={'top-left'}>1</C3Badge>
        </div>
        <div className={'float b-m-5'}>
            <C3Icon size={'medium'}></C3Icon>
            <C3Badge {...args} float={'top-left'} overlap>1</C3Badge>
        </div>
        <div className={'float b-m-5'}>
            <C3Icon size={'medium'}></C3Icon>
            <C3Badge {...args} float={'top-right'}>2</C3Badge>
        </div>
        <div className={'float b-m-5'}>
            <C3Icon size={'medium'}></C3Icon>
            <C3Badge {...args} float={'top-right'} overlap>2</C3Badge>
        </div>
        <div className={'float b-m-5'}>
            <C3Icon size={'medium'}></C3Icon>
            <C3Badge {...args} float={'bottom-left'}>3</C3Badge>
        </div>
        <div className={'float b-m-5'}>
            <C3Icon size={'medium'}></C3Icon>
            <C3Badge {...args} float={'bottom-left'} overlap>3</C3Badge>
        </div>
        <div className={'float b-m-5'}>
            <C3Icon size={'medium'}></C3Icon>
            <C3Badge {...args} float={'bottom-right'}>4</C3Badge>
        </div>
        <div className={'float b-m-5'}>
            <C3Icon size={'medium'}></C3Icon>
            <C3Badge {...args} float={'bottom-right'} overlap>4</C3Badge>
        </div>
    </div>

);
export const Float = FloatTemplate.bind({});

const IconBadgeTemplate : ComponentStory<typeof C3Badge> = args => (
    <div>
        <C3Badge {...args} icon={'academy'} success className={'b-m-5'}></C3Badge>
        <C3Badge {...args} icon={'question'} danger className={'b-m-5'}></C3Badge>
        <C3Badge {...args} icon={'exclamation'} secondary className={'b-m-5'}></C3Badge>
        <C3Badge {...args} icon={'award'} className={'b-m-5'}></C3Badge>
        <C3Badge {...args} className={'b-m-5'}></C3Badge>
    </div>
);
export const IconBadge = IconBadgeTemplate.bind({});