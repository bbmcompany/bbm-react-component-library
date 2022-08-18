import {ComponentMeta, ComponentStory} from "@storybook/react";
import {C3Box} from "../Box/Box";
import {C3ClosableAlert} from "./ClosableAlert";

export default {
    title: 'COMPONENTS/C3ClosableAlert',
    component: C3ClosableAlert,
    argTypes: {
        icon: {
            control: {
                type: 'select',
                options: ['academy', 'add_note', 'add_photo', 'add_product', 'Closablealert', 'archive', 'arrow-right', 'left-arrow', 'arrow-up', 'arrow_down',
                    'attach', 'award', 'back', 'back_fill', 'change', 'close', 'question', 'exclamation'
                ]
            }
        }
    }
} as ComponentMeta<typeof C3ClosableAlert>;

const CustomTemplate: ComponentStory<typeof C3ClosableAlert> = args => (
    <C3Box d={'flex'} displaydirection={'column'} className={'Closablealert'}>
        <C3ClosableAlert {...args} className={'b-border-5'}/>
    </C3Box>
);
export const Custom = CustomTemplate.bind({});

const WithIconTemplate: ComponentStory<typeof C3ClosableAlert> = args => (
    <C3Box d={'flex'} displaydirection={'column'} className={'Closablealert'}>
        <C3ClosableAlert {...args} className={'b-border-5'} icon={'award'}/>
    </C3Box>
);
export const WithIcon = WithIconTemplate.bind({});

const WithIconListTemplate: ComponentStory<typeof C3ClosableAlert> = args => (
    <C3Box d={'flex'} displaydirection={'column'} className={'Closablealert'}>
        <C3ClosableAlert icon={'academy'} className={'b-border-5'}>
            <li>
                <p>Item 1</p>
                <p>Item 2</p>
                <p>Item 3</p>
            </li>
        </C3ClosableAlert>
    </C3Box>
);
export const WithIconList = WithIconListTemplate.bind({});

const WithListTemplate: ComponentStory<typeof C3ClosableAlert> = args => (
    <C3Box d={'flex'} displaydirection={'column'} className={'Closablealert'}>
        <C3ClosableAlert className={'b-border-5'}>
            <li>
                <p>Item 1</p>
                <p>Item 2</p>
                <p>Item 3</p>
            </li>
        </C3ClosableAlert>
    </C3Box>
);
export const WithList = WithListTemplate.bind({});
