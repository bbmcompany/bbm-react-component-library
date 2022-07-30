import {ComponentMeta, ComponentStory} from "@storybook/react";
import {C3Switch} from "./Switch";

export default {
    title: 'COMPONENTS/C3Switch',
    component: C3Switch,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: {
                    'Extra Small': 'extra-small',
                    'Small': 'small',
                    'Medium': 'medium',
                    'Large': 'large',
                }
            }
        },
    }
} as ComponentMeta<typeof C3Switch>;

const VariantsTemplate: ComponentStory<typeof C3Switch> = args => (
    <div>
        <C3Switch {...args}/>
    </div>
);
export const Variants = VariantsTemplate.bind({});