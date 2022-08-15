import {ComponentMeta, ComponentStory} from "@storybook/react";
import { C3Box } from "../Box/Box";
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
                    'xs': 'xs',
                    's': 's',
                    'm': 'm',
                    'l': 'l',
                }
            }
        }
    }
} as ComponentMeta<typeof C3Checkbox>;

const VariantsTemplate: ComponentStory<typeof C3Checkbox> = args => (
    <C3Box d={'flex'}>
        <C3Checkbox {...args} defaultChecked primary className={'b-m-5'}/>
        <C3Checkbox {...args} defaultChecked secondary className={'b-m-5'}/>
        <C3Checkbox {...args} defaultChecked tertiary className={'b-m-5'}/>
        <C3Checkbox {...args} defaultChecked error className={'b-m-5'}/>
        <C3Checkbox {...args} defaultChecked success className={'b-m-5'}/>
    </C3Box>
)
export const Variants = VariantsTemplate.bind({});

const CheckboxTypesTemplate : ComponentStory<typeof C3Checkbox> = args => (
    <C3Box d={'flex'}>
        <C3Checkbox {...args}  className={'b-m-5'}/>
        <C3Checkbox {...args} disabled className={'b-m-5'}/>
        <C3Checkbox {...args} defaultChecked className={'b-m-5'}/>
    </C3Box>
);
export const Types = CheckboxTypesTemplate.bind({});

const CheckboxSizesTemplate: ComponentStory<typeof C3Checkbox> = args => (
    <C3Box d={'flex'}>
        <C3Checkbox {...args} size={'xs'} className={'b-m-5'}/>
        <C3Checkbox {...args} size={'s'} className={'b-m-5'}/>
        <C3Checkbox {...args} size={'m'} className={'b-m-5'}/>
        <C3Checkbox {...args} size={'l'} className={'b-m-5'}/>
    </C3Box>
);
export const CheckboxSize = CheckboxSizesTemplate.bind({});