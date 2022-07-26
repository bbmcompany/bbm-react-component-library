import {ComponentMeta, ComponentStory} from "@storybook/react";
import {C3LoginForm} from "./LoginForm";
import './login-form-stories.scss'
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


const TemplateTemplate: ComponentStory<typeof C3LoginForm> = args => (
    <div className={'login-form'}>
        <C3LoginForm
            {...args}
            formData={{}}
                     inputArea1={[
                         [
                             'Username',
                             'Enter your username',
                             'user-name',
                             'text'
                         ]
                     ]}
                     inputArea2={[
                         [
                             'Password',
                             'Enter your password',
                             'password',
                             'password'
                         ]
                     ]}/>
        <C3LoginForm
            {...args}
            formData={{}}
            inputArea1={[
                [
                    'Email',
                    'Enter your email',
                    'email',
                    'email'
                ]
            ]}
            inputArea2={[
                [
                    'Password',
                    'Enter your password',
                    'password',
                    'password'
                ]
            ]}
        />
        <C3LoginForm
            {...args}
            title={'Custom'}
        />
    </div>
);
export const Template = TemplateTemplate.bind({});

const LabelVariantstemplate: ComponentStory<typeof C3LoginForm> = args => (
    <div className={'login-form'}>
        <C3LoginForm
            {...args}
            formData={{}}
            inputArea1={[
                [
                    'Username',
                    'Enter your username',
                    'user-name',
                    'text'
                ]
            ]}
            inputArea2={[
                [
                    'Password',
                    'Enter your password',
                    'password',
                    'password'
                ]
            ]}/>
        <C3LoginForm
            {...args}
            formData={{}}
            fixedLabel
            inputArea1={[
                [
                    'Username',
                    'Enter your username',
                    'user-name',
                    'text'
                ]
            ]}
            inputArea2={[
                [
                    'Password',
                    'Enter your password',
                    'password',
                    'password'
                ]
            ]}/>
    </div>
);
export const LabelVariants = LabelVariantstemplate.bind({});

const TitleOptionsTemplate: ComponentStory<typeof C3LoginForm> = args => (
    <div className={'login-form'}>
        <C3LoginForm
            {...args}
            formData={{}}
            inputArea1={[
                [
                    'Username',
                    'Enter your username',
                    'user-name',
                    'text'
                ]
            ]}
            inputArea2={[
                [
                    'Password',
                    'Enter your password',
                    'password',
                    'password'
                ]
            ]}/>
        <C3LoginForm
            {...args}
            formData={{}}
            title={'Sign Up'}
            buttonText={'Sign Up'}
            inputArea1={[
                [
                    'Email',
                    'Enter your email',
                    'email',
                    'email'
                ]
            ]}
            inputArea2={[
                [
                    'Password',
                    'Enter your password',
                    'password',
                    'password'
                ]
            ]}
        />
        <C3LoginForm
            {...args}
            formData={{}}
            title={'Sign Up'}
            buttonText={"Let's Start"}
            inputArea1={[
                [
                    'Email',
                    'Enter your email',
                    'email',
                    'email'
                ]
            ]}
            inputArea2={[
                [
                    'Password',
                    'Enter your password',
                    'password',
                    'password'
                ]
            ]}
        />
    </div>
);
export const TitleOptions = TitleOptionsTemplate.bind({});
