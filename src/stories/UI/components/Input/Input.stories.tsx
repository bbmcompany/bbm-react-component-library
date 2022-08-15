import {ComponentMeta, ComponentStory} from "@storybook/react";
import { C3Box } from "../Box/Box";
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
                    'Color': 'color',
                    'Date': 'date',
                    'Date Time Local': 'datetime-local',
                    'Email': 'email',
                    'File': 'file',
                    'Month': 'month',
                    'Number': 'number',
                    'Password': 'password',
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
        },
    }
} as ComponentMeta<typeof C3Input>;

const VariantsTemplate: ComponentStory<typeof C3Input> = args => (
    <C3Box d={'flex'} align={'center'} className={'variants'}>
        <C3Input {...args} type={'text'} placeHolder={'Enter Your Name'} label={'User Name'} className={'b-m-5'}/>
        <C3Input {...args} type={'password'} placeHolder={'Enter Your Password'} label={'Password'} className={'b-m-5'}/>
        <C3Input {...args} type={'email'} label={'Email'} placeHolder={'Enter Your Email'} className={'b-m-5'}/>
        <C3Input {...args} type={'number'} placeHolder={'Enter Your Age'} label={'Age'} className={'b-m-5'}/>
        <C3Input {...args} type={'search'} label={'Search'} placeHolder={'Category or Brand'} className={'b-m-5'}/>
        <C3Input {...args} type={'tel'} label={'Phone Number'} placeHolder={'Your Phone Number'} className={'b-m-5'}/>

        <C3Input {...args} type={'color'} labelFixed label={'Choise Favorite Color'} className={'b-m-5'}/>
        <C3Input {...args} type={'date'} labelFixed label={'Birthday'} className={'b-m-5'}/>
        <C3Input {...args} type={'datetime-local'} labelFixed label={'Local Time'} className={'b-m-5'}/>
        <C3Input {...args} type={'file'} labelFixed label={'Select File'} className={'b-m-5'}/>
        <C3Input {...args} type={'month'} labelFixed label={'Date Of Graduation'} className={'b-m-5'}/>
        <C3Input {...args} type={'range'} labelFixed label={'Enter Your Weight'} className={'b-m-5'}/>
        <C3Input {...args} type={'time'} labelFixed label={'Appointment time'} className={'b-m-5'}/>
        <C3Input {...args} type={'week'} labelFixed label={'Holiday Week'} className={'b-m-5'}/>
    </C3Box>
);
export const Variants = VariantsTemplate.bind({});

const InputWithLabelTemplate: ComponentStory<typeof C3Input> = args => (
    <C3Box d={'flex'} align={'end'} className={'input-label'}>
        <C3Input {...args} type={'text'} placeHolder={'Enter Your Name'} label={'User Name'} className={'b-m-5'}/>
        <C3Input {...args} type={'password'} placeHolder={'Enter Your Password'} label={'Password'} className={'b-m-5'}/>
        <C3Input {...args} type={'number'} placeHolder={'Enter Your Age'} label={'Age'} className={'b-m-5'}/>
    </C3Box>
);
export const InputWithLabel = InputWithLabelTemplate.bind({});

const InputWithFixedLabelTemplate: ComponentStory<typeof C3Input> = args => (
    <C3Box d={'flex'} align={'end'} className={'input-label'}>
        <C3Input {...args} type={'text'} placeHolder={'Enter Your Name'} label={'User Name'} labelFixed className={'b-m-5'}/>
        <C3Input {...args} type={'password'} placeHolder={'Enter Your Password'} label={'Password'} labelFixed className={'b-m-5'}/>
        <C3Input {...args} type={'number'} placeHolder={'Enter Your Age'} label={'Age'} labelFixed className={'b-m-5'}/>
    </C3Box>
);
export const InputWithFixedLabel = InputWithFixedLabelTemplate.bind({});

const InputWithOutLabelTemplate: ComponentStory<typeof C3Input> = args => (
    <C3Box d={'flex'} className={'input-label'}>
        <C3Input {...args} type={'text'} placeHolder={'Enter Your Name'} className={'b-m-5'}/>
        <C3Input {...args} type={'password'} placeHolder={'Enter Your Password'} className={'b-m-5'}/>
        <C3Input {...args} type={'number'} placeHolder={'Enter Your Age'} className={'b-m-5'}/>
    </C3Box>
);
export const InputWithoutLabel = InputWithOutLabelTemplate.bind({});

const TemplateSample : ComponentStory<typeof C3Input> = args => (
    <C3Box>
        <C3Input {...args} className={'b-m-5'}/>
    </C3Box>
);
export const Template = TemplateSample.bind({});