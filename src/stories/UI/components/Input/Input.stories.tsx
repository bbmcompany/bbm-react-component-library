import {ComponentMeta, ComponentStory} from "@storybook/react";
import {C3Input} from "./Input";
import './input-stories.scss'
export default {
    title: 'COMPONENTS/C3Input',
    component: C3Input,
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: {
                    'Text': 'text',
                    'Checkbox': 'checkbox',
                    'Color': 'color',
                    'Date': 'date',
                    'Date Time Local': 'datetime-local',
                    'Email': 'email',
                    'File': 'File',
                    'Image' : 'image',
                    'Month': 'month',
                    'Number': 'number',
                    'Password': 'password',
                    'Radio': 'radio',
                    'Range': 'range',
                    'Reset': 'reset',
                    'Search': 'search',
                    'Submit': 'submit',
                    'Tel': 'tel',
                    'Time': 'time',
                    'Url': 'url',
                    'Week': 'week'
                }
            }
        }
    }
} as ComponentMeta<typeof C3Input>;

const VariantsTemplate: ComponentStory<typeof C3Input> = args => (
    <div className={'variants'}>
        <C3Input {...args} type={'text'} placeHolder={'Enter Your Name'} label={'User Name'}/>
        <C3Input {...args} type={'password'} placeHolder={'Enter Your Password'} label={'Password'}/>
        <C3Input {...args} type={'email'} label={'Email'} placeHolder={'Enter Your Email'}/>
        <C3Input {...args} type={'number'} placeHolder={'Enter Your Age'} label={'Age'}/>
        <C3Input {...args} type={'search'} label={'Search'} placeHolder={'Category or Brand'}/>
        <C3Input {...args} type={'tel'} label={'Phone Number'} placeHolder={'Your Phone Number'}/>

        <C3Input {...args} type={'color'} labelFixed label={'Choise Favorite Color'}/>
        <C3Input {...args} type={'date'} labelFixed label={'Birthday'}/>
        <C3Input {...args} type={'datetime-local'} labelFixed label={'Local Time'}/>
        <C3Input {...args} type={'file'} labelFixed label={'Select File'}/>
        <C3Input {...args} type={'month'} labelFixed label={'Date Of Graduation'}/>
        <C3Input {...args} type={'range'} labelFixed label={'Enter Your Weight'}/>
        <C3Input {...args} type={'time'} labelFixed label={'Appointment time'}/>
        <C3Input {...args} type={'week'} labelFixed label={'Holiday Week'}/>
    </div>
);
export const Variants = VariantsTemplate.bind({});

