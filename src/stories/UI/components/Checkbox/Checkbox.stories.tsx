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
        <C3Checkbox {...args} defaultChecked primary/>
        <C3Checkbox {...args} defaultChecked secondary/>
        <C3Checkbox {...args} defaultChecked tertiary/>
        <C3Checkbox {...args} defaultChecked danger/>
        <C3Checkbox {...args} defaultChecked success/>
    </div>
)
export const Variants = VariantsTemplate.bind({});

const CheckboxTypesTemplate : ComponentStory<typeof C3Checkbox> = args => (
    <div className={'checkbox'}>
        <C3Checkbox {...args} />
        <C3Checkbox {...args} disabled/>
        <C3Checkbox {...args} defaultChecked/>
    </div>
);
export const Types = CheckboxTypesTemplate.bind({});

const CheckboxSizesTemplate: ComponentStory<typeof C3Checkbox> = args => (
    <div className={'checkbox'}>
        <C3Checkbox {...args} size={'small'}/>
        <C3Checkbox {...args} size={'medium'}/>
        <C3Checkbox {...args} size={'large'}/>
        <C3Checkbox {...args} size={'x-large'}/>
        <C3Checkbox {...args} size={'2x-large'}/>
        <C3Checkbox {...args} size={'3x-large'}/>
    </div>
);
export const CheckboxSize = CheckboxSizesTemplate.bind({});