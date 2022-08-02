import {ComponentMeta, ComponentStory} from "@storybook/react";
import {C3DropdownButton} from "./DropddownButton";
import './dropdown-button-stories.scss'

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
    <div className={'dropdown'}>
        <C3DropdownButton {...args} primary>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3DropdownButton>

        <C3DropdownButton {...args} secondary>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3DropdownButton>

        <C3DropdownButton {...args} tertiary>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3DropdownButton>
        <C3DropdownButton {...args} danger>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3DropdownButton>

        <C3DropdownButton {...args} success>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3DropdownButton>

        <C3DropdownButton {...args} text>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3DropdownButton>

    </div>
);
export const Variants = VariantsTemplate.bind({});

const SizeTemplate: ComponentStory<typeof C3DropdownButton> = args => (
    <div className={'dropdown'}>
        <C3DropdownButton {...args} tertiary size={'small'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3DropdownButton>
        <C3DropdownButton {...args} tertiary size={'medium'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3DropdownButton>
        <C3DropdownButton {...args} tertiary size={'large'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3DropdownButton>
    </div>
);
export const DropdownSize = SizeTemplate.bind({});