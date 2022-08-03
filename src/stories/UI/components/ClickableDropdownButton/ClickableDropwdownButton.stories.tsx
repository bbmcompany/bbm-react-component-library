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
        <C3ClickableDropdownButton {...args} primary className={'b-m-5'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3ClickableDropdownButton>
        <C3ClickableDropdownButton {...args} secondary className={'b-m-5'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3ClickableDropdownButton>
        <C3ClickableDropdownButton {...args} tertiary className={'b-m-5'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3ClickableDropdownButton>
        <C3ClickableDropdownButton {...args} danger className={'b-m-5'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3ClickableDropdownButton>
        <C3ClickableDropdownButton {...args} success className={'b-m-5'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3ClickableDropdownButton>
        <C3ClickableDropdownButton {...args} text className={'b-m-5'}>
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
        <C3ClickableDropdownButton {...args} tertiary size={'small'} className={'b-m-5'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3ClickableDropdownButton>
        <C3ClickableDropdownButton {...args} tertiary size={'medium'} className={'b-m-5'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3ClickableDropdownButton>
        <C3ClickableDropdownButton {...args} tertiary size={'large'} className={'b-m-5'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3ClickableDropdownButton>
    </div>
);
export const DropdownSize = SizeTemplate.bind({});