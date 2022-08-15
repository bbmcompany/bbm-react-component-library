import {C3Button} from "./Button";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import './button-stories.scss';
import { C3Box } from "../Box/Box";

export default {
    title: 'COMPONENTS/C3Button',
    component: C3Button,
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
        icon: {
            control: {
                type: 'select',
                options: ['academy', 'add_note', 'add_photo', 'add_product', 'alert', 'archive', 'arrow-right', 'left-arrow', 'arrow-up', 'arrow_down',
                    'attach', 'award', 'back', 'back_fill', 'change', 'close', 'question', 'exclamation'
                ]
            }
        }
    },

} as ComponentMeta<typeof C3Button>;

const VariantsTemplate: ComponentStory<typeof C3Button> = args => (
    <C3Box d={'flex'} className={'button'}>
        <C3Button {...args} primary className={'b-m-5'}>Primary</C3Button>
        <C3Button {...args} secondary className={'b-m-5'}>Secondary</C3Button>
        <C3Button {...args} tertiary className={'b-m-5'}>Tertiary</C3Button>
        <C3Button {...args} text className={'b-m-5'}>Tertiary</C3Button>
        <C3Button {...args} orange className={'b-m-5'}>Orange</C3Button>
        <C3Button {...args} grey className={'b-m-5'}>Grey</C3Button>
        <C3Button {...args} error className={'b-m-5'}>Error</C3Button>
        <C3Button {...args} success className={'b-m-5'}>Success</C3Button>
        <C3Button {...args} warning className={'b-m-5'}>Warning</C3Button>
        <C3Button {...args} info className={'b-m-5'}>Info</C3Button>
        <C3Button {...args} className={'b-m-5'}>Default</C3Button>
    </C3Box>
);
export const Variants = VariantsTemplate.bind({});
const CustomTemplate: ComponentStory<typeof C3Button> = args => (
    <C3Box d={'flex'} className={'button'}>
        <C3Button {...args} primary>Custom</C3Button>
    </C3Box>
);
export const Custom = CustomTemplate.bind({});

const RoundedTemplate: ComponentStory<typeof C3Button> = args => (
    <C3Box d={'flex'} displaydirection={'column'}>
        <C3Box d={'flex'} className={'button'}>
            <C3Button {...args} primary className={'b-m-5'}>Radius 0</C3Button>
            <C3Button {...args} info className={'b-m-5 b-border-1'}>Radius 1</C3Button>
            <C3Button {...args} secondary className={'b-m-5 b-border-2'}>Radius 2</C3Button>
            <C3Button {...args} warning className={'b-m-5 b-border-3'}>Radius 3</C3Button>
            <C3Button {...args} tertiary className={'b-m-5 b-border-4'}>Radius 4</C3Button>
            <C3Button {...args} success className={'b-m-5 b-border-32'}>Radius 32</C3Button>
        </C3Box>
        <C3Box d={'flex'} className={'button'}>
            <C3Button {...args} primary className={'b-m-5 b-border-t-5'}>Radius Top</C3Button>
            <C3Button {...args} info className={'b-m-5 b-border-b-5'}>Radius Bottom</C3Button>
            <C3Button {...args} secondary className={'b-m-5 b-border-tl-5'}>Radius Top Left</C3Button>
            <C3Button {...args} warning className={'b-m-5 b-border-tr-5'}>Radius Top Right</C3Button>
            <C3Button {...args} tertiary className={'b-m-5 b-border-bl-5'}>Radius Bottom Left</C3Button>
            <C3Button {...args} success className={'b-m-5 b-border-br-5'}>Radius Bottom Right</C3Button>
        </C3Box>
    </C3Box>
);
export const Rounded = RoundedTemplate.bind({});

const TypesTemplate: ComponentStory<typeof C3Button> = args => (
    <C3Box d={'flex'} className={'button'}>
        <C3Button {...args} orange className={'b-m-5'}>Contained</C3Button>
        <C3Button {...args} orange outline className={'b-m-5'}>Outline</C3Button>
        <C3Button {...args} orange className={'b-m-5'}>Default</C3Button>
        <C3Button {...args} orange icon={'academy'} className={'b-m-5'}>Icon</C3Button>
        <C3Button {...args} orange iconButton className={'b-m-5'}/>
    </C3Box>
);
export const Types = TypesTemplate.bind({});

const ButtonSizeTemplate: ComponentStory<typeof C3Button> = args => (
    <C3Box d={'flex'} className={'button'}>
        <C3Button {...args} orange size={'xs'} className={'b-m-5'}>X Small</C3Button>
        <C3Button {...args} orange size={'s'} className={'b-m-5'}>Small</C3Button>
        <C3Button {...args} orange size={'m'} className={'b-m-5'}>Medium</C3Button>
        <C3Button {...args} orange size={'l'} className={'b-m-5'}>Large</C3Button>
    </C3Box>
);
export const ButtonSize = ButtonSizeTemplate.bind({});

const ContainedButtonsTemplate: ComponentStory<typeof C3Button> = args => (
    <C3Box d={'flex'} className={'button'}>
        <C3Button {...args} primary className={'b-m-5'}>Primary</C3Button>
        <C3Button {...args} secondary className={'b-m-5'}>Secondary</C3Button>
        <C3Button {...args} tertiary className={'b-m-5'}>Tertiary</C3Button>
        <C3Button {...args} text className={'b-m-5'}>Tertiary</C3Button>
        <C3Button {...args} orange className={'b-m-5'}>Orange</C3Button>
        <C3Button {...args} grey className={'b-m-5'}>Grey</C3Button>
        <C3Button {...args} error className={'b-m-5'}>Error</C3Button>
        <C3Button {...args} success className={'b-m-5'}>Success</C3Button>
        <C3Button {...args} warning className={'b-m-5'}>Warning</C3Button>
        <C3Button {...args} info className={'b-m-5'}>Info</C3Button>
        <C3Button {...args} className={'b-m-5'}>Default</C3Button>
    </C3Box>
);
export const ContainedButtons = ContainedButtonsTemplate.bind({});

const OutlinedButtonTemplate: ComponentStory<typeof C3Button> = args => (
    <C3Box d={'flex'} className={'button'}>
        <C3Button {...args} primary outline className={'b-m-5'}>Primary</C3Button>
        <C3Button {...args} secondary outline className={'b-m-5'}>Secondary</C3Button>
        <C3Button {...args} tertiary outline className={'b-m-5'}>Tertiary</C3Button>
        <C3Button {...args} orange outline className={'b-m-5'}>Orange</C3Button>
        <C3Button {...args} grey outline className={'b-m-5'}>Grey</C3Button>
        <C3Button {...args} error outline className={'b-m-5'}>Error</C3Button>
        <C3Button {...args} success outline className={'b-m-5'}>Success</C3Button>
        <C3Button {...args} warning outline className={'b-m-5'}>Warning</C3Button>
        <C3Button {...args} info outline className={'b-m-5'}>Info</C3Button>
        <C3Button {...args} outline className={'b-m-5'}>Default</C3Button>
    </C3Box>
);
export const OutlinedButtons = OutlinedButtonTemplate.bind({});

const TextButtonsTemplate: ComponentStory<typeof C3Button> = args => (
    <C3Box d={'flex'} className={'button'}>
        <C3Button {...args} text className={'b-m-5'}>Text C3Button</C3Button>
    </C3Box>
);
export const TextButtons = TextButtonsTemplate.bind({});

const IconButtonsTemplate: ComponentStory<typeof C3Button> = args => (
    <C3Box d={'flex'} className={'button'}>
        <C3Button {...args} primary icon={'attach'} className={'b-m-5'}>Primary</C3Button>
        <C3Button {...args} secondary icon={'attach'} className={'b-m-5'}>Secondary</C3Button>
        <C3Button {...args} tertiary icon={'attach'} className={'b-m-5'}>Tertiary</C3Button>
        <C3Button {...args} text icon={'attach'} className={'b-m-5'}>Tertiary</C3Button>
        <C3Button {...args} orange icon={'attach'} className={'b-m-5'}>Orange</C3Button>
        <C3Button {...args} grey icon={'attach'} className={'b-m-5'}>Grey</C3Button>
        <C3Button {...args} error icon={'attach'} className={'b-m-5'}>Error</C3Button>
        <C3Button {...args} success icon={'attach'} className={'b-m-5'}>Success</C3Button>
        <C3Button {...args} warning icon={'attach'} className={'b-m-5'}>Warning</C3Button>
        <C3Button {...args} info icon={'attach'} className={'b-m-5'}>Info</C3Button>
        <C3Button {...args} icon={'attach'} className={'b-m-5'}>Default</C3Button>
    </C3Box>
);
export const IconButtons = IconButtonsTemplate.bind({});

const OnlyIconButtonsTemplate: ComponentStory<typeof C3Button> = args => (
    <C3Box d={'flex'} className={'button'}>
        <C3Button {...args} primary iconButton className={'b-m-5'}>Primary</C3Button>
        <C3Button {...args} secondary iconButton className={'b-m-5'}>Secondary</C3Button>
        <C3Button {...args} tertiary iconButton className={'b-m-5'}>Tertiary</C3Button>
        <C3Button {...args} text iconButton className={'b-m-5'}>Tertiary</C3Button>
        <C3Button {...args} orange iconButton className={'b-m-5'}>Orange</C3Button>
        <C3Button {...args} grey iconButton className={'b-m-5'}>Grey</C3Button>
        <C3Button {...args} error iconButton className={'b-m-5'}>Error</C3Button>
        <C3Button {...args} success iconButton className={'b-m-5'}>Success</C3Button>
        <C3Button {...args} warning iconButton className={'b-m-5'}>Warning</C3Button>
        <C3Button {...args} info iconButton className={'b-m-5'}>Info</C3Button>
        <C3Button {...args} iconButton className={'b-m-5'}>Default</C3Button>
    </C3Box>
);
export const OnlyIconButtons = OnlyIconButtonsTemplate.bind({});
const TransparentButtonsTemplate: ComponentStory<typeof C3Button> = args => (
    <C3Box d={'flex'} className={'button'}>
        <C3Button {...args} primary transparent className={'b-m-5'}>Primary</C3Button>
        <C3Button {...args} secondary transparent className={'b-m-5'}>Secondary</C3Button>
        <C3Button {...args} tertiary transparent className={'b-m-5'}>Tertiary</C3Button>
        <C3Button {...args} orange transparent className={'b-m-5'}>Orange</C3Button>
        <C3Button {...args} grey transparent className={'b-m-5'}>Grey</C3Button>
        <C3Button {...args} error transparent className={'b-m-5'}>Error</C3Button>
        <C3Button {...args} success transparent className={'b-m-5'}>Success</C3Button>
        <C3Button {...args} warning transparent className={'b-m-5'}>Warning</C3Button>
        <C3Button {...args} info transparent className={'b-m-5'}>Info</C3Button>
        <C3Button {...args} transparent className={'b-m-5'}>Default</C3Button>
    </C3Box>
);
export const TransparentButtons = TransparentButtonsTemplate.bind({});

const ProgressButtonsTemplate: ComponentStory<typeof C3Button> = args => (
    <C3Box d={'flex'} className={'button'}>
        <C3Button {...args} primary progress className={'b-m-5'}>Primary</C3Button>
        <C3Button {...args} secondary progress className={'b-m-5'}>Secondary</C3Button>
        <C3Button {...args} tertiary progress className={'b-m-5'}>Tertiary</C3Button>
        <C3Button {...args} text progress className={'b-m-5'}>Text</C3Button>
        <C3Button {...args} orange progress className={'b-m-5'}>Orange</C3Button>
        <C3Button {...args} grey progress className={'b-m-5'}>Grey</C3Button>
        <C3Button {...args} error progress className={'b-m-5'}>Error</C3Button>
        <C3Button {...args} success progress className={'b-m-5'}>Success</C3Button>
        <C3Button {...args} warning progress className={'b-m-5'}>Warning</C3Button>
        <C3Button {...args} info progress className={'b-m-5'}>Info</C3Button>
        <C3Button {...args} progress className={'b-m-5'}>Default</C3Button>
    </C3Box>
);
export const ProgressButtons = ProgressButtonsTemplate.bind({});

const ProgressTextButtonsTemplate: ComponentStory<typeof C3Button> = args => (
    <C3Box d={'flex'} className={'button'}>
        <C3Button {...args} primary isProgressText progressText={'Primary...'} className={'b-m-5'}>Primary</C3Button>
        <C3Button {...args} secondary isProgressText progressText={'Secondary...'}
                  className={'b-m-5'}>Secondary</C3Button>
        <C3Button {...args} tertiary isProgressText progressText={'Tertiary...'} className={'b-m-5'}>Tertiary</C3Button>
        <C3Button {...args} text isProgressText progressText={'Text...'} className={'b-m-5'}>Text</C3Button>
        <C3Button {...args} orange isProgressText progressText={'Orange...'} className={'b-m-5'}>Orange</C3Button>
        <C3Button {...args} grey isProgressText progressText={'Grey...'} className={'b-m-5'}>Grey</C3Button>
        <C3Button {...args} error isProgressText progressText={'error...'} className={'b-m-5'}>Error</C3Button>
        <C3Button {...args} success isProgressText progressText={'Success...'} className={'b-m-5'}>Success</C3Button>
        <C3Button {...args} warning isProgressText progressText={'Warning...'} className={'b-m-5'}>Warning</C3Button>
        <C3Button {...args} info isProgressText progressText={'Info...'} className={'b-m-5'}>Info</C3Button>
        <C3Button {...args} isProgressText progressText={'Default...'} className={'b-m-5'}>Default</C3Button>
    </C3Box>
);
export const ProgressTextButtons = ProgressTextButtonsTemplate.bind({});

const DisabledButtonsTemplate: ComponentStory<typeof C3Button> = args => (
    <C3Box d={'flex'} className={'button'}>
        <C3Button {...args} primary disabled className={'b-m-5'}>Primary</C3Button>
        <C3Button {...args} secondary disabled className={'b-m-5'}>Secondary</C3Button>
        <C3Button {...args} tertiary disabled className={'b-m-5'}>Tertiary</C3Button>
        <C3Button {...args} text disabled className={'b-m-5'}>Text</C3Button>
        <C3Button {...args} orange disabled className={'b-m-5'}>Orange</C3Button>
        <C3Button {...args} grey disabled className={'b-m-5'}>Grey</C3Button>
        <C3Button {...args} error disabled className={'b-m-5'}>Error</C3Button>
        <C3Button {...args} success disabled className={'b-m-5'}>Success</C3Button>
        <C3Button {...args} warning disabled className={'b-m-5'}>Warning</C3Button>
        <C3Button {...args} info disabled className={'b-m-5'}>Info</C3Button>
        <C3Button {...args} disabled className={'b-m-5'}>Default</C3Button>
    </C3Box>
);
export const DisabledButtons = DisabledButtonsTemplate.bind({});

const DisplayButtonTemplate: ComponentStory<typeof C3Button> = args => (
    <div>
        <C3Button {...args} orange display={'block'} className={'b-m-5'}>Block</C3Button>
        <C3Button {...args} info display={'inline-block'} className={'b-m-5'}>Inlıne Block</C3Button>
        <C3Button {...args} info display={'inline-block'} className={'b-m-5'}>Inlıne Block</C3Button>
        <C3Button {...args} error display={'flex'} className={'b-m-5'}>Flex</C3Button>
        <C3Button {...args} error display={'flex'} className={'b-m-5'}>Flex</C3Button>
    </div>
);
export const DisplayButton = DisplayButtonTemplate.bind({});

const MaxWidthButtonsTemplate: ComponentStory<typeof C3Button> = args => (
    <C3Box d={'flex'} className={'button'}>
        <C3Button {...args} orange className={'b-m-5'}>A very long sentence</C3Button>
        <C3Button {...args} orange maxWidth={120} className={'b-m-5'}>A very long sentence</C3Button>
        <C3Button {...args} orange maxWidth={100} className={'b-m-5'}>A very long sentence</C3Button>
    </C3Box>
);
export const MaxWidthButtons = MaxWidthButtonsTemplate.bind({});