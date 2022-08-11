import {ComponentMeta, ComponentStory} from "@storybook/react";
import {C3Switch} from "./Switch";

export default {
    title: 'COMPONENTS/C3Switch',
    component: C3Switch,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: {
                    'xs': 'xs',
                    's': 's',
                    'm': 'm',
                    'l': 'l',
                }
            }
        },
    }
} as ComponentMeta<typeof C3Switch>;

const VariantsTemplate: ComponentStory<typeof C3Switch> = args => (
    <div>
        <C3Switch {...args} className={'b-m-15'}/>
        <C3Switch {...args} white className={'b-m-15'}/>
        <C3Switch {...args}  primary className={'b-m-15'}/>
        <C3Switch {...args} secondary className={'b-m-15'}/>
        <C3Switch {...args} tertiary className={'b-m-15'}/>
        <C3Switch {...args} orange className={'b-m-15'}/>
        <C3Switch {...args} grey className={'b-m-15'}/>
        <C3Switch {...args} error className={'b-m-15'}/>
        <C3Switch {...args} success className={'b-m-15'}/>
        <C3Switch {...args} warning className={'b-m-15'}/>
        <C3Switch {...args} info className={'b-m-15'}/>
    </div>
);
export const Variants = VariantsTemplate.bind({});

const SwitchSizeTemplate: ComponentStory<typeof C3Switch> = args => (
    <div>
        <C3Switch {...args} size={'xs'} className={'b-m-15'}/>
        <C3Switch {...args} size={'s'} className={'b-m-15'}/>
        <C3Switch {...args} size={'m'} className={'b-m-15'}/>
        <C3Switch {...args} size={'l'} className={'b-m-15'}/>
    </div>
);
export const SwitchSize = SwitchSizeTemplate.bind({});