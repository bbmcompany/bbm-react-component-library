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
                    'xs': 'xs',
                    's': 's',
                    'm': 'm',
                    'l': 'l',
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
        <C3Icon  {...args} icon={args.icon} size={'xs'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={args.icon} size={'s'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={args.icon} size={'m'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={args.icon} size={'l'} className={'b-m-5'}/>
    </div>
)
export const IconSize = IconSizeTemplate.bind({});

const IconListTemplate: ComponentStory<typeof C3Icon> = args => (
    <div className={'icon'}>
        <C3Icon  {...args} icon={'academy'} size={'l'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'account'} size={'l'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'add_note'} size={'l'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'add_photo'} size={'l'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'add_product'} size={'l'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'alert'} size={'l'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'archive'} size={'l'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'arrow-right'} size={'l'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'left-arrow'} size={'l'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'arrow-up'} size={'l'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'arrow_down'} size={'l'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'attach'} size={'l'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'award'} size={'l'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'back'} size={'l'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'back_fill'} size={'l'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'change'} size={'l'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'close'} size={'l'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'question'} size={'l'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'exclamation'} size={'l'} className={'b-m-5'}/>
    </div>
)
export const IconList = IconListTemplate.bind({});
