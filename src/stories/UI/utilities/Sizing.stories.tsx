import {ComponentMeta, ComponentStory} from "@storybook/react";
import {C3Sizing} from "./Sizing";
import './sizing-stories.scss'

export default {
    title: 'UTILITIES/C3Sizing',
    component: C3Sizing,
    argTypes: {}
} as ComponentMeta<typeof C3Sizing>

const WidthTemplate: ComponentStory<typeof C3Sizing> = args => (
    <div className={'width-template'}>
        <C3Sizing {...args} className={'b-w-auto'}>Width auto</C3Sizing>
        <C3Sizing {...args} className={'b-w-10'}>Width 10%</C3Sizing>
        <C3Sizing {...args} className={'b-w-25'}>Width 25%</C3Sizing>
        <C3Sizing {...args} className={'b-w-50'}>Width 50%</C3Sizing>
        <C3Sizing {...args} className={'b-w-75'}>Width 75%</C3Sizing>
        <C3Sizing {...args} className={'b-w-100'}>Width 100%</C3Sizing>
    </div>
);
export const Width = WidthTemplate.bind({});

const HeightTemplate: ComponentStory<typeof C3Sizing> = args => (
    <div className={'height-template'}>
        <C3Sizing {...args} className={'b-h-auto'}>Height auto</C3Sizing>
        <C3Sizing {...args} className={'b-h-10'}>Height 10%</C3Sizing>
        <C3Sizing {...args} className={'b-h-25'}>Height 25%</C3Sizing>
        <C3Sizing {...args} className={'b-h-50'}>Height 50%</C3Sizing>
        <C3Sizing {...args} className={'b-h-75'}>Height 75%</C3Sizing>
        <C3Sizing {...args} className={'b-h-100'}>Height 100%</C3Sizing>
    </div>
);
export const Height = HeightTemplate.bind({});

const WidthHeightTemplate: ComponentStory<typeof C3Sizing> = args => (
    <div className={'width-height-template'}>
        <C3Sizing {...args} className={'b-sz-auto'}>Width & Height auto</C3Sizing>
        <C3Sizing {...args} className={'b-sz-10'}>Width & Height 10%</C3Sizing>
        <C3Sizing {...args} className={'b-sz-25'}>Width & Height 25%</C3Sizing>
        <C3Sizing {...args} className={'b-sz-50'}>Width & Height 50%</C3Sizing>
        <C3Sizing {...args} className={'b-sz-75'}>Width & Height 75%</C3Sizing>
        <C3Sizing {...args} className={'b-sz-100'}>Width & Height 100%</C3Sizing>
    </div>
);
export const WidthAndHeight = WidthHeightTemplate.bind({});

const MaxWidthTemplate: ComponentStory<typeof C3Sizing> = args => (
    <div className={'max-width-template'}>
        <C3Sizing {...args} className={'b-mxw-10'}>Max Width 10% Vivamus sit amet magna lorem.</C3Sizing>
        <C3Sizing {...args} className={'b-mxw-25'}>Max Width 25% Cras placerat placerat enim nec ullamcorper.</C3Sizing>
        <C3Sizing {...args} className={'b-mxw-50'}>Max Width 50% Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Curabitur magna augue, molestie vitae est sed, suscipit ultricies massa.</C3Sizing>
        <C3Sizing {...args} className={'b-mxw-75'}>Max Width 75% Sed gravida leo quam, vel dictum elit commodo
            sed. Vivamus a dui et lacus porta faucibus. Ut nibh arcu, cursus vitae luctus a, egestas sit amet
            felis.</C3Sizing>
        <C3Sizing {...args} className={'b-mxw-100'}>Max Width 100% Pellentesque habitant morbi tristique senectus et
            netus et malesuada. Etiam eu vulputate orci. Aenean ultrices vulputate arcu, in accumsan ipsum ultrices
            venenatis.</C3Sizing>
    </div>
);
export const MaxWidth = MaxWidthTemplate.bind({});

const MaxHeightTemplate: ComponentStory<typeof C3Sizing> = args => (
    <div className={'max-height-template'}>
        <C3Sizing {...args} className={'b-mxh-10'}>Max Height 10%</C3Sizing>
        <C3Sizing {...args} className={'b-mxh-25'}>Max Height 25%</C3Sizing>
        <C3Sizing {...args} className={'b-mxh-50'}>Max Height 50%</C3Sizing>
        <C3Sizing {...args} className={'b-mxh-75'}>Max Height 75%</C3Sizing>
        <C3Sizing {...args} className={'b-mxh-100'}>Max Height 100%</C3Sizing>
    </div>
);
export const MaxHeight = MaxHeightTemplate.bind({});

const MinWidthTemplate: ComponentStory<typeof C3Sizing> = args => (
    <div className={'min-width-template'}>
        <C3Sizing {...args} className={'b-mnw-10'}>Min Width 10%</C3Sizing>
        <C3Sizing {...args} className={'b-mnw-25'}>Min Width 25%</C3Sizing>
        <C3Sizing {...args} className={'b-mnw-50'}>Min Width 50%</C3Sizing>
        <C3Sizing {...args} className={'b-mnw-75'}>Min Width 75%</C3Sizing>
        <C3Sizing {...args} className={'b-mnw-100'}>Min Width 100%</C3Sizing>
    </div>
);
export const MinWidth = MinWidthTemplate.bind({});

const MinHeightTemplate: ComponentStory<typeof C3Sizing> = args => (
    <div className={'min-height-template'}>
        <C3Sizing {...args} className={'b-mnh-10'}>Min Height 10%</C3Sizing>
        <C3Sizing {...args} className={'b-mnh-25'}>Min Height 25%</C3Sizing>
        <C3Sizing {...args} className={'b-mnh-50'}>Min Height 50%</C3Sizing>
        <C3Sizing {...args} className={'b-mnh-75'}>Min Height 75%</C3Sizing>
        <C3Sizing {...args} className={'b-mnh-100'}>Min Height 100%</C3Sizing>
    </div>
);
export const MinHeight = MinHeightTemplate.bind({});