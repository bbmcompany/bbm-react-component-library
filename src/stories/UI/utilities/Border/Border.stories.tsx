import { ComponentMeta, ComponentStory } from '@storybook/react'
import { C3Border } from './Border'
import './border-stories.scss'

export default {
    title : 'UTILITIES/C3Border',
    component: C3Border,
    argTypes: {}
} as ComponentMeta<typeof C3Border>

const BorderTemplate: ComponentStory<typeof C3Border> = args => (
    <div className={'border'}>
        <C3Border {...args} className={'b-border-0 b-ml-10'}>Border 0</C3Border>
        <C3Border {...args} className={'b-border-1'}>Border 1</C3Border>
        <C3Border {...args} className={'b-border-2'}>Border 2</C3Border>
        <C3Border {...args} className={'b-border-3'}>Border 3</C3Border>
        <C3Border {...args} className={'b-border-4 b-mr-10'}>Border 4</C3Border>
        <C3Border {...args} className={'b-border-5 b-ml-10'}>Border 5</C3Border>
        <C3Border {...args} className={'b-border-10 '}>Border 10</C3Border>
        <C3Border {...args} className={'b-border-20'}>Border 20</C3Border>
        <C3Border {...args} className={'b-border-25'}>Border 25</C3Border>
        <C3Border {...args} className={'b-border-50 b-mr-10'}>Border 50</C3Border>
        <C3Border {...args} className={'b-border-75 b-ml-10'}>Border 75</C3Border>
        <C3Border {...args} className={'b-border-100 b-mr-10'}>Border 100</C3Border>
    </div>
);
export const Border = BorderTemplate.bind({});

const BorderTopTemplate: ComponentStory<typeof C3Border> = args => (
    <div className={'border-top'}>
        <C3Border {...args} className={'b-border-t-0 b-ml-10'}>Border Top 0</C3Border>
        <C3Border {...args} className={'b-border-t-1'}>Border Top 1</C3Border>
        <C3Border {...args} className={'b-border-t-2'}>Border Top 2</C3Border>
        <C3Border {...args} className={'b-border-t-3'}>Border Top 3</C3Border>
        <C3Border {...args} className={'b-border-t-4 b-mr-10'}>Border Top 4</C3Border>
        <C3Border {...args} className={'b-border-t-5 b-ml-10'}>Border Top 5</C3Border>
        <C3Border {...args} className={'b-border-t-10 '}>Border Top 10</C3Border>
        <C3Border {...args} className={'b-border-t-20'}>Border Top 20</C3Border>
        <C3Border {...args} className={'b-border-t-25'}>Border Top 25</C3Border>
        <C3Border {...args} className={'b-border-t-50 b-mr-10'}>Border Top 50</C3Border>
        <C3Border {...args} className={'b-border-t-75 b-ml-10'}>Border Top 75</C3Border>
        <C3Border {...args} className={'b-border-t-100 b-mr-10'}>Border Top 100</C3Border>
    </div>
);
export const BorderTop = BorderTopTemplate.bind({});

const BorderBottomTemplate: ComponentStory<typeof C3Border> = args => (
    <div className={'border-bottom'}>
        <C3Border {...args} className={'b-border-b-0 b-ml-10'}>Border Bottom 0</C3Border>
        <C3Border {...args} className={'b-border-b-1'}>Border Bottom 1</C3Border>
        <C3Border {...args} className={'b-border-b-2'}>Border Bottom 2</C3Border>
        <C3Border {...args} className={'b-border-b-3'}>Border Bottom 3</C3Border>
        <C3Border {...args} className={'b-border-b-4 b-mr-10'}>Border Bottom 4</C3Border>
        <C3Border {...args} className={'b-border-b-5 b-ml-10'}>Border Bottom 5</C3Border>
        <C3Border {...args} className={'b-border-b-10 b-ml-10'}>Border Bottom 10</C3Border>
        <C3Border {...args} className={'b-border-b-20'}>Border Bottom 20</C3Border>
        <C3Border {...args} className={'b-border-b-25'}>Border Bottom 25</C3Border>
        <C3Border {...args} className={'b-border-b-50 b-mr-10'}>Border Bottom 50</C3Border>
        <C3Border {...args} className={'b-border-b-75 b-ml-10'}>Border Bottom 75</C3Border>
        <C3Border {...args} className={'b-border-b-100 b-mr-10'}>Border Bottom 100</C3Border>
    </div>
);
export const BorderBottom = BorderBottomTemplate.bind({});

const BorderTopLeftTemplate: ComponentStory<typeof C3Border> = args => (
    <div className={'border-top-left'}>
            <C3Border {...args} className={'b-border-tl-0 b-ml-10'}>Border Top Left 0</C3Border>
            <C3Border {...args} className={'b-border-tl-1'}>Border Top Left 1</C3Border>
            <C3Border {...args} className={'b-border-tl-2'}>Border Top Left 2</C3Border>
            <C3Border {...args} className={'b-border-tl-3'}>Border Top Left 3</C3Border>
            <C3Border {...args} className={'b-border-tl-4 b-mr-10'}>Border Top Left 4</C3Border>
            <C3Border {...args} className={'b-border-tl-5 b-ml-10'}>Border Top Left 5</C3Border>
            <C3Border {...args} className={'b-border-tl-10 b-ml-10'}>Border Top Left 10</C3Border>
            <C3Border {...args} className={'b-border-tl-20'}>Border Top Left 20</C3Border>
            <C3Border {...args} className={'b-border-tl-25'}>Border Top Left 25</C3Border>
            <C3Border {...args} className={'b-border-tl-50 b-mr-10'}>Border Top Left 50</C3Border>
            <C3Border {...args} className={'b-border-tl-75 b-ml-10'}>Border Top Left 75</C3Border>
            <C3Border {...args} className={'b-border-tl-100 b-mr-10'}>Border Top Left 100</C3Border>
    </div>
);
export const BorderTopLeft = BorderTopLeftTemplate.bind({});

const BorderTopRightTemplate: ComponentStory<typeof C3Border> = args => (
    <div className={'border-top-right'}>
        <C3Border {...args} className={'b-border-tr-0 b-ml-10'}>Border Top Right 0</C3Border>
        <C3Border {...args} className={'b-border-tr-1'}>Border Top Right 1</C3Border>
        <C3Border {...args} className={'b-border-tr-2'}>Border Top Right 2</C3Border>
        <C3Border {...args} className={'b-border-tr-3'}>Border Top Right 3</C3Border>
        <C3Border {...args} className={'b-border-tr-4 b-mr-10'}>Border Top Right 4</C3Border>
        <C3Border {...args} className={'b-border-tr-5 b-ml-10'}>Border Top Right 5</C3Border>
        <C3Border {...args} className={'b-border-tr-10 b-ml-10'}>Border Top Right 10</C3Border>
        <C3Border {...args} className={'b-border-tr-20'}>Border Top Right 20</C3Border>
        <C3Border {...args} className={'b-border-tr-25'}>Border Top Right 25</C3Border>
        <C3Border {...args} className={'b-border-tr-50 b-mr-10'}>Border Top Right 50</C3Border>
        <C3Border {...args} className={'b-border-tr-75 b-ml-10'}>Border Top Right 75</C3Border>
        <C3Border {...args} className={'b-border-tr-100 b-mr-10'}>Border Top Right 100</C3Border>
    </div>
);
export const BorderTopRight = BorderTopRightTemplate.bind({});

const BorderBottomLeftTemplate: ComponentStory<typeof C3Border> = args => (
    <div className={'border-bottom-left'}>
        <C3Border {...args} className={'b-border-bl-0 b-ml-10'}>Border Bottom Left 0</C3Border>
        <C3Border {...args} className={'b-border-bl-1'}>Border Bottom Left 1</C3Border>
        <C3Border {...args} className={'b-border-bl-2'}>Border Bottom Left 2</C3Border>
        <C3Border {...args} className={'b-border-bl-3'}>Border Bottom Left 3</C3Border>
        <C3Border {...args} className={'b-border-bl-4 b-mr-10'}>Border Bottom Left 4</C3Border>
        <C3Border {...args} className={'b-border-bl-5 b-ml-10'}>Border Bottom Left 5</C3Border>
        <C3Border {...args} className={'b-border-bl-10 b-ml-10'}>Border Bottom Left 10</C3Border>
        <C3Border {...args} className={'b-border-bl-20'}>Border Bottom Left 20</C3Border>
        <C3Border {...args} className={'b-border-bl-25'}>Border Bottom Left 25</C3Border>
        <C3Border {...args} className={'b-border-bl-50 b-mr-10'}>Border Bottom Left 50</C3Border>
        <C3Border {...args} className={'b-border-bl-75 b-ml-10'}>Border Bottom Left 75</C3Border>
        <C3Border {...args} className={'b-border-bl-100 b-mr-10'}>Border Bottom Left 100</C3Border>
    </div>
);
export const BorderBottomLeft = BorderBottomLeftTemplate.bind({});

const BorderBottomRightTemplate: ComponentStory<typeof C3Border> = args => (
    <div className={'border-bottom-right'}>
        <C3Border {...args} className={'b-border-br-0 b-ml-10'}>Border Bottom Right 0</C3Border>
        <C3Border {...args} className={'b-border-br-1'}>Border Bottom Right 1</C3Border>
        <C3Border {...args} className={'b-border-br-2'}>Border Bottom Right 2</C3Border>
        <C3Border {...args} className={'b-border-br-3'}>Border Bottom Right 3</C3Border>
        <C3Border {...args} className={'b-border-br-4 b-mr-10'}>Border Bottom Right 4</C3Border>
        <C3Border {...args} className={'b-border-br-5 b-ml-10'}>Border Bottom Right 5</C3Border>
        <C3Border {...args} className={'b-border-br-10 b-ml-10'}>Border Bottom Right 10</C3Border>
        <C3Border {...args} className={'b-border-br-20'}>Border Bottom Right 20</C3Border>
        <C3Border {...args} className={'b-border-br-25'}>Border Bottom Right 25</C3Border>
        <C3Border {...args} className={'b-border-br-50 b-mr-10'}>Border Bottom Right 50</C3Border>
        <C3Border {...args} className={'b-border-br-75 b-ml-10'}>Border Bottom Right 75</C3Border>
        <C3Border {...args} className={'b-border-br-100 b-mr-10'}>Border Bottom Right 100</C3Border>
    </div>
);
export const BorderBottomRight = BorderBottomRightTemplate.bind({});

