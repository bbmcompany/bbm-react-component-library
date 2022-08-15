import { ComponentMeta, ComponentStory } from "@storybook/react";
import { C3Box } from "./Box";

export default {
    title: 'COMPONENTS/C3Box',
    component: C3Box,
    argTypes: {
    }
} as ComponentMeta<typeof C3Box>;

const C3BoxVariantsTemplate: ComponentStory<typeof C3Box> = args => (
    <div className={'box'}>
        <C3Box {...args}></C3Box>
    </div>
);
export const Box = C3BoxVariantsTemplate.bind({});