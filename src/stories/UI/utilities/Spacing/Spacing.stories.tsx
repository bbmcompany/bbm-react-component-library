import {ComponentMeta, ComponentStory} from "@storybook/react";
import {C3Spacing} from "./Spacing";
import './spacing-stories.scss'

export default {
    title: 'UTILITIES/C3Spacing',
    component: C3Spacing,
    argTypes: {}
} as ComponentMeta<typeof C3Spacing>

const MarginTemplate: ComponentStory<typeof C3Spacing> = args => (
    <div className={'margin'}>
        <C3Spacing {...args} className={'b-m-auto'}>Margin Auto</C3Spacing>
        <C3Spacing {...args} className={'b-m-0'}>Margin 0</C3Spacing>
        <C3Spacing {...args} className={'b-m-1'}>Margin 1px</C3Spacing>
        <C3Spacing {...args} className={'b-m-2'}>Margin 2px</C3Spacing>
        <C3Spacing {...args} className={'b-m-3'}>Margin 3px</C3Spacing>
        <C3Spacing {...args} className={'b-m-4'}>Margin 4px</C3Spacing>
        <C3Spacing {...args} className={'b-m-5'}>Margin 5px</C3Spacing>
        <C3Spacing {...args} className={'b-m-10'}>Margin 10px</C3Spacing>
        <C3Spacing {...args} className={'b-m-15'}>Margin 15px</C3Spacing>
        <C3Spacing {...args} className={'b-m-20'}>Margin 20px</C3Spacing>
        <C3Spacing {...args} className={'b-m-25'}>Margin 25px</C3Spacing>
        <C3Spacing {...args} className={'b-m-50'}>Margin 50px</C3Spacing>
        <C3Spacing {...args} className={'b-m-75'}>Margin 75px</C3Spacing>
        <C3Spacing {...args} className={'b-m-100'}>Margin 100px</C3Spacing>
    </div>
);
export const Margin = MarginTemplate.bind({});

const MarginTopTemplate: ComponentStory<typeof C3Spacing> = args => (
    <div className={'margin-top'}>
        <C3Spacing {...args} className={'b-mt-auto'}>Margin Auto</C3Spacing>
        <C3Spacing {...args} className={'b-mt-0'}>Margin Top 0</C3Spacing>
        <C3Spacing {...args} className={'b-mt-1'}>Margin Top 1px</C3Spacing>
        <C3Spacing {...args} className={'b-mt-2'}>Margin Top 2px</C3Spacing>
        <C3Spacing {...args} className={'b-mt-3'}>Margin Top 3px</C3Spacing>
        <C3Spacing {...args} className={'b-mt-4'}>Margin Top 4px</C3Spacing>
        <C3Spacing {...args} className={'b-mt-5'}>Margin Top 5px</C3Spacing>
        <C3Spacing {...args} className={'b-mt-10'}>Margin Top 10px</C3Spacing>
        <C3Spacing {...args} className={'b-mt-15'}>Margin Top 15px</C3Spacing>
        <C3Spacing {...args} className={'b-mt-20'}>Margin Top 20px</C3Spacing>
        <C3Spacing {...args} className={'b-mt-25'}>Margin Top 25px</C3Spacing>
        <C3Spacing {...args} className={'b-mt-50'}>Margin Top 50px</C3Spacing>
        <C3Spacing {...args} className={'b-mt-75'}>Margin Top 75px</C3Spacing>
        <C3Spacing {...args} className={'b-mt-100'}>Margin Top 100px</C3Spacing>
    </div>
);
export const MarginTop = MarginTopTemplate.bind({});

const MarginBottomTemplate: ComponentStory<typeof C3Spacing> = args => (
    <div className={'margin-bottom'}>
        <C3Spacing {...args} className={'b-mb-auto'}>Margin Auto</C3Spacing>
        <C3Spacing {...args} className={'b-mb-0'}>Margin Bottom 0</C3Spacing>
        <C3Spacing {...args} className={'b-mb-1'}>Margin Bottom 1px</C3Spacing>
        <C3Spacing {...args} className={'b-mb-2'}>Margin Bottom 2px</C3Spacing>
        <C3Spacing {...args} className={'b-mb-3'}>Margin Bottom 3px</C3Spacing>
        <C3Spacing {...args} className={'b-mb-4'}>Margin Bottom 4px</C3Spacing>
        <C3Spacing {...args} className={'b-mb-5'}>Margin Bottom 5px</C3Spacing>
        <C3Spacing {...args} className={'b-mb-10'}>Margin Bottom 10px</C3Spacing>
        <C3Spacing {...args} className={'b-mb-15'}>Margin Bottom 15px</C3Spacing>
        <C3Spacing {...args} className={'b-mb-20'}>Margin Bottom 20px</C3Spacing>
        <C3Spacing {...args} className={'b-mb-25'}>Margin Bottom 25px</C3Spacing>
        <C3Spacing {...args} className={'b-mb-50'}>Margin Bottom 50px</C3Spacing>
        <C3Spacing {...args} className={'b-mb-75'}>Margin Bottom 75px</C3Spacing>
        <C3Spacing {...args} className={'b-mb-100'}>Margin Bottom 100px</C3Spacing>
    </div>
);
export const MarginBottom = MarginBottomTemplate.bind({});

const MarginLeftTemplate: ComponentStory<typeof C3Spacing> = args => (
    <div className={'margin-left'}>
        <C3Spacing {...args} className={'b-ml-auto'}>Margin Auto</C3Spacing>
        <C3Spacing {...args} className={'b-ml-0'}>Margin Left 0</C3Spacing>
        <C3Spacing {...args} className={'b-ml-1'}>Margin Left 1px</C3Spacing>
        <C3Spacing {...args} className={'b-ml-2'}>Margin Left 2px</C3Spacing>
        <C3Spacing {...args} className={'b-ml-3'}>Margin Left 3px</C3Spacing>
        <C3Spacing {...args} className={'b-ml-4'}>Margin Left 4px</C3Spacing>
        <C3Spacing {...args} className={'b-ml-5'}>Margin Left 5px</C3Spacing>
        <C3Spacing {...args} className={'b-ml-10'}>Margin Left 10px</C3Spacing>
        <C3Spacing {...args} className={'b-ml-15'}>Margin Left 15px</C3Spacing>
        <C3Spacing {...args} className={'b-ml-20'}>Margin Left 20px</C3Spacing>
        <C3Spacing {...args} className={'b-ml-25'}>Margin Left 25px</C3Spacing>
        <C3Spacing {...args} className={'b-ml-50'}>Margin Left 50px</C3Spacing>
        <C3Spacing {...args} className={'b-ml-75'}>Margin Left 75px</C3Spacing>
        <C3Spacing {...args} className={'b-ml-100'}>Margin Left 100px</C3Spacing>
    </div>
);
export const MarginLeft = MarginLeftTemplate.bind({});

const MarginRightTemplate: ComponentStory<typeof C3Spacing> = args => (
    <div className={'margin-right'}>
        <C3Spacing {...args} className={'b-mr-auto'}>Margin Auto</C3Spacing>
        <C3Spacing {...args} className={'b-mr-0'}>Margin Right 0</C3Spacing>
        <C3Spacing {...args} className={'b-mr-1'}>Margin Right 1px</C3Spacing>
        <C3Spacing {...args} className={'b-mr-2'}>Margin Right 2px</C3Spacing>
        <C3Spacing {...args} className={'b-mr-3'}>Margin Right 3px</C3Spacing>
        <C3Spacing {...args} className={'b-mr-4'}>Margin Right 4px</C3Spacing>
        <C3Spacing {...args} className={'b-mr-5'}>Margin Right 5px</C3Spacing>
        <C3Spacing {...args} className={'b-mr-10'}>Margin Right 10px</C3Spacing>
        <C3Spacing {...args} className={'b-mr-15'}>Margin Right 15px</C3Spacing>
        <C3Spacing {...args} className={'b-mr-20'}>Margin Right 20px</C3Spacing>
        <C3Spacing {...args} className={'b-mr-25'}>Margin Right 25px</C3Spacing>
        <C3Spacing {...args} className={'b-mr-50'}>Margin Right 50px</C3Spacing>
        <C3Spacing {...args} className={'b-mr-75'}>Margin Right 75px</C3Spacing>
        <C3Spacing {...args} className={'b-mr-100'}>Margin Right 100px</C3Spacing>
    </div>
);
export const MarginRight = MarginRightTemplate.bind({});

const MarginLeftAndRightTemplate: ComponentStory<typeof C3Spacing> = args => (
    <div className={'margin-left-and-right'}>
        <C3Spacing {...args} className={'b-mx-auto'}>Margin Auto</C3Spacing>
        <C3Spacing {...args} className={'b-mx-0'}>Margin Left And Right 0</C3Spacing>
        <C3Spacing {...args} className={'b-mx-1'}>Margin Left And Right 1px</C3Spacing>
        <C3Spacing {...args} className={'b-mx-2'}>Margin Left And Right 2px</C3Spacing>
        <C3Spacing {...args} className={'b-mx-3'}>Margin Left And Right 3px</C3Spacing>
        <C3Spacing {...args} className={'b-mx-4'}>Margin Left And Right 4px</C3Spacing>
        <C3Spacing {...args} className={'b-mx-5'}>Margin Left And Right 5px</C3Spacing>
        <C3Spacing {...args} className={'b-mx-10'}>Margin Left And Right 10px</C3Spacing>
        <C3Spacing {...args} className={'b-mx-15'}>Margin Left And Right 15px</C3Spacing>
        <C3Spacing {...args} className={'b-mx-20'}>Margin Left And Right 20px</C3Spacing>
        <C3Spacing {...args} className={'b-mx-25'}>Margin Left And Right 25px</C3Spacing>
        <C3Spacing {...args} className={'b-mx-50'}>Margin Left And Right 50px</C3Spacing>
        <C3Spacing {...args} className={'b-mx-75'}>Margin Left And Right 75px</C3Spacing>
        <C3Spacing {...args} className={'b-mx-100'}>Margin Left And Right 100px</C3Spacing>
    </div>
);
export const MarginLeftAndRight = MarginLeftAndRightTemplate.bind({});

const MarginTopAndBottomTemplate: ComponentStory<typeof C3Spacing> = args => (
    <div className={'margin-top-and-bottom'}>
        <C3Spacing {...args} className={'b-my-auto'}>Margin Auto</C3Spacing>
        <C3Spacing {...args} className={'b-my-0'}>Margin Top And Bottom 0</C3Spacing>
        <C3Spacing {...args} className={'b-my-1'}>Margin Top And Bottom 1px</C3Spacing>
        <C3Spacing {...args} className={'b-my-2'}>Margin Top And Bottom 2px</C3Spacing>
        <C3Spacing {...args} className={'b-my-3'}>Margin Top And Bottom 3px</C3Spacing>
        <C3Spacing {...args} className={'b-my-4'}>Margin Top And Bottom 4px</C3Spacing>
        <C3Spacing {...args} className={'b-my-5'}>Margin Top And Bottom 5px</C3Spacing>
        <C3Spacing {...args} className={'b-my-10'}>Margin Top And Bottom 10px</C3Spacing>
        <C3Spacing {...args} className={'b-my-15'}>Margin Top And Bottom 15px</C3Spacing>
        <C3Spacing {...args} className={'b-my-20'}>Margin Top And Bottom 20px</C3Spacing>
        <C3Spacing {...args} className={'b-my-25'}>Margin Top And Bottom 25px</C3Spacing>
        <C3Spacing {...args} className={'b-my-50'}>Margin Top And Bottom 50px</C3Spacing>
        <C3Spacing {...args} className={'b-my-75'}>Margin Top And Bottom 75px</C3Spacing>
        <C3Spacing {...args} className={'b-my-100'}>Margin Top And Bottom 100px</C3Spacing>
    </div>
);
export const MarginTopAndBottom = MarginTopAndBottomTemplate.bind({});

