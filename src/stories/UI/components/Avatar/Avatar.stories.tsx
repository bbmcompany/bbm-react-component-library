import {ComponentMeta, ComponentStory} from "@storybook/react";
import {C3Avatar} from "./Avatar";
import './avatar-stories.scss'

export default {
    title: 'COMPONENTS/C3Avatar',
    component: C3Avatar,
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
        backgroundColor: {
            control: {
                type: 'color',
            }
        },

    }
} as ComponentMeta<typeof C3Avatar>

const AvatarVariantsTemplate: ComponentStory<typeof C3Avatar> = args => (
    <div className={'avatar'}>
        <C3Avatar {...args} className={'b-m-5'}/>
        <C3Avatar {...args} primary className={'b-m-5'}>C3PO</C3Avatar>
        <C3Avatar {...args} circular className={'b-m-5'}/>
        <C3Avatar {...args} circular secondary className={'b-m-5'}>C3PO</C3Avatar>
        <C3Avatar {...args} rounded className={'b-m-5'}/>
        <C3Avatar {...args} rounded tertiary className={'b-m-5'}>C3PO</C3Avatar>
    </div>
);
export const Variants = AvatarVariantsTemplate.bind({});

const AvatarTypesTemplate: ComponentStory<typeof C3Avatar> = args => (
    <div className={'avatar'}>
        <C3Avatar {...args} className={'b-m-5'}/>
        <C3Avatar {...args} className={'b-m-5'}>C3PO</C3Avatar>
        <C3Avatar {...args} circular className={'b-m-5'}/>
        <C3Avatar {...args} circular className={'b-m-5'}>C3PO</C3Avatar>
        <C3Avatar {...args} rounded className={'b-m-5'}/>
        <C3Avatar {...args} rounded className={'b-m-5'}>C3PO</C3Avatar>
    </div>
);
export const Types = AvatarTypesTemplate.bind({});

const AvatarSizeTemplate: ComponentStory<typeof C3Avatar> = args => (
    <div className={'avatar'}>
        <C3Avatar {...args} size={'small'} className={'b-m-5'}/>
        <C3Avatar {...args} size={'medium'} className={'b-m-5'}/>
        <C3Avatar {...args} size={'large'} className={'b-m-5'}/>
        <C3Avatar {...args} size={'x-large'} className={'b-m-5'}/>
        <C3Avatar {...args} size={'2x-large'} className={'b-m-5'}/>
        <C3Avatar {...args} size={'3x-large'} className={'b-m-5'}/>
    </div>
);
export const AvatarSize = AvatarSizeTemplate.bind({});


