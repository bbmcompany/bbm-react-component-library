import { ComponentMeta, ComponentStory } from "@storybook/react";
import { C3ProgressIndicator } from "./ProgressIndicator";

export default {
    title: 'COMPONENTS/C3ProgressIndicator',
    component: C3ProgressIndicator,
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
        },
    }
} as ComponentMeta<typeof C3ProgressIndicator>;

const VariantsTemplate: ComponentStory<typeof C3ProgressIndicator> = args => (
    <div className={'progress-indicator'}>
        <C3ProgressIndicator {...args} className={'b-border-5'}></C3ProgressIndicator>
    </div>
);
export const Variants = VariantsTemplate.bind({});