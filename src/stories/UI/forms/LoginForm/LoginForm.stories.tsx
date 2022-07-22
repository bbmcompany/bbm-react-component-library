import {ComponentMeta, ComponentStory} from "@storybook/react";
import {C3LoginForm} from "./LoginForm";

export default {
    title: 'FORMS/C3LoginForm',
    component: C3LoginForm,
    argTypes: {
        inputArea1: {
            control: 'inline-check',
            options: {
                'User Name': ['Username', 'Enter your username', 'user-name', 'text'],
                'Password': ['Password', 'Enter your password', 'password', 'password'],
                'Email': ['Email', 'Enter your email', 'email', 'email'],
            }
        },
        inputArea2: {
            control: 'inline-check',
            options: {
                'User Name': ['Username', 'Enter your username', 'user-name', 'text'],
                'Password': ['Password', 'Enter your password', 'password', 'password'],
                'Email': ['Email', 'Enter your email', 'email', 'email'],
            }
        },
        inputArea3: {
            control: 'inline-check',
            options: {
                'User Name': ['Username', 'Enter your username', 'user-name', 'text'],
                'Password': ['Password', 'Enter your password', 'password', 'password'],
                'Email': ['Email', 'Enter your email', 'email', 'email'],
            }
        }
    }

} as ComponentMeta<typeof C3LoginForm>;

// @ts-ignore
const VariantsTemplate: ComponentStory<typeof C3LoginForm> = args => (
    <C3LoginForm {...args} />
);

export const Variants = VariantsTemplate.bind({})


