import {C3Button} from "./Button";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'COMPONENTS/C3Button',
    component: C3Button,
    argTypes: {

        size: {
            control: {
                type: 'select',
                options: {
                    'Small': 'small',
                    'Medium': 'medium',
                    'Large': 'large',
                    'X Large': 'x-large',
                    '2X Large': '2x-large',
                    '3X Large': '3x-large',
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
    <div>
        <C3Button {...args} primary>Primary</C3Button>
        <C3Button {...args} secondary>Secondary</C3Button>
        <C3Button {...args} tertiary>Tertiary</C3Button>
        <C3Button {...args} danger>Danger</C3Button>
        <C3Button {...args} success>Success</C3Button>
        <C3Button {...args} >Default</C3Button>

    </div>

);
export const Variants = VariantsTemplate.bind({});

const TypesTemplate: ComponentStory<typeof C3Button> = args => (
    <div>
        <C3Button {...args} primary>Contained</C3Button>
        <C3Button {...args} primary outline>Outline</C3Button>
        <C3Button {...args} primary>Default</C3Button>
        <C3Button {...args} primary icon={'academy'}>Icon</C3Button>
        <C3Button {...args} primary iconButton>Default</C3Button>
    </div>
);
export const Types = TypesTemplate.bind({});

const ButtonSizeTemplate: ComponentStory<typeof C3Button> = args => (
    <div>
        <C3Button {...args} primary size={'small'}>Small</C3Button>
        <C3Button {...args} primary size={'medium'}>Medium</C3Button>
        <C3Button {...args} primary size={'large'}>Large</C3Button>
        <C3Button {...args} primary>Default</C3Button>
    </div>
);
export const ButtonSize = ButtonSizeTemplate.bind({});

const ContainedButtonsTemplate: ComponentStory<typeof C3Button> = args => (
    <div>
        <C3Button {...args} primary>Primary</C3Button>
        <C3Button {...args} secondary>Secondary</C3Button>
        <C3Button {...args} tertiary>Tertiary</C3Button>
        <C3Button {...args} danger>Danger</C3Button>
        <C3Button {...args} success>Success</C3Button>
        <C3Button {...args} >Default</C3Button>
    </div>
);
export const ContainedButtons = ContainedButtonsTemplate.bind({});

const OutlinedButtonTemplate: ComponentStory<typeof C3Button> = args => (
    <div>
        <C3Button {...args} primary outline>Primary</C3Button>
        <C3Button {...args} secondary outline>Secondary</C3Button>
        <C3Button {...args} tertiary outline>Tertiary</C3Button>
        <C3Button {...args} danger outline>Danger</C3Button>
        <C3Button {...args} success outline>Success</C3Button>
        <C3Button {...args} outline>Default</C3Button>
    </div>
);
export const OutlinedButtons = OutlinedButtonTemplate.bind({});

const TextButtonsTemplate: ComponentStory<typeof C3Button> = args => (
    <div>
        <C3Button {...args} text>Text C3Button</C3Button>
    </div>
);
export const TextButtons = TextButtonsTemplate.bind({});

const IconButtonsTemplate: ComponentStory<typeof C3Button> = args => (
    <div>
        <C3Button {...args} primary icon={'academy'}>Primary Icon</C3Button>
        <C3Button {...args} secondary icon={'attach'}>Secondary Icon</C3Button>
        <C3Button {...args} tertiary icon={'account'}>Tertiary Icon</C3Button>
    </div>
);
export const IconButtons = IconButtonsTemplate.bind({});

const OnlyIconButtonsTemplate: ComponentStory<typeof C3Button> = args => (
    <div>
        <C3Button {...args} primary iconButton/>
        <C3Button {...args} secondary iconButton/>
        <C3Button {...args} tertiary iconButton/>
    </div>
);
export const OnlyIconButtons = OnlyIconButtonsTemplate.bind({});
const TransparentButtonsTemplate: ComponentStory<typeof C3Button> = args => (
    <div>
        <C3Button {...args} primary transparent>Primary</C3Button>
        <C3Button {...args} secondary transparent>Secondary</C3Button>
        <C3Button {...args} tertiary transparent>Tertiary</C3Button>
        <C3Button {...args} danger transparent>Danger</C3Button>
        <C3Button {...args} success transparent>Success</C3Button>
        <C3Button {...args} transparent>Default</C3Button>
    </div>
);
export const TransparentButtons = TransparentButtonsTemplate.bind({});

const ProgressButtonsTemplate: ComponentStory<typeof C3Button> = args => (
    <div>
        <C3Button {...args} primary progress>Primary</C3Button>
        <C3Button {...args} secondary progress>Secondary</C3Button>
        <C3Button {...args} tertiary progress>Tertiary</C3Button>
        <C3Button {...args} danger progress>Danger</C3Button>
        <C3Button {...args} success progress>Success</C3Button>
        <C3Button {...args} progress>Default</C3Button>
    </div>
);
export const ProgressButtons = ProgressButtonsTemplate.bind({});

const ProgressTextButtonsTemplate: ComponentStory<typeof C3Button> = args => (
    <div>
        <C3Button {...args} primary isProgressText progressText={'Primary...'}>Primary</C3Button>
        <C3Button {...args} secondary isProgressText progressText={'Secondary...'}>Secondary</C3Button>
        <C3Button {...args} tertiary isProgressText progressText={'Tertiary...'}>Tertiary</C3Button>
        <C3Button {...args} danger isProgressText progressText={'Danger...'}>Danger</C3Button>
        <C3Button {...args} success isProgressText progressText={'Success...'}>Success</C3Button>
        <C3Button {...args} isProgressText>Default</C3Button>
    </div>
);
export const ProgressTextButtons = ProgressTextButtonsTemplate.bind({});

const DisabledButtonsTemplate: ComponentStory<typeof C3Button> = args => (
    <div>
        <C3Button {...args} primary disabled>Primary</C3Button>
        <C3Button {...args} secondary disabled>Secondary</C3Button>
        <C3Button {...args} tertiary disabled>Tertiary</C3Button>
        <C3Button {...args} danger disabled>Danger</C3Button>
        <C3Button {...args} success disabled>Success</C3Button>
        <C3Button {...args} disabled>Default</C3Button>
    </div>
);
export const DisabledButtons = DisabledButtonsTemplate.bind({});

const DisplayButtonTemplate: ComponentStory<typeof C3Button> = args => (
    <div>
        <C3Button {...args} primary display={'block'}>Block</C3Button>
        <C3Button {...args} success display={'inline-block'}>Inlıne Block</C3Button>
        <C3Button {...args} success display={'inline-block'}>Inlıne Block</C3Button>
        <C3Button {...args} danger display={'flex'}>Flex</C3Button>
        <C3Button {...args} danger display={'flex'}>Flex</C3Button>
    </div>
);
export const DisplayButton = DisplayButtonTemplate.bind({});

const MaxWidthButtonsTemplate: ComponentStory<typeof C3Button> = args => (
    <div>
        <C3Button {...args} primary>A very long sentence</C3Button>
        <C3Button {...args} primary maxWidth={120}>A very long sentence</C3Button>
        <C3Button {...args} primary maxWidth={100}>A very long sentence</C3Button>
    </div>
);
export const MaxWidthButtons = MaxWidthButtonsTemplate.bind({});