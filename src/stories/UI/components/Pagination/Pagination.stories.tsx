import {ComponentMeta, ComponentStory} from "@storybook/react";
import {C3Pagination} from "./Pagination";

export default {
    title: 'COMPONENTS/C3Pagination',
    component: C3Pagination,
    argTypes: {}

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

    <div className={'pagination'}>
        <C3Pagination {...args} count={7} nextPageFunction={nextPageFunction} previousPageFunction={previousPageFunction}
                      selectedPageFunction={selectedPageFunction}/>
    </div>
);
export const Variants = PaginationVariantsTemplate.bind({});