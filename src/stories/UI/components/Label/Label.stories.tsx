import {C3Label} from "./Label";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import './label-stories.scss';
export default {
    title: 'COMPONENTS/C3Label',
    component: C3Label,
    argTypes: {
        options: {
            control: {
                type: 'select',
                options: {
                    'In Progress': 'in-progress',
                    'Approved': 'approved',
                    'Warning': 'warning',
                    'Denied': 'denied',
                    'Offer': 'offer',
                    'Winner': 'winner',
                }
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
        <C3Label{...args} options={'in-progress'} className={'b-m-5'}>In Progress</C3Label>
        <C3Label{...args} options={'approved'} className={'b-m-5'}>Approved</C3Label>
        <C3Label{...args} options={'warning'} className={'b-m-5'}>Warning</C3Label>
        <C3Label{...args} options={'denied'} className={'b-m-5'}>Denied</C3Label>
        <C3Label{...args} options={'offer'} className={'b-m-5'}>Offer</C3Label>
        <C3Label{...args} options={'winner'} className={'b-m-5'}>Winner</C3Label>
        <C3Label{...args} className={'b-m-5'}>Default</C3Label>
    </div>
);
export const Variants = LabelVariantsTemplate.bind({});

const LabelWithSizesTemplate: ComponentStory<typeof C3Label> = args => (
    <div className={'label start'}>
        <C3Label{...args} options={'in-progress'} size={'small'} className={'b-m-5'}>In Progress</C3Label>
        <C3Label{...args} options={'in-progress'} size={'medium'} className={'b-m-5'}>In Progress</C3Label>
        <C3Label{...args} options={'in-progress'} size={'large'} className={'b-m-5'}>In Progress</C3Label>
        <C3Label{...args} options={'in-progress'} size={'x-large'} className={'b-m-5'}>In Progress</C3Label>
        <C3Label{...args} options={'in-progress'} size={'2x-large'} className={'b-m-5'}>In Progress</C3Label>
        <C3Label{...args} options={'in-progress'} size={'3x-large'} className={'b-m-5'}>In Progress</C3Label>
        <C3Label{...args} options={'in-progress'} className={'b-m-5'}>Default</C3Label>
    </div>
);
export const LabelWithSizes = LabelWithSizesTemplate.bind({});

const LabelWithIconTemplate: ComponentStory<typeof C3Label> = args => (
    <div className={'label'}>
        <C3Label{...args} options={'in-progress'} icon={'academy'} className={'b-m-5'}>In Progress</C3Label>
        <C3Label{...args} options={'approved'} icon={'archive'} className={'b-m-5'}>Approved</C3Label>
        <C3Label{...args} options={'warning'} icon={'alert'} className={'b-m-5'}>Warning</C3Label>
        <C3Label{...args} options={'winner'} icon={'award'} className={'b-m-5'}>Winner</C3Label>
    </div>
);
export const LabelWithIcon = LabelWithIconTemplate.bind({});

const LabelIconTemplate: ComponentStory<typeof C3Label> = args => (
    <div className={'label'}>
        <C3Label{...args} options={'in-progress'} iconLabel icon={'academy'} className={'b-m-5'}>In Progress</C3Label>
        <C3Label{...args} options={'approved'} iconLabel icon={'archive'} className={'b-m-5'}>Approved</C3Label>
        <C3Label{...args} options={'warning'} iconLabel icon={'alert'} className={'b-m-5'}>Warning</C3Label>
        <C3Label{...args} options={'winner'} iconLabel icon={'award'} className={'b-m-5'}>Winner</C3Label>
    </div>
);
export const LabelIcon = LabelIconTemplate.bind({});
