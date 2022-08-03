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
        },
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
    },
} as ComponentMeta<typeof C3Icon>;

const SingleIconTemplate: ComponentStory<typeof C3Icon> = args => (
    <div>
        <C3Icon  {...args} icon={args.icon} className={'b-m-5'}/>
    </div>
);
export const SingleIcon = SingleIconTemplate.bind({});

const IconSizeTemplate: ComponentStory<typeof C3Icon> = args => (
    <div className={'icon'}>
        <C3Icon  {...args} icon={args.icon} size={'small'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={args.icon} size={'medium'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={args.icon} size={'large'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={args.icon} size={'x-large'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={args.icon} size={'2x-large'} className={'b-m-5'}/>

    </div>
)
export const IconSize = IconSizeTemplate.bind({});

const IconListTemplate: ComponentStory<typeof C3Icon> = args => (
    <div className={'icon'}>
        <C3Icon  {...args} icon={'academy'} size={'x-large'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'account'} size={'x-large'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'add_note'} size={'x-large'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'add_photo'} size={'x-large'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'add_product'} size={'x-large'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'alert'} size={'x-large'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'archive'} size={'x-large'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'arrow-right'} size={'x-large'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'left-arrow'} size={'x-large'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'arrow-up'} size={'x-large'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'arrow_down'} size={'x-large'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'attach'} size={'x-large'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'award'} size={'x-large'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'back'} size={'x-large'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'back_fill'} size={'x-large'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'change'} size={'x-large'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'close'} size={'x-large'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'question'} size={'x-large'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'exclamation'} size={'x-large'} className={'b-m-5'}/>
    </div>
)
export const IconList = IconListTemplate.bind({});
