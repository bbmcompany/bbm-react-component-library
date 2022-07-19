import {C3Icon} from "./Icon";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import './icon-stories.scss'

export default {
    title: 'COMPONENTS/C3Icon',
    component: C3Icon,
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
} as ComponentMeta<typeof C3Icon>;

const SingleIconTemplate: ComponentStory<typeof C3Icon> = args => (
    <div>
        <C3Icon  {...args} icon={args.icon}/>
    </div>
);
export const SingleIcon = SingleIconTemplate.bind({});

const IconSizeTemplate: ComponentStory<typeof C3Icon> = args => (
    <div className={'icon'}>
        <C3Icon  {...args} icon={args.icon} size={'small'}/>
        <C3Icon  {...args} icon={args.icon} size={'medium'}/>
        <C3Icon  {...args} icon={args.icon} size={'large'}/>
        <C3Icon  {...args} icon={args.icon} size={'x-large'}/>
        <C3Icon  {...args} icon={args.icon} size={'2x-large'}/>

    </div>
)
export const IconSize = IconSizeTemplate.bind({});

const IconListTemplate: ComponentStory<typeof C3Icon> = args => (
    <div className={'icon'}>
        <C3Icon  {...args} icon={'academy'} size={'x-large'}/>
        <C3Icon  {...args} icon={'account'} size={'x-large'}/>
        <C3Icon  {...args} icon={'add_note'} size={'x-large'}/>
        <C3Icon  {...args} icon={'add_photo'} size={'x-large'}/>
        <C3Icon  {...args} icon={'add_product'} size={'x-large'}/>
        <C3Icon  {...args} icon={'alert'} size={'x-large'}/>
        <C3Icon  {...args} icon={'archive'} size={'x-large'}/>
        <C3Icon  {...args} icon={'arrow-right'} size={'x-large'}/>
        <C3Icon  {...args} icon={'left-arrow'} size={'x-large'}/>
        <C3Icon  {...args} icon={'arrow-up'} size={'x-large'}/>
        <C3Icon  {...args} icon={'arrow_down'} size={'x-large'}/>
        <C3Icon  {...args} icon={'attach'} size={'x-large'}/>
        <C3Icon  {...args} icon={'award'} size={'x-large'}/>
        <C3Icon  {...args} icon={'back'} size={'x-large'}/>
        <C3Icon  {...args} icon={'back_fill'} size={'x-large'}/>
        <C3Icon  {...args} icon={'change'} size={'x-large'}/>
        <C3Icon  {...args} icon={'close'} size={'x-large'}/>
        <C3Icon  {...args} icon={'question'} size={'x-large'}/>
        <C3Icon  {...args} icon={'exclamation'} size={'x-large'}/>
    </div>
)
export const IconList = IconListTemplate.bind({});
