import {ComponentMeta, ComponentStory} from "@storybook/react";
import {C3Tooltip} from "./Tooltip";

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
                    'Small': 'small',
                    'Medium': 'medium',
                    'Large': 'large',
                }
            }
        },
        variant: {
            control: {
                type: 'select',
                options: {
                    'primary': 'primary',
                    'secondary': 'secondary',
                    'tertiary': 'tertiary',
                    'danger': 'danger',
                    'success': 'success',
                }
            }
        },
        display: {
            control:{
                type: 'select',
                options: {
                    'Bubble Left': 'left',
                    'Bubble Right': 'bottom',
                }
            }
        }
    }
} as ComponentMeta<typeof C3Tooltip>;

const UsageWithIconButtonTemplate: ComponentStory<typeof C3Tooltip> = args => (
    <div>
        <C3Tooltip {...args}/>
    </div>
);
export const UsageWithIconButton = UsageWithIconButtonTemplate.bind([])