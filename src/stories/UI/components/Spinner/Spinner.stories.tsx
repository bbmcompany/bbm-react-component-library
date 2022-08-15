import {ComponentMeta, ComponentStory} from "@storybook/react";
import { C3Box } from "../Box/Box";
import {C3Spinner} from "./Spinner";
import './spinner-stories.scss'

export default {
    title: 'COMPONENTS/C3Spinner',
    component: C3Spinner,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: {
                    'x': 'xs',
                    's': 's',
                    'm': 'm',
                    'l': 'l',
                }
            }
        },

    }
} as ComponentMeta<typeof C3Spinner>;

const VariantsTemplate: ComponentStory<typeof C3Spinner> = args => (
    <C3Box>
        <C3Spinner {...args} white className={'b-mt-5 b-ml-15'}/>
        <C3Spinner {...args} primary className={'b-mt-5 b-ml-15'}/>
        <C3Spinner {...args} secondary className={'b-mt-5 b-ml-15'}/>
        <C3Spinner {...args} tertiary className={'b-mt-5 b-ml-15'}/>
        <C3Spinner {...args} orange className={'b-mt-5 b-ml-15'}/>
        <C3Spinner {...args} grey className={'b-mt-5 b-ml-15'}/>
        <C3Spinner {...args} error className={'b-mt-5 b-ml-15'}/>
        <C3Spinner {...args} success className={'b-mt-5 b-ml-15'}/>
        <C3Spinner {...args} warning className={'b-mt-5 b-ml-15'}/>
        <C3Spinner {...args} info className={'b-mt-5 b-ml-15'}/>

    </C3Box>

);
export const Variants = VariantsTemplate.bind({});

const DualRingVariantsTemplate: ComponentStory<typeof C3Spinner> = args => (
    <C3Box>
        <C3Spinner {...args} white dualRing className={'b-mt-5 b-ml-15'}/>
        <C3Spinner {...args} primary dualRing className={'b-mt-5 b-ml-15'}/>
        <C3Spinner {...args} secondary dualRing className={'b-mt-5 b-ml-15'}/>
        <C3Spinner {...args} tertiary dualRing className={'b-mt-5 b-ml-15'}/>
        <C3Spinner {...args} orange dualRing className={'b-mt-5 b-ml-15'}/>
        <C3Spinner {...args} grey dualRing className={'b-mt-5 b-ml-15'}/>
        <C3Spinner {...args} error dualRing className={'b-mt-5 b-ml-15'}/>
        <C3Spinner {...args} success dualRing className={'b-mt-5 b-ml-15'}/>
        <C3Spinner {...args} warning dualRing className={'b-mt-5 b-ml-15'}/>
        <C3Spinner {...args} info dualRing className={'b-mt-5 b-ml-15'}/>
    </C3Box>
);
export const DualRingVariants = DualRingVariantsTemplate.bind({});

const SpinnerSizeTemplate: ComponentStory<typeof C3Spinner> = args => (
    <C3Box>
        <C3Spinner {...args} primary size={'xs'} className={'b-mt-5 b-ml-15'}/>
        <C3Spinner {...args} secondary size={'s'} className={'b-mt-5 b-ml-15'}/>
        <C3Spinner {...args} tertiary size={'m'} className={'b-mt-5 b-ml-15'}/>
        <C3Spinner {...args} orange size={'l'} className={'b-mt-5 b-ml-15'}/>

        <C3Spinner {...args} primary size={'xs'} dualRing className={'b-mt-5 b-ml-15'}/>
        <C3Spinner {...args} secondary size={'s'} dualRing className={'b-mt-5 b-ml-15'}/>
        <C3Spinner {...args} tertiary size={'m'} dualRing className={'b-mt-5 b-ml-15'}/>
        <C3Spinner {...args} orange size={'l'} dualRing className={'b-mt-5 b-ml-15'}/>
    </C3Box>
);
export const SpinnerSize = SpinnerSizeTemplate.bind({});
