import {ComponentMeta, ComponentStory} from "@storybook/react";
import { C3Box } from "../Box/Box";
import {C3Modal} from "./Modal";

export default {
    title: 'COMPONENTS/C3Modal',
    component: C3Modal,
    argTypes: {}
} as ComponentMeta<typeof C3Modal>

const func = () => {
    document.getElementById('wrapper')!.style.display = 'none';
}

const VariantsTemplate: ComponentStory<typeof C3Modal> = args => (
    <C3Box d={'flex'}>
        <C3Modal {...args} modalButtonFunction={() => func()} className={'b-mx-5'}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Donec ipsum mauris, dapibus nondas sapien in, tristique tristique lorem.</p>
            <p>In hac habitasse platea dictumst.</p>
        </C3Modal>
    </C3Box>
);
export const Variants = VariantsTemplate.bind({})