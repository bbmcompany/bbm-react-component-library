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
        <C3DropdownButton {...args} danger className={'b-m-5'}>
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

        <C3DropdownButton {...args} text className={'b-m-5'}>
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
        <C3DropdownButton {...args} tertiary size={'small'} className={'b-m-5'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3DropdownButton>
        <C3DropdownButton {...args} tertiary size={'medium'} className={'b-m-5'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3DropdownButton>
        <C3DropdownButton {...args} tertiary size={'large'} className={'b-m-5'}>
            <a href="#">SPORT & OUTDOOR</a>
            <a href="#">SHOES & BAGS</a>
            <a href="#">HOME & FURNITURE</a>
            <a href="#">DRAWING COUPON</a>
        </C3DropdownButton>
    </div>
);
export const DropdownSize = SizeTemplate.bind({});