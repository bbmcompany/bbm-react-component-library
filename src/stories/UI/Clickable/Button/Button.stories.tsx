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
