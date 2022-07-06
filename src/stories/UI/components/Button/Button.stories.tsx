import {Button} from "./Button";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import exp from "constants";

export default {
    title: 'UI/Button',
    component: Button,
    argTypes: {},

} as ComponentMeta<typeof Button>;

const VariantTemplate: ComponentStory<typeof Button> = args => (
    <div>
        <Button {...args} primary>Primary</Button>
        <Button {...args} secondary>Secondary</Button>
        <Button {...args} tertiary>Tertiary</Button>
        <Button {...args} danger>Danger</Button>
        <Button {...args} success>Success</Button>
        <Button {...args} >Default</Button>

    </div>

);
export const Variants = VariantTemplate.bind({});

const TypesTemplate: ComponentStory<typeof Button> = args => (
    <div>
        <Button {...args} primary>Contained</Button>
        <Button {...args} primary outline>Outline</Button>
        <Button {...args} primary>Default</Button>
        <Button {...args} primary icon={'academy'}>Icon</Button>
        <Button {...args} primary iconButton icon={'academy'}>Default</Button>
    </div>
);
export const Types = TypesTemplate.bind({});

const ButtonSizeTemplate: ComponentStory<typeof Button> = args => (
    <div>
        <Button {...args} primary size={'small'}>Small</Button>
        <Button {...args} primary size={'medium'}>Medium</Button>
        <Button {...args} primary size={'large'}>Large</Button>
        <Button {...args} primary>Default</Button>
    </div>
);
export const ButtonSize = ButtonSizeTemplate.bind({});

const ContainedButtonsTemplate: ComponentStory<typeof Button> = args => (
    <div>
        <Button {...args} primary>Primary</Button>
        <Button {...args} secondary>Secondary</Button>
        <Button {...args} tertiary>Tertiary</Button>
        <Button {...args} danger>Danger</Button>
        <Button {...args} success>Success</Button>
        <Button {...args} >Default</Button>
    </div>
);
export const ContainedButtons = ContainedButtonsTemplate.bind({});

const OutlinedButtonTemplate: ComponentStory<typeof Button> = args => (
    <div>
        <Button {...args} primary outline>Primary</Button>
        <Button {...args} secondary outline>Secondary</Button>
        <Button {...args} tertiary outline>Tertiary</Button>
        <Button {...args} danger outline>Danger</Button>
        <Button {...args} success outline>Success</Button>
        <Button {...args} outline>Default</Button>
    </div>
);
export const OutlinedButtons = OutlinedButtonTemplate.bind({});

const TextButtonsTemplate: ComponentStory<typeof Button> = args => (
    <div>
        <Button {...args} text>Text Button</Button>
    </div>
);
export const TextButtons = TextButtonsTemplate.bind({});

const IconButtonsTemplate: ComponentStory<typeof Button> = args => (
    <div>
        <Button {...args} primary icon={'academy'}>Primary Icon</Button>
        <Button {...args} secondary icon={'academy'}>Secondary Icon</Button>
        <Button {...args} tertiary icon={'academy'}>Tertiary Icon</Button>
    </div>
);
export const IconButtons = IconButtonsTemplate.bind({});

const OnlyIconButtonsTemplate: ComponentStory<typeof Button> = args => (
    <div>
        <Button {...args} primary iconButton icon={'academy'}/>
        <Button {...args} secondary iconButton icon={'academy'}/>
        <Button {...args} tertiary iconButton icon={'academy'}/>
    </div>
);
export const OnlyIconButtons = OnlyIconButtonsTemplate.bind({});
const TransparentButtonsTemplate: ComponentStory<typeof Button> = args => (
    <div>
        <Button {...args} primary transparent>Primary</Button>
        <Button {...args} secondary transparent>Secondary</Button>
        <Button {...args} tertiary transparent>Tertiary</Button>
        <Button {...args} danger transparent>Danger</Button>
        <Button {...args} success transparent>Success</Button>
        <Button {...args} transparent>Default</Button>
    </div>
);
export const TransparentButtons = TransparentButtonsTemplate.bind({});

const ProgressButtonsTemplate: ComponentStory<typeof Button> = args => (
    <div>
        <Button {...args} primary progress>Primary</Button>
        <Button {...args} secondary progress>Secondary</Button>
        <Button {...args} tertiary progress>Tertiary</Button>
        <Button {...args} danger progress>Danger</Button>
        <Button {...args} success progress>Success</Button>
        <Button {...args} progress>Default</Button>
    </div>
);
export const ProgressButtons = ProgressButtonsTemplate.bind({});

const ProgressTextButtonsTemplate: ComponentStory<typeof Button> = args => (
    <div>
        <Button {...args} primary isProgressText progressText={'Primary...'}>Primary</Button>
        <Button {...args} secondary isProgressText progressText={'Secondary...'}>Secondary</Button>
        <Button {...args} tertiary isProgressText progressText={'Tertiary...'}>Tertiary</Button>
        <Button {...args} danger isProgressText progressText={'Danger...'}>Danger</Button>
        <Button {...args} success isProgressText progressText={'Success...'}>Success</Button>
        <Button {...args} isProgressText>Default</Button>
    </div>
);
export const ProgressTextButtons = ProgressTextButtonsTemplate.bind({});

const DisabledButtonsTemplate: ComponentStory<typeof Button> = args => (
    <div>
        <Button {...args} primary disabled>Primary</Button>
        <Button {...args} secondary disabled>Secondary</Button>
        <Button {...args} tertiary disabled>Tertiary</Button>
        <Button {...args} danger disabled>Danger</Button>
        <Button {...args} success disabled>Success</Button>
        <Button {...args} disabled>Default</Button>
    </div>
);
export const DisabledButtons = DisabledButtonsTemplate.bind({});

const DisplayButtonTemplate: ComponentStory<typeof Button> = args => (
    <div>
        <Button {...args} primary display={'block'}>Block</Button>
        <Button {...args} success display={'inline-block'}>Inlıne Block</Button>
        <Button {...args} success display={'inline-block'}>Inlıne Block</Button>
        <Button {...args} danger display={'flex'}>Flex</Button>
        <Button {...args} danger display={'flex'}>Flex</Button>
    </div>
);
export const DisplayButton = DisplayButtonTemplate.bind({});

const MaxWidthButtonsTemplate: ComponentStory<typeof Button> = args => (
    <div>
        <Button {...args} primary>A very long sentence</Button>
        <Button {...args} primary maxWidth={120}>A very long sentence</Button>
        <Button {...args} primary maxWidth={100}>A very long sentence</Button>
    </div>
);
export const MaxWidthButtons = MaxWidthButtonsTemplate.bind({});