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
        <C3Spinner {...args}/>
        <C3Spinner {...args} primary/>
        <C3Spinner {...args} secondary/>
        <C3Spinner {...args} tertiary/>
        <C3Spinner {...args} danger/>
        <C3Spinner {...args} success/>
    </div>

);
export const Variants = VariantsTemplate.bind({});

const DualRingVariantsTemplate: ComponentStory<typeof C3Spinner> = args => (
    <div className={'spinner'}>
        <C3Spinner {...args} dualRing/>
        <C3Spinner {...args} primary dualRing/>
        <C3Spinner {...args} secondary dualRing/>
        <C3Spinner {...args} tertiary dualRing/>
        <C3Spinner {...args} danger dualRing/>
        <C3Spinner {...args} success dualRing/>
    </div>
);
export const DualRingVariants = DualRingVariantsTemplate.bind({});

const SpinnerSizeTemplate: ComponentStory<typeof C3Spinner> = args => (
    <div className={'spinner'}>
        <C3Spinner {...args} size={'extra-small'}/>
        <C3Spinner {...args} size={'small'}/>
        <C3Spinner {...args} size={'medium'}/>
        <C3Spinner {...args} size={'large'}/>
    </div>
);
export const SpinnerSize = SpinnerSizeTemplate.bind({});
