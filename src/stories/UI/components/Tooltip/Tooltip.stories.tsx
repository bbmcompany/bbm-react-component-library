import {ComponentMeta, ComponentStory} from "@storybook/react";
import {C3Tooltip} from "./Tooltip";
import './tooltip-stories.scss'

export default {
    title: 'COMPONENTS/C3Tooltip',
    component: C3Tooltip,
    argTypes: {
        icon: {
            control: {
                type: 'select',
                options: ['academy', 'add_note', 'add_photo', 'add_product', 'alert', 'archive', 'arrow-right', 'left-arrow', 'arrow-up', 'arrow_down',
                    'attach', 'award', 'back', 'back_fill', 'change', 'close', 'question', 'exclamation'
                ]
            }
        },
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
} as ComponentMeta<typeof C3Tooltip>;

const VariantsTemplate: ComponentStory<typeof C3Tooltip> = args => (
    <div className={'tooltip'}>
        <C3Tooltip {...args} transparent/>
        <C3Tooltip {...args} className={'b-border-100'}/>
        <C3Tooltip {...args} className={'b-border-4'}/>
        <C3Tooltip {...args}/>
        <C3Tooltip {...args} primary/>
        <C3Tooltip {...args} secondary/>
        <C3Tooltip {...args} tertiary/>
        <C3Tooltip {...args} orange/>
        <C3Tooltip {...args} grey/>
        <C3Tooltip {...args} error/>
        <C3Tooltip {...args} success/>
        <C3Tooltip {...args} warning/>
        <C3Tooltip {...args} info/>
    </div>
);
export const Variants = VariantsTemplate.bind([])

const CustomTemplate: ComponentStory<typeof C3Tooltip> = args => (
    <div>
        <C3Tooltip {...args} className={' b-border-4'}/>
    </div>
);
export const Custom = CustomTemplate.bind([])