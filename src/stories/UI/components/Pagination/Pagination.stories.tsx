import {ComponentMeta, ComponentStory} from "@storybook/react";
import { C3Box } from "../Box/Box";
import {C3Pagination} from "./Pagination";

export default {
    title: 'COMPONENTS/C3Pagination',
    component: C3Pagination,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: {
                    'Small': 'small',
                    'Medium': 'medium',
                    'Large': 'large',
                    'X Large': 'x-large',
                    '2X Large': '2x-large',
                    '3X Large': '3x-large',
                }
            }
        },
    }

} as ComponentMeta<typeof C3Pagination>

const nextPageFunction = () => {
    console.log('next page');
}
const previousPageFunction = () => {
    console.log('previous page');
}
const selectedPageFunction = () => {
    console.log('selected page');
}
const PaginationVariantsTemplate: ComponentStory<typeof C3Pagination> = args => (

    <C3Box>
        <C3Pagination {...args} className={'b-m-5'}/>
        <C3Pagination {...args} count={7} nextPageFunction={nextPageFunction}
                      previousPageFunction={previousPageFunction}
                      selectedPageFunction={selectedPageFunction} className={'b-m-5'}/>
        <C3Pagination {...args} count={7} rounded outlined className={'b-m-5'}/>
        <C3Pagination {...args} count={7} outlined className={'b-m-5'}/>
    </C3Box>
);
export const Variants = PaginationVariantsTemplate.bind({});