import { ComponentMeta, ComponentStory } from "@storybook/react";
import { C3Radio } from "./Radio";
import './radio-stories.scss'
export default {
    title:'COMPONENTS/C3Radio',
    component:C3Radio,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: {
                    'Small': 'small',
                    'Medium': 'medium',
                    'Large': 'large',
                }
            }
        },
        labelPlacement: {
            control: {
                type: 'select',
                options: {
                    'Start': 'start',
                    'Top': 'top',
                    'Bottom': 'bottom',
                    'End': 'end',
                }
            }
        }
    }
} as ComponentMeta<typeof C3Radio>;

const VariantsTemplate: ComponentStory<typeof C3Radio> = args => (
    <div className={'radio'}>
        <C3Radio{...args} className={'b-m-5'}>Default</C3Radio>
    </div>
);

export const Variants = VariantsTemplate.bind({});

