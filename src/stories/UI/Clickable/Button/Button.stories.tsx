import {Button} from "./Button";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title : 'UI/Clickable/Button',
    component: Button,
    argTypes: {
    },
} as ComponentMeta<typeof Button>;

const Template : ComponentStory<typeof Button> = args => <Button {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    variant: 'primary',
    label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secondary',
    label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
    label: 'Button',
}

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Button',
}

export const Active = Template.bind({});
Active.args = {
    disabled:false,
    label: 'Button',
}