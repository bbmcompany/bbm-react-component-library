import {C3Button} from "./Button";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import './button-stories.scss';
export default {
    title: 'COMPONENTS/C3Button',
    component: C3Button,
    argTypes: {

        size: {
            control: {
                type: 'select',
                options: {
                    'Small': 'small',
                    'Medium': 'medium',
                    'Large': 'large',
                }
            }
        },
        icon: {
            control: {
                type: 'select',
                options: ['academy', 'add_note', 'add_photo', 'add_product', 'alert', 'archive', 'arrow-right', 'left-arrow', 'arrow-up', 'arrow_down',
                    'attach', 'award', 'back', 'back_fill', 'change', 'close', 'question', 'exclamation'
                ]
            }
        }
    },

} as ComponentMeta<typeof C3Button>;

const VariantsTemplate: ComponentStory<typeof C3Button> = args => (
    <div className={'button'}>
        <C3Button {...args} primary className={'b-m-5'}>Primary</C3Button>
        <C3Button {...args} secondary className={'b-m-5'}>Secondary</C3Button>
        <C3Button {...args} tertiary className={'b-m-5'}>Tertiary</C3Button>
        <C3Button {...args} danger className={'b-m-5'}>Danger</C3Button>
        <C3Button {...args} success className={'b-m-5'}>Success</C3Button>
        <C3Button {...args}  className={'b-m-5'}>Default</C3Button>

    </div>

);
export const Variants = VariantsTemplate.bind({});

const TypesTemplate: ComponentStory<typeof C3Button> = args => (
    <div className={'button'}>
        <C3Button {...args} primary className={'b-m-5'} >Contained</C3Button>
        <C3Button {...args} primary outline className={'b-m-5'}>Outline</C3Button>
        <C3Button {...args} primary className={'b-m-5'}>Default</C3Button>
        <C3Button {...args} primary icon={'academy'} className={'b-m-5'}>Icon</C3Button>
        <C3Button {...args} primary iconButton className={'b-m-5'}>Default</C3Button>
    </div>
);
export const Types = TypesTemplate.bind({});

const ButtonSizeTemplate: ComponentStory<typeof C3Button> = args => (
    <div className={'button-size'}>
        <C3Button {...args} primary size={'small'} className={'b-m-5'}>Small</C3Button>
        <C3Button {...args} primary size={'medium'} className={'b-m-5'}>Medium</C3Button>
        <C3Button {...args} primary size={'large'} className={'b-m-5'}>Large</C3Button>
        <C3Button {...args} primary className={'b-m-5'}>Default</C3Button>
    </div>
);
export const ButtonSize = ButtonSizeTemplate.bind({});

const ContainedButtonsTemplate: ComponentStory<typeof C3Button> = args => (
    <div className={'button'}>
        <C3Button {...args} primary className={'b-m-5'}>Primary</C3Button>
        <C3Button {...args} secondary className={'b-m-5'}>Secondary</C3Button>
        <C3Button {...args} tertiary className={'b-m-5'}>Tertiary</C3Button>
        <C3Button {...args} danger className={'b-m-5'}>Danger</C3Button>
        <C3Button {...args} success className={'b-m-5'}>Success</C3Button>
        <C3Button {...args}  className={'b-m-5'}>Default</C3Button>
    </div>
);
export const ContainedButtons = ContainedButtonsTemplate.bind({});

const OutlinedButtonTemplate: ComponentStory<typeof C3Button> = args => (
    <div className={'button'}>
        <C3Button {...args} primary outline className={'b-m-5'}>Primary</C3Button>
        <C3Button {...args} secondary outline className={'b-m-5'}>Secondary</C3Button>
        <C3Button {...args} tertiary outline className={'b-m-5'}>Tertiary</C3Button>
        <C3Button {...args} danger outline className={'b-m-5'}>Danger</C3Button>
        <C3Button {...args} success outline className={'b-m-5'}>Success</C3Button>
        <C3Button {...args} outline className={'b-m-5'}>Default</C3Button>
    </div>
);
export const OutlinedButtons = OutlinedButtonTemplate.bind({});

const TextButtonsTemplate: ComponentStory<typeof C3Button> = args => (
    <div className={'button'}>
        <C3Button {...args} text className={'b-m-5'}>Text C3Button</C3Button>
    </div>
);
export const TextButtons = TextButtonsTemplate.bind({});

const IconButtonsTemplate: ComponentStory<typeof C3Button> = args => (
    <div className={'button'}>
        <C3Button {...args} primary icon={'academy'} className={'b-m-5'}>Primary Icon</C3Button>
        <C3Button {...args} secondary icon={'attach'} className={'b-m-5'}>Secondary Icon</C3Button>
        <C3Button {...args} tertiary icon={'account'} className={'b-m-5'}>Tertiary Icon</C3Button>
    </div>
);
export const IconButtons = IconButtonsTemplate.bind({});

const OnlyIconButtonsTemplate: ComponentStory<typeof C3Button> = args => (
    <div className={'button'}>
        <C3Button {...args} primary iconButton className={'b-m-5'}/>
        <C3Button {...args} secondary iconButton className={'b-m-5'}/>
        <C3Button {...args} tertiary iconButton className={'b-m-5'}/>
    </div>
);
export const OnlyIconButtons = OnlyIconButtonsTemplate.bind({});
const TransparentButtonsTemplate: ComponentStory<typeof C3Button> = args => (
    <div className={'button'}>
        <C3Button {...args} primary transparent className={'b-m-5'}>Primary</C3Button>
        <C3Button {...args} secondary transparent className={'b-m-5'}>Secondary</C3Button>
        <C3Button {...args} tertiary transparent className={'b-m-5'}>Tertiary</C3Button>
        <C3Button {...args} danger transparent className={'b-m-5'}>Danger</C3Button>
        <C3Button {...args} success transparent className={'b-m-5'}>Success</C3Button>
        <C3Button {...args} transparent className={'b-m-5'}>Default</C3Button>
    </div>
);
export const TransparentButtons = TransparentButtonsTemplate.bind({});

const ProgressButtonsTemplate: ComponentStory<typeof C3Button> = args => (
    <div className={'button'}>
        <C3Button {...args} primary progress className={'b-m-5'}>Primary</C3Button>
        <C3Button {...args} secondary progress className={'b-m-5'}>Secondary</C3Button>
        <C3Button {...args} tertiary progress className={'b-m-5'}>Tertiary</C3Button>
        <C3Button {...args} danger progress className={'b-m-5'}>Danger</C3Button>
        <C3Button {...args} success progress className={'b-m-5'}>Success</C3Button>
        <C3Button {...args} progress className={'b-m-5'}>Default</C3Button>
    </div>
);
export const ProgressButtons = ProgressButtonsTemplate.bind({});

const ProgressTextButtonsTemplate: ComponentStory<typeof C3Button> = args => (
    <div className={'button'}>
        <C3Button {...args} primary isProgressText progressText={'Primary...'} className={'b-m-5'}>Primary</C3Button>
        <C3Button {...args} secondary isProgressText progressText={'Secondary...'} className={'b-m-5'}>Secondary</C3Button>
        <C3Button {...args} tertiary isProgressText progressText={'Tertiary...'} className={'b-m-5'}>Tertiary</C3Button>
        <C3Button {...args} danger isProgressText progressText={'Danger...'} className={'b-m-5'}>Danger</C3Button>
        <C3Button {...args} success isProgressText progressText={'Success...'} className={'b-m-5'}>Success</C3Button>
        <C3Button {...args} isProgressText className={'b-m-5'}>Default</C3Button>
    </div>
);
export const ProgressTextButtons = ProgressTextButtonsTemplate.bind({});

const DisabledButtonsTemplate: ComponentStory<typeof C3Button> = args => (
    <div className={'button'}>
        <C3Button {...args} primary disabled className={'b-m-5'}>Primary</C3Button>
        <C3Button {...args} secondary disabled className={'b-m-5'}>Secondary</C3Button>
        <C3Button {...args} tertiary disabled className={'b-m-5'}>Tertiary</C3Button>
        <C3Button {...args} danger disabled className={'b-m-5'}>Danger</C3Button>
        <C3Button {...args} success disabled className={'b-m-5'}>Success</C3Button>
        <C3Button {...args} disabled className={'b-m-5'}>Default</C3Button>
    </div>
);
export const DisabledButtons = DisabledButtonsTemplate.bind({});

const DisplayButtonTemplate: ComponentStory<typeof C3Button> = args => (
    <div>
        <C3Button {...args} primary display={'block'} className={'b-m-5'}>Block</C3Button>
        <C3Button {...args} success display={'inline-block'} className={'b-m-5'}>Inlıne Block</C3Button>
        <C3Button {...args} success display={'inline-block'} className={'b-m-5'}>Inlıne Block</C3Button>
        <C3Button {...args} danger display={'flex'} className={'b-m-5'}>Flex</C3Button>
        <C3Button {...args} danger display={'flex'} className={'b-m-5'}>Flex</C3Button>
    </div>
);
export const DisplayButton = DisplayButtonTemplate.bind({});

const MaxWidthButtonsTemplate: ComponentStory<typeof C3Button> = args => (
    <div className={'button'}>
        <C3Button {...args} primary className={'b-m-5'}>A very long sentence</C3Button>
        <C3Button {...args} primary maxWidth={120} className={'b-m-5'}>A very long sentence</C3Button>
        <C3Button {...args} primary maxWidth={100} className={'b-m-5'}>A very long sentence</C3Button>
    </div>
);
export const MaxWidthButtons = MaxWidthButtonsTemplate.bind({});