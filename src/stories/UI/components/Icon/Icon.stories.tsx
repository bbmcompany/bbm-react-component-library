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

const VariantsTemplate: ComponentStory<typeof C3Icon> = args => (
    <div className={'icon'}>
        <C3Icon  {...args} icon={args.icon} white className={'b-m-5'}/>
        <C3Icon  {...args} icon={args.icon} black className={'b-m-5'}/>
        <C3Icon  {...args} icon={args.icon} primary className={'b-m-5'}/>
        <C3Icon  {...args} icon={args.icon} secondary className={'b-m-5'}/>
        <C3Icon  {...args} icon={args.icon} tertiary className={'b-m-5'}/>
        <C3Icon  {...args} icon={args.icon} error className={'b-m-5'}/>
        <C3Icon  {...args} icon={args.icon} warning className={'b-m-5'}/>
        <C3Icon  {...args} icon={args.icon} success className={'b-m-5'}/>
        <C3Icon  {...args} icon={args.icon} info className={'b-m-5'}/>
        <C3Icon  {...args} icon={args.icon} grey className={'b-m-5'}/>
        <C3Icon  {...args} icon={args.icon} orange className={'b-m-5'}/>
    </div>
);
export const Variants = VariantsTemplate.bind({});
const SingleIconTemplate: ComponentStory<typeof C3Icon> = args => (
    <div>
        <C3Icon  {...args} icon={args.icon} className={'b-m-5'}/>
    </div>
);
export const SingleIcon = SingleIconTemplate.bind({});

const IconSizeTemplate: ComponentStory<typeof C3Icon> = args => (
    <div className={'icon'}>
        <C3Icon  {...args} icon={args.icon} orange size={'xs'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={args.icon} orange size={'s'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={args.icon} orange size={'m'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={args.icon} orange size={'l'} className={'b-m-5'}/>
    </div>
)
export const IconSize = IconSizeTemplate.bind({});

const IconListTemplate: ComponentStory<typeof C3Icon> = args => (
    <div className={'icon'}>
        <C3Icon  {...args} icon={'academy'} black size={'l'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'account'} black size={'l'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'add_note'} black size={'l'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'add_photo'} black size={'l'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'add_product'} black size={'l'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'alert'} black size={'l'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'archive'} black size={'l'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'arrow-right'} black size={'l'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'left-arrow'} black size={'l'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'arrow-up'} black size={'l'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'arrow_down'} black size={'l'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'attach'} black size={'l'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'award'} black size={'l'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'back'} black size={'l'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'back_fill'} black size={'l'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'change'} black size={'l'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'close'} black size={'l'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'question'} black size={'l'} className={'b-m-5'}/>
        <C3Icon  {...args} icon={'exclamation'} black size={'l'} className={'b-m-5'}/>
    </div>
)
export const IconList = IconListTemplate.bind({});
