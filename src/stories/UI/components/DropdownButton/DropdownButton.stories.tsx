import {ComponentMeta, ComponentStory} from "@storybook/react";
import { C3Box } from "../Box/Box";
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
                    'xs': 'xs',
                    's': 's',
                    'm': 'm',
                    'l': 'l',
                }
            }
        },
    }
} as ComponentMeta<typeof C3DropdownButton>;

const VariantsTemplate: ComponentStory<typeof C3DropdownButton> = args => (
    <C3Box>
        <C3DropdownButton {...args} primary className={'b-m-5'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3DropdownButton>

        <C3DropdownButton {...args} secondary className={'b-m-5'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3DropdownButton>

        <C3DropdownButton {...args} tertiary className={'b-m-5'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3DropdownButton>
        <C3DropdownButton {...args} orange className={'b-m-5'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3DropdownButton>

        <C3DropdownButton {...args} grey className={'b-m-5'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3DropdownButton>

        <C3DropdownButton {...args} error className={'b-m-5'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3DropdownButton>

        <C3DropdownButton {...args} success className={'b-m-5'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3DropdownButton>

        <C3DropdownButton {...args} warning className={'b-m-5'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3DropdownButton>

        <C3DropdownButton {...args} info className={'b-m-5'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3DropdownButton>
        <div className={'aaa'}></div>

    </C3Box>
);
export const Variants = VariantsTemplate.bind({});

const SizeTemplate: ComponentStory<typeof C3DropdownButton> = args => (
    <C3Box>
        <C3DropdownButton {...args} tertiary size={'xs'} className={'b-m-5'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3DropdownButton>
        <C3DropdownButton {...args} tertiary size={'s'} className={'b-m-5'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3DropdownButton>
        <C3DropdownButton {...args} tertiary size={'m'} className={'b-m-5'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3DropdownButton>
        <C3DropdownButton {...args} tertiary size={'l'} className={'b-m-5'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3DropdownButton>
    </C3Box>
);
export const DropdownSize = SizeTemplate.bind({});