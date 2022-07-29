import {ComponentMeta, ComponentStory} from "@storybook/react";
import {C3ClickableDropdownButton} from "./ClickableDropdownButton";
import './clickable-dropdown-button-stories.scss'
export default {
    title: 'COMPONENTS/C3ClickableDropdownButton',
    component: C3ClickableDropdownButton,
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
} as ComponentMeta<typeof C3ClickableDropdownButton>;

const VariantsTemplate: ComponentStory<typeof C3ClickableDropdownButton> = args => (
    <div className={'clickable-dropdown'}>
        <C3ClickableDropdownButton {...args} primary>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3ClickableDropdownButton>
        <C3ClickableDropdownButton {...args} secondary>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3ClickableDropdownButton>
        <C3ClickableDropdownButton {...args} tertiary>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3ClickableDropdownButton>
        <C3ClickableDropdownButton {...args} danger>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3ClickableDropdownButton>
        <C3ClickableDropdownButton {...args} success>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3ClickableDropdownButton>
        <C3ClickableDropdownButton {...args} text>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3ClickableDropdownButton>


    </div>
);
export const Variants = VariantsTemplate.bind({});

const SizeTemplate: ComponentStory<typeof C3ClickableDropdownButton> = args => (
    <div className={'dropdown'}>
        <C3ClickableDropdownButton {...args} tertiary size={'small'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3ClickableDropdownButton>
        <C3ClickableDropdownButton {...args} tertiary size={'medium'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3ClickableDropdownButton>
        <C3ClickableDropdownButton {...args} tertiary size={'large'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3ClickableDropdownButton>
    </div>
);
export const DropdownSize = SizeTemplate.bind({});