import {ComponentMeta, ComponentStory} from "@storybook/react";
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
    <div className={'modal'}>
        <div className={'modal-variants b-m-10'}>
            <C3Modal {...args} modalButtonFunction={() => func()}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Donec ipsum mauris, dapibus non sapien in, tristique tristique lorem.</p>
                <p>In hac habitasse platea dictumst.</p>
            </C3Modal>
        </div>

        <div className={'modal-variants b-m-10'}>
            <C3Modal {...args} modalButtonFunction={() => func()} modalButtonText={'Close'}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Donec ipsum mauris, dapibus non sapien in, tristique tristique lorem.</p>
                <p>In hac habitasse platea dictumst.</p>
            </C3Modal>
        </div>
    </div>
);
export const Variants = VariantsTemplate.bind({})