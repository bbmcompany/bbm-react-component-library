import {ComponentMeta, ComponentStory} from "@storybook/react";
import {C3Pagination} from "./Pagination";

export default {
    title: 'COMPONENTS/C3Pagination',
    component: C3Pagination,
    argTypes: {}

} as ComponentMeta<typeof C3Pagination>

const PaginationVariantsTemplate: ComponentStory<typeof C3Pagination> = args => (
    <div className={'pagination'}>
        <C3Pagination {...args} ></C3Pagination>
    </div>
);
export const Variants = PaginationVariantsTemplate.bind({});