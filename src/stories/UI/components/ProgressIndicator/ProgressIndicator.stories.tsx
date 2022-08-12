import { ComponentMeta, ComponentStory } from "@storybook/react";
import { C3ProgressIndicator } from "./ProgressIndicator";
import './progress-indicator-stories.scss'
export default {
    title: 'COMPONENTS/C3ProgressIndicator',
    component: C3ProgressIndicator,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: {
                    'xs': 'xs',
                    's': 's',
                    'm': 'm',
                    'l': 'l',
                }
            }
        },
    }
} as ComponentMeta<typeof C3ProgressIndicator>;

const VariantsTemplate: ComponentStory<typeof C3ProgressIndicator> = args => (
    <div className={'progress-indicator'}>
        <C3ProgressIndicator {...args} value={10} max={100} className={'b-m-5'}/>
        <C3ProgressIndicator {...args} value={20} max={100} primary className={'b-m-5'}/>
        <C3ProgressIndicator {...args} value={30} max={100} secondary className={'b-m-5'}/>
        <C3ProgressIndicator {...args} value={40} max={100} tertiary className={'b-m-5'}/>
        <C3ProgressIndicator {...args} value={50} max={100} orange className={'b-m-5'}/>
        <C3ProgressIndicator {...args} value={60} max={100} grey className={'b-m-5'}/>
        <C3ProgressIndicator {...args} value={70} max={100} error className={'b-m-5'}/>
        <C3ProgressIndicator {...args} value={80} max={100} success className={'b-m-5'}/>
        <C3ProgressIndicator {...args} value={90} max={100} warning className={'b-m-5'}/>
        <C3ProgressIndicator {...args} value={95} max={100} info className={'b-m-5'}/>
    </div>
);
export const Variants = VariantsTemplate.bind({});

const CustomTemplate: ComponentStory<typeof C3ProgressIndicator> = args => (
    <div className={'progress-indicator'}>
        <C3ProgressIndicator {...args} className={'b-m-5'}/>
    </div>
);
export const Custom = CustomTemplate.bind({});

const ErrorTemplate: ComponentStory<typeof C3ProgressIndicator> = args => (
    <div className={'progress-indicator'}>
        <C3ProgressIndicator {...args} className={'b-m-5'} isError error value={100} max={100}/>
        <C3ProgressIndicator {...args} className={'b-m-5'} isError error value={45} max={100}/>
        <C3ProgressIndicator {...args} className={'b-m-5'} isError error value={55} max={100} percent/>
        <C3ProgressIndicator {...args} className={'b-m-5'} isError error value={35} max={100} percent/>
    </div>
);
export const Error = ErrorTemplate.bind({});

const PercentTemplate: ComponentStory<typeof C3ProgressIndicator> = args => (
    <div className={'progress-indicator'}>
        <C3ProgressIndicator {...args} className={'b-m-5'} primary percent value={37} max={100}/>
        <C3ProgressIndicator {...args} className={'b-m-5'} secondary value={37} max={100}/>
    </div>
);
export const Percent = PercentTemplate.bind({});

const TitleTemplate: ComponentStory<typeof C3ProgressIndicator> = args => (
    <div className={'progress-indicator'}>
        <C3ProgressIndicator {...args} className={'b-m-5'} title={'Completed Tasks:'} primary percent value={37} max={100}/>
        <C3ProgressIndicator {...args} className={'b-m-5'} secondary value={37} max={100}/>
    </div>
);
export const Title = TitleTemplate.bind({});

const SizeTemplate: ComponentStory<typeof C3ProgressIndicator> = args => (
    <div className={'progress-indicator'}>
        <C3ProgressIndicator {...args} size={'xs'} className={'b-m-5'} title={'Completed Tasks:'} primary percent value={37} max={100}/>
        <C3ProgressIndicator {...args} size={'s'} className={'b-m-5'} title={'Completed Tasks:'} primary percent value={37} max={100}/>
        <C3ProgressIndicator {...args} size={'m'} className={'b-m-5'} title={'Completed Tasks:'} primary percent value={37} max={100}/>
        <C3ProgressIndicator {...args} size={'l'} className={'b-m-5'} title={'Completed Tasks:'} primary percent value={37} max={100}/>
    </div>
);
export const Size = SizeTemplate.bind({});