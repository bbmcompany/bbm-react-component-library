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
                    'xs': 'xs',
                    's': 's',
                    'm': 'm',
                    'l': 'l',
                }
            }
        },
    }
} as ComponentMeta<typeof C3Avatar>

const AvatarVariantsTemplate: ComponentStory<typeof C3Avatar> = args => (
    <div className={'avatar'}>
        <C3Avatar {...args} className={'b-m-5'}>C3PO</C3Avatar>
        <C3Avatar {...args} icon className={'b-m-5'}>C3PO</C3Avatar>
        <C3Avatar {...args} primary text className={'b-m-5'}>C3PO</C3Avatar>
        <C3Avatar {...args} secondary text className={'b-m-5'}>C3PO</C3Avatar>
        <C3Avatar {...args} tertiary text className={'b-m-5'}>C3PO</C3Avatar>
        <C3Avatar {...args} orange text className={'b-m-5'}>C3PO</C3Avatar>
        <C3Avatar {...args} gray text className={'b-m-5'}>C3PO</C3Avatar>
        <C3Avatar {...args} error text className={'b-m-5'}>C3PO</C3Avatar>
        <C3Avatar {...args} success text className={'b-m-5'}>C3PO</C3Avatar>
        <C3Avatar {...args} warning text className={'b-m-5'}>C3PO</C3Avatar>
        <C3Avatar {...args} info text className={'b-m-5'}>C3PO</C3Avatar>
        <C3Avatar {...args} text className={'b-m-5'}>DF</C3Avatar>
    </div>
);
export const Variants = AvatarVariantsTemplate.bind({});

const AvatarSizeTemplate: ComponentStory<typeof C3Avatar> = args => (
    <div className={'avatar'}>
        <C3Avatar {...args} size={'xs'} className={'b-m-5'}/>
        <C3Avatar {...args} size={'s'} className={'b-m-5'}/>
        <C3Avatar {...args} size={'m'} className={'b-m-5'}/>
        <C3Avatar {...args} size={'l'} className={'b-m-5'}/>
    </div>
);
export const AvatarSize = AvatarSizeTemplate.bind({});


