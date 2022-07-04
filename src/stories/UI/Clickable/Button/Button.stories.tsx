import {Button} from "./Button";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'UI/Clickable/Button',
    component: Button,
    argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'outline',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
}

export const Large = Template.bind({});
Large.args = {
    size: 'large',
}

export const Active = Template.bind({});
Active.args = {
    disabled: false,
}

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
}

export const Progress = Template.bind({});
Progress.args = {
    progress: true,
}