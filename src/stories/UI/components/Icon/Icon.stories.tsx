import {Icon} from "./Icon";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import './icon-stories.scss'

export default {
    title: 'COMPONENTS/Icon',
    component: Icon,
    argTypes: {
        icon: {
            control: {
                type: 'select',
                options: ['academy', 'add_note', 'add_photo', 'add_product', 'alert', 'archive', 'arrow-right', 'left-arrow', 'arrow-up', 'arrow_down',
                    'attach', 'award', 'back', 'back_fill', 'change', 'close', 'question', 'exclamation'
                ]
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

const IconSizeTemplate: ComponentStory<typeof Icon> = args => (
    <div className={'icon'}>
        <Icon  {...args} icon={args.icon} size={'small'}/>
        <Icon  {...args} icon={args.icon} size={'medium'}/>
        <Icon  {...args} icon={args.icon} size={'large'}/>
        <Icon  {...args} icon={args.icon} size={'x-large'}/>
        <Icon  {...args} icon={args.icon} size={'2x-large'}/>

    </div>
)
export const IconSize = IconSizeTemplate.bind({});

const IconListTemplate: ComponentStory<typeof Icon> = args => (
    <div className={'icon'}>
        <Icon  {...args} icon={'academy'} size={'x-large'}/>
        <Icon  {...args} icon={'account'} size={'x-large'}/>
        <Icon  {...args} icon={'add_note'} size={'x-large'}/>
        <Icon  {...args} icon={'add_photo'} size={'x-large'}/>
        <Icon  {...args} icon={'add_product'} size={'x-large'}/>
        <Icon  {...args} icon={'alert'} size={'x-large'}/>
        <Icon  {...args} icon={'archive'} size={'x-large'}/>
        <Icon  {...args} icon={'arrow-right'} size={'x-large'}/>
        <Icon  {...args} icon={'left-arrow'} size={'x-large'}/>
        <Icon  {...args} icon={'arrow-up'} size={'x-large'}/>
        <Icon  {...args} icon={'arrow_down'} size={'x-large'}/>
        <Icon  {...args} icon={'attach'} size={'x-large'}/>
        <Icon  {...args} icon={'award'} size={'x-large'}/>
        <Icon  {...args} icon={'back'} size={'x-large'}/>
        <Icon  {...args} icon={'back_fill'} size={'x-large'}/>
        <Icon  {...args} icon={'change'} size={'x-large'}/>
        <Icon  {...args} icon={'close'} size={'x-large'}/>
        <Icon  {...args} icon={'question'} size={'x-large'}/>
        <Icon  {...args} icon={'exclamation'} size={'x-large'}/>
    </div>
)
export const IconList = IconListTemplate.bind({});
