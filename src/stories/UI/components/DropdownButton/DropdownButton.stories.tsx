import {ComponentMeta, ComponentStory} from "@storybook/react";
import {C3DropdownButton} from "./DropddownButton";

export default {
    title: 'COMPONENTS/C3DropdownButton',
    component: C3DropdownButton,
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
                    'Small': 'small',
                    'Medium': 'medium',
                    'Large': 'large',
                }
            }
        },
    }
} as ComponentMeta<typeof C3DropdownButton>;

const VariantsTemplate: ComponentStory<typeof C3DropdownButton> = args => (
    <div>
        <C3DropdownButton {...args}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3DropdownButton>
    </div>
);

export const Variants = VariantsTemplate.bind({});