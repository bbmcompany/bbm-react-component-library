import {ComponentMeta, ComponentStory} from "@storybook/react";
import {C3Skeleton} from "./Skeleton";

export default {
    title: 'COMPONENTS/C3Skeleton',
    component: C3Skeleton,
    argTypes: {}
} as ComponentMeta<typeof C3Skeleton>;

const VariantsTemplate: ComponentStory<typeof C3Skeleton> = args => (
    <div>
        <C3Skeleton {...args}></C3Skeleton>
    </div>
);
export const Variants = VariantsTemplate.bind({});