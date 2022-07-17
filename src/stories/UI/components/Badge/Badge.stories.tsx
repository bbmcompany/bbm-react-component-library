import {Badge} from "./Badge";
import {ComponentMeta, ComponentStory} from "@storybook/react";
export default  {
    title: 'COMPONENTS/Badge',
    component: Badge,
    argTypes: {
        size: {control : {type: 'select',
                options: {
                    'Small' : 'small',
                    'Medium': 'medium',
                    'Large' : 'large',
                    'X Large': 'x-large',
                    '2X Large' : '2x-large',
                    '3X Large' : '3x-large',
                }}},

    }
} as ComponentMeta<typeof Badge>;

const VariantsTemplate: ComponentStory<typeof Badge> = args => (
    <div>
        <Badge {...args}>5</Badge>
    </div>
);
export const Variants = VariantsTemplate.bind({});