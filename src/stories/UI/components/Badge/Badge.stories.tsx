import {Badge} from "./Badge";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Icon} from "../Icon/Icon";
import './badge-stories.scss'

export default {
    title: 'COMPONENTS/Badge',
    component: Badge,
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
} as ComponentMeta<typeof Badge>;

const VariantsTemplate: ComponentStory<typeof Badge> = args => (
    <div className={'variants'}>
        <Badge {...args} primary>1</Badge>
        <Badge {...args} secondary>2</Badge>
        <Badge {...args} tertiary>3</Badge>
        <Badge {...args} success>4</Badge>
        <Badge {...args} danger>5</Badge>
        <Badge {...args}>6</Badge>
    </div>
);
export const Variants = VariantsTemplate.bind({});

const FloatTemplate: ComponentStory<typeof Badge> = args => (
    <div className={'float-container'}>
        <div className={'float'}>
            <Icon size={'medium'}></Icon>
            <Badge {...args} float={'top-left'}>1</Badge>
        </div>
        <div className={'float'}>
            <Icon size={'medium'}></Icon>
            <Badge {...args} float={'top-left'} overlap>1</Badge>
        </div>
        <div className={'float'}>
            <Icon size={'medium'}></Icon>
            <Badge {...args} float={'top-right'}>2</Badge>
        </div>
        <div className={'float'}>
            <Icon size={'medium'}></Icon>
            <Badge {...args} float={'top-right'} overlap>2</Badge>
        </div>
        <div className={'float'}>
            <Icon size={'medium'}></Icon>
            <Badge {...args} float={'bottom-left'}>3</Badge>
        </div>
        <div className={'float'}>
            <Icon size={'medium'}></Icon>
            <Badge {...args} float={'bottom-left'} overlap>3</Badge>
        </div>
        <div className={'float'}>
            <Icon size={'medium'}></Icon>
            <Badge {...args} float={'bottom-right'}>4</Badge>
        </div>
        <div className={'float'}>
            <Icon size={'medium'}></Icon>
            <Badge {...args} float={'bottom-right'} overlap>4</Badge>
        </div>
    </div>

);
export const Float = FloatTemplate.bind({});

const IconBadgeTemplate : ComponentStory<typeof Badge> = args => (
    <div>
        <Badge {...args} icon={'academy'} success></Badge>
        <Badge {...args} icon={'question'} danger></Badge>
        <Badge {...args} icon={'exclamation'} secondary></Badge>
        <Badge {...args} icon={'award'}></Badge>
    </div>
);
export const IconBadge = IconBadgeTemplate.bind({});