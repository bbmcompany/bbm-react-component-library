import {ComponentMeta, ComponentStory} from "@storybook/react";
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
                    'Extra Small': 'extra-small',
                    'Small': 'small',
                    'Medium': 'medium',
                    'Large': 'large',
                }
            }
        },

    }
} as ComponentMeta<typeof C3Spinner>;

const VariantsTemplate: ComponentStory<typeof C3Spinner> = args => (
    <div className={'spinner'}>
        <C3Spinner {...args} className={'b-mt-5 b-ml-15'}/>
        <C3Spinner {...args} primary className={'b-mt-5 b-ml-15'}/>
        <C3Spinner {...args} secondary className={'b-mt-5 b-ml-15'}/>
        <C3Spinner {...args} tertiary className={'b-mt-5 b-ml-15'}/>
        <C3Spinner {...args} danger className={'b-mt-5 b-ml-15'}/>
        <C3Spinner {...args} success className={'b-mt-5 b-ml-15'}/>
    </div>

);
export const Variants = VariantsTemplate.bind({});

const DualRingVariantsTemplate: ComponentStory<typeof C3Spinner> = args => (
    <div className={'spinner'}>
        <C3Spinner {...args} dualRing className={'b-mt-5 b-ml-15'}/>
        <C3Spinner {...args} primary dualRing className={'b-mt-5 b-ml-15'}/>
        <C3Spinner {...args} secondary dualRing className={'b-mt-5 b-ml-15'}/>
        <C3Spinner {...args} tertiary dualRing className={'b-mt-5 b-ml-15'}/>
        <C3Spinner {...args} danger dualRing className={'b-mt-5 b-ml-15'}/>
        <C3Spinner {...args} success dualRing className={'b-mt-5 b-ml-15'}/>
    </div>
);
export const DualRingVariants = DualRingVariantsTemplate.bind({});

const SpinnerSizeTemplate: ComponentStory<typeof C3Spinner> = args => (
    <div className={'spinner'}>
        <C3Spinner {...args} size={'extra-small'} className={'b-mt-5 b-ml-15'}/>
        <C3Spinner {...args} size={'small'} className={'b-mt-5 b-ml-15'}/>
        <C3Spinner {...args} size={'medium'} className={'b-mt-5 b-ml-15'}/>
        <C3Spinner {...args} size={'large'} className={'b-mt-5 b-ml-15'}/>
    </div>
);
export const SpinnerSize = SpinnerSizeTemplate.bind({});
