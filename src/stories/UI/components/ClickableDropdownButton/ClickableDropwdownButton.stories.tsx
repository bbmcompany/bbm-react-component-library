import {ComponentMeta, ComponentStory} from "@storybook/react";
import {C3ClickableDropdownButton} from "./ClickableDropdownButton";
import './clickable-dropdown-button-stories.scss'
import {C3Box} from "../Box/Box";

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
                    'xs': 'xs',
                    's': 's',
                    'm': 'm',
                    'l': 'l',
                }
            }
        },
    }
} as ComponentMeta<typeof C3ClickableDropdownButton>;

const VariantsTemplate: ComponentStory<typeof C3ClickableDropdownButton> = args => (
    <C3Box>
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
        <C3ClickableDropdownButton {...args} orange className={'b-m-5'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3ClickableDropdownButton>
        <C3ClickableDropdownButton {...args} grey className={'b-m-5'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3ClickableDropdownButton>
        <C3ClickableDropdownButton {...args} error className={'b-m-5'}>
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
        <C3ClickableDropdownButton {...args} warning className={'b-m-5'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3ClickableDropdownButton>
        <C3ClickableDropdownButton {...args} info className={'b-m-5'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3ClickableDropdownButton>


    </C3Box>
);
export const Variants = VariantsTemplate.bind({});

const SizeTemplate: ComponentStory<typeof C3ClickableDropdownButton> = args => (
    <C3Box>
        <C3ClickableDropdownButton {...args} tertiary size={'xs'} className={'b-m-5'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3ClickableDropdownButton>
        <C3ClickableDropdownButton {...args} tertiary size={'s'} className={'b-m-5'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3ClickableDropdownButton>
        <C3ClickableDropdownButton {...args} tertiary size={'m'} className={'b-m-5'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3ClickableDropdownButton>
        <C3ClickableDropdownButton {...args} tertiary size={'l'} className={'b-m-5'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3ClickableDropdownButton>
    </C3Box>
);
export const DropdownSize = SizeTemplate.bind({});