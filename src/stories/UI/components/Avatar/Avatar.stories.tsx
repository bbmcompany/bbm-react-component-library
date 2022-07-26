import { ComponentMeta, ComponentStory } from "@storybook/react";
import { C3Avatar } from "./Avatar";
import  './avatar-stories.scss'
export default {
    title : 'COMPONENTS/C3Avatar',
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

const AvatarVariantsTemplate : ComponentStory<typeof C3Avatar> = args => (
    <div className={'avatar'}>
        <C3Avatar {...args}/>
        <C3Avatar {...args}>BM</C3Avatar>
    </div>
);
export const Variants = AvatarVariantsTemplate.bind({});
