import {Button} from "./Button";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title : 'UI/Clickable/Button',
    component: Button,
    argTypes: {
        backgroundColor: {control : {type: 'color'}},
        borderRadius : {control : {type: 'number', min:1, max:12}}
    },
} as ComponentMeta<typeof Button>;

const Template : ComponentStory<typeof Button> = args => <Button {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'BBM',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'BBM',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'BBM',
};

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
    label: 'BBM',
}

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'BBM',
}