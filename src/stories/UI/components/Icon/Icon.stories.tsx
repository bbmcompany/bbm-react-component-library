import {Icon} from "./Icon";
import {ComponentMeta, ComponentStory} from "@storybook/react";


export default {
    title: 'UI/Icon',
    component: Icon,
    argTypes: {
        icon: {
            control: {
                type: 'select',
                options: ['academy', 'add_note', 'add_photo', 'add_product', 'alert', 'archive', 'arrow-right', 'left-arrow', 'arrow-up', 'arrow_down']
            }
        }
    },
} as ComponentMeta<typeof Icon>;

const SingleIconTemplate: ComponentStory<typeof Icon> = args => (
    <div>
        <Icon  {...args} icon={args.icon}/>
    </div>
);
export const SingleIcon = SingleIconTemplate.bind({});

const IconSizeTemplate : ComponentStory<typeof Icon> = args => (
    <div style={{display: 'flex'}}>
        <Icon  {...args} icon={args.icon} size={'small'}/>
        <Icon  {...args} icon={args.icon} size={'medium'}/>
        <Icon  {...args} icon={args.icon} size={'large'}/>
        <Icon  {...args} icon={args.icon} size={'x-large'}/>
        <Icon  {...args} icon={args.icon} size={'2x-large'}/>

    </div>
)
export const IconSize = IconSizeTemplate.bind({});
