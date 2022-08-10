import {C3Label} from "./Label";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import './label-stories.scss';

export default {
    title: 'COMPONENTS/C3Label',
    component: C3Label,
    argTypes: {
        iconPosition: {
            control: {
                type: 'select',
                options: {
                    'Left': 'left',
                    'Right': 'right',
                }
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
        icon: {
            control: {
                type: 'select',
                options: ['academy', 'add_note', 'add_photo', 'add_product', 'alert', 'archive', 'arrow-right', 'left-arrow', 'arrow-up', 'arrow_down',
                    'attach', 'award', 'back', 'back_fill', 'change', 'close'
                ]
            }
        },
        color: {control: {type: 'color'}},
        backgroundColor: {control: {type: 'color'}}
    },
} as ComponentMeta<typeof C3Label>;

const LabelVariantsTemplate: ComponentStory<typeof C3Label> = args => (
    <div className={'label'}>
        <C3Label{...args} primary className={'b-m-5 b-border-32'}>Primary</C3Label>
        <C3Label{...args} secondary className={'b-m-5 b-border-1'}>Secondary</C3Label>
        <C3Label{...args} tertiary className={'b-m-5 b-border-2'}>Tertiary</C3Label>
        <C3Label{...args} orange className={'b-m-5 b-border-3'}>Orange</C3Label>
        <C3Label{...args} grey className={'b-m-5 b-border-4'}>Grey</C3Label>
        <C3Label{...args} error className={'b-m-5'}>Error</C3Label>
        <C3Label{...args} success className={'b-m-5'}>Success</C3Label>
        <C3Label{...args} warning className={'b-m-5'}>Warning</C3Label>
        <C3Label{...args} info className={'b-m-5'}>Info</C3Label>
    </div>
);
export const Variants = LabelVariantsTemplate.bind({});

const RoundedTemplate: ComponentStory<typeof C3Label> = args => (
    <div className={'label'}>
        <C3Label{...args} primary className={'b-m-5'}>Primary</C3Label>
        <C3Label{...args} primary className={'b-m-5 b-border-1'}>Secondary</C3Label>
        <C3Label{...args} primary className={'b-m-5 b-border-2'}>Secondary</C3Label>
        <C3Label{...args} primary className={'b-m-5 b-border-3'}>Secondary</C3Label>
        <C3Label{...args} primary className={'b-m-5 b-border-4'}>Secondary</C3Label>
        <C3Label{...args} primary className={'b-m-5 b-border-5'}>Secondary</C3Label>
        <C3Label{...args} primary className={'b-m-5 b-border-32'}>Secondary</C3Label>
    </div>
);
export const Rounded = RoundedTemplate.bind({});

const LabelSolidTemplate: ComponentStory<typeof C3Label> = args => (
    <div className={'label'}>
        <C3Label{...args} primary solid className={'b-m-5 b-border-32'}>Primary</C3Label>
        <C3Label{...args} secondary solid className={'b-m-5 b-border-1'}>Secondary</C3Label>
        <C3Label{...args} tertiary solid className={'b-m-5 b-border-2'}>Tertiary</C3Label>
        <C3Label{...args} orange solid className={'b-m-5 b-border-3'}>Orange</C3Label>
        <C3Label{...args} grey solid className={'b-m-5 b-border-4'}>Grey</C3Label>
        <C3Label{...args} error solid className={'b-m-5'}>Error</C3Label>
        <C3Label{...args} success solid className={'b-m-5'}>Success</C3Label>
        <C3Label{...args} warning solid className={'b-m-5'}>Warning</C3Label>
        <C3Label{...args} info solid className={'b-m-5'}>Info</C3Label>
    </div>
);
export const Solid = LabelSolidTemplate.bind({});

const LabelOutlineTemplate: ComponentStory<typeof C3Label> = args => (
    <div className={'label'}>
        <C3Label{...args} primary outline className={'b-m-5 b-border-32'}>Primary</C3Label>
        <C3Label{...args} secondary outline className={'b-m-5 b-border-1'}>Secondary</C3Label>
        <C3Label{...args} tertiary outline className={'b-m-5 b-border-2'}>Tertiary</C3Label>
        <C3Label{...args} orange outline className={'b-m-5 b-border-3'}>Orange</C3Label>
        <C3Label{...args} grey outline className={'b-m-5 b-border-4'}>Grey</C3Label>
        <C3Label{...args} error outline className={'b-m-5'}>Error</C3Label>
        <C3Label{...args} success outline className={'b-m-5'}>Success</C3Label>
        <C3Label{...args} warning outline className={'b-m-5'}>Warning</C3Label>
        <C3Label{...args} info outline className={'b-m-5'}>Info</C3Label>
    </div>
);
export const Outline = LabelOutlineTemplate.bind({});

const LabeTemplate: ComponentStory<typeof C3Label> = args => (
    <div className={'label start'}>
        <C3Label{...args} size={'xs'} className={'b-m-5'}>In Progress</C3Label>
        <C3Label{...args} size={'s'} className={'b-m-5'}>In Progress</C3Label>
        <C3Label{...args} size={'m'} className={'b-m-5'}>In Progress</C3Label>
        <C3Label{...args} size={'l'} className={'b-m-5'}>In Progress</C3Label>
    </div>
);
export const Label = LabeTemplate.bind({});

const LabelWithIconTemplate: ComponentStory<typeof C3Label> = args => (
    <div className={'label'}>
        <C3Label{...args} icon={'academy'} className={'b-m-5'}>Academy</C3Label>
        <C3Label{...args} icon={'archive'} className={'b-m-5'}>Approved</C3Label>
        <C3Label{...args} icon={'alert'} className={'b-m-5'}>Warning</C3Label>
        <C3Label{...args} className={'b-m-5 b-border-32'}>Warning</C3Label>
        <C3Label{...args} icon={'award'} className={'b-m-5 b-border-32'}>Winner</C3Label>
    </div>
);
export const LabelWithIcon = LabelWithIconTemplate.bind({});

const LabelIconTemplate: ComponentStory<typeof C3Label> = args => (
    <div className={'label'}>
        <C3Label{...args} iconLabel icon={'academy'} className={'b-m-5'}/>
        <C3Label{...args} iconLabel icon={'archive'} className={'b-m-5'}/>
        <C3Label{...args} iconLabel icon={'alert'} className={'b-m-5'}/>
        <C3Label{...args} iconLabel icon={'award'} className={'b-m-5 b-border-100'}/>
    </div>
);
export const LabelIcon = LabelIconTemplate.bind({});
