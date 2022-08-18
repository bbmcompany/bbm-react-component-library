import {ComponentMeta, ComponentStory} from "@storybook/react";
import {C3Box} from "../Box/Box";
import {C3Alert} from "./Alert";
import './alert-stories.scss'

export default {
    title: 'COMPONENTS/C3Alert',
    component: C3Alert,
    argTypes: {
        icon: {
            control: {
                type: 'select',
                options: ['academy', 'add_note', 'add_photo', 'add_product', 'alert', 'archive', 'arrow-right', 'left-arrow', 'arrow-up', 'arrow_down',
                    'attach', 'award', 'back', 'back_fill', 'change', 'close', 'question', 'exclamation'
                ]
            }
        }
    }
} as ComponentMeta<typeof C3Alert>;

const VariantsTemplate: ComponentStory<typeof C3Alert> = args => (
    <C3Box d={'flex'} displaydirection={'column'} className={'alert'}>
        <C3Alert {...args} className={'b-border-5'}/>
        <C3Alert className={'b-border-5'}>
            <li>
                <p>Item 1</p>
                <p>Item 2</p>
                <p>Item 3</p>
            </li>
        </C3Alert>
        <C3Alert icon={'academy'} className={'b-border-5'}>
            <li>
                <p>Item 1</p>
                <p>Item 2</p>
                <p>Item 3</p>
            </li>
        </C3Alert>
        <C3Alert {...args} secondary className={'b-border-5'}/>
        <C3Alert {...args} tertiary className={'b-border-5'}/>
        <C3Alert {...args} orange className={'b-border-5'}/>
        <C3Alert {...args} grey className={'b-border-5'}/>
        <C3Alert {...args} error className={'b-border-5'}/>
        <C3Alert {...args} success className={'b-border-5'}/>
        <C3Alert {...args} warning className={'b-border-5'}/>
        <C3Alert {...args} info className={'b-border-5'}/>
    </C3Box>
);
export const Variants = VariantsTemplate.bind({});

const CustomTemplate: ComponentStory<typeof C3Alert> = args => (
    <C3Box d={'flex'} displaydirection={'column'} className={'alert'}>
        <C3Alert {...args} className={'b-border-5'}/>
    </C3Box>
);
export const Custom = CustomTemplate.bind({});

const WithChildTemplate: ComponentStory<typeof C3Alert> = args => (
    <C3Box d={'flex'} displaydirection={'column'} className={'alert'}>
        <C3Alert className={'b-border-5'}>BBM React Component Libray Alert With Child</C3Alert>
        <C3Alert className={'b-border-5'} warning>
            <p>Item 1</p>
            <p>Item 2</p>
            <p>Item 3</p>
        </C3Alert>
        <C3Alert className={'b-border-5'} tertiary>
            <li>
                <p>Item 1</p>
                <p>Item 2</p>
                <p>Item 3</p>
            </li>
        </C3Alert>
        <C3Alert icon={'academy'} className={'b-border-5'} error>
            <li>
                <p>Item 1</p>
                <p>Item 2</p>
                <p>Item 3</p>
            </li>
        </C3Alert>
    </C3Box>
);
export const WithChild = WithChildTemplate.bind({});

const WithIconTemplate: ComponentStory<typeof C3Alert> = args => (
    <C3Box d={'flex'} displaydirection={'column'} className={'alert'}>
        <C3Alert icon={'academy'} className={'b-border-5'}>Academy</C3Alert>
        <C3Alert icon={'alert'} error>Error</C3Alert>
        <C3Alert icon={'exclamation'} warning>Warning</C3Alert>
        <C3Alert icon={'award'} success>Success</C3Alert>
        <C3Alert icon={'question'} info>Info</C3Alert>
        <C3Alert icon={'academy'} className={'b-border-5'}>
            <li>
                <p>Item 1</p>
                <p>Item 2</p>
                <p>Item 3</p>
            </li>
        </C3Alert>
    </C3Box>
);
export const WithIcon = WithIconTemplate.bind({});