import {Button} from "./Button";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'UI/Clickable/Button',
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

const TypesTemplate : ComponentStory<typeof Button> = args => (
    <div>
        <Button {...args} primary>Contained</Button>
        <Button {...args} primary outline>Outline</Button>
        <Button {...args} primary>Default</Button>
    </div>
);
export const Types = TypesTemplate.bind({});

const ContainedButtonsTemplate : ComponentStory<typeof Button> = args => (
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

const OutlinedButtonTemplate : ComponentStory<typeof Button> = args => (
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

const ProgressButtonsTemplate : ComponentStory<typeof Button> = args => (
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

const ProgressTextButtonsTemplate : ComponentStory<typeof Button> = args => (
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