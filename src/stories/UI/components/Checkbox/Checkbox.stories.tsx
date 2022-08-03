import {ComponentMeta, ComponentStory} from "@storybook/react";
import {C3Checkbox} from "./Checkbox";
import './checkbox-stoires.scss'
export default {
    title: 'COMPONENTS/C3Checkbox',
    component: C3Checkbox,
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
        }
    }
} as ComponentMeta<typeof C3Checkbox>;

const VariantsTemplate: ComponentStory<typeof C3Checkbox> = args => (
    <div className={'checkbox'}>
        <C3Checkbox {...args} defaultChecked primary className={'b-m-5'}/>
        <C3Checkbox {...args} defaultChecked secondary className={'b-m-5'}/>
        <C3Checkbox {...args} defaultChecked tertiary className={'b-m-5'}/>
        <C3Checkbox {...args} defaultChecked danger className={'b-m-5'}/>
        <C3Checkbox {...args} defaultChecked success className={'b-m-5'}/>
    </div>
)
export const Variants = VariantsTemplate.bind({});

const CheckboxTypesTemplate : ComponentStory<typeof C3Checkbox> = args => (
    <div className={'checkbox'}>
        <C3Checkbox {...args}  className={'b-m-5'}/>
        <C3Checkbox {...args} disabled className={'b-m-5'}/>
        <C3Checkbox {...args} defaultChecked className={'b-m-5'}/>
    </div>
);
export const Types = CheckboxTypesTemplate.bind({});

const CheckboxSizesTemplate: ComponentStory<typeof C3Checkbox> = args => (
    <div className={'checkbox'}>
        <C3Checkbox {...args} size={'small'} className={'b-m-5'}/>
        <C3Checkbox {...args} size={'medium'} className={'b-m-5'}/>
        <C3Checkbox {...args} size={'large'} className={'b-m-5'}/>
        <C3Checkbox {...args} size={'x-large'} className={'b-m-5'}/>
        <C3Checkbox {...args} size={'2x-large'} className={'b-m-5'}/>
        <C3Checkbox {...args} size={'3x-large'} className={'b-m-5'}/>
    </div>
);
export const CheckboxSize = CheckboxSizesTemplate.bind({});