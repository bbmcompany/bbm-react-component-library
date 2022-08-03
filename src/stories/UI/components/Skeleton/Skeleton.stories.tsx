import {ComponentMeta, ComponentStory} from "@storybook/react";
import {C3Skeleton} from "./Skeleton";
import './skleton-stories.scss'

export default {
    title: 'COMPONENTS/C3Skeleton',
    component: C3Skeleton,
    argTypes: {}
} as ComponentMeta<typeof C3Skeleton>;

const VariantsTemplate: ComponentStory<typeof C3Skeleton> = args => (
    <div className={'skeleton'}>
        <div className={'skeleton-template-basic'}>
            <C3Skeleton {...args} className={'b-m-5'}></C3Skeleton>
        </div>
        <div className={'skeleton-template-custom'}>
            <C3Skeleton {...args} height={40} width={40} borderRadius={100} className={'b-m-5'}></C3Skeleton>
            <C3Skeleton {...args} height={20} width={200} className={'b-m-5'}></C3Skeleton>
            <C3Skeleton {...args} height={150} width={200} className={'b-m-5'}></C3Skeleton>
        </div>
        <div className={'skeleton-template-custom'}>
            <C3Skeleton {...args} height={40} width={40} borderRadius={100} className={'b-m-5'}></C3Skeleton>
            <C3Skeleton {...args} height={20} width={100} className={'b-m-5'}></C3Skeleton>
            <C3Skeleton {...args} height={40} width={150} className={'b-m-5'}></C3Skeleton>
            <C3Skeleton {...args} height={60} width={200} className={'b-m-5'}></C3Skeleton>
        </div>
        <div className={'skeleton-template-custom'}>

            <div className={'custom-image'}>
                <C3Skeleton {...args} height={40} width={40} borderRadius={100} className={'b-m-5'}></C3Skeleton>
                <C3Skeleton {...args} height={40} width={40} borderRadius={100} className={'b-m-5'}></C3Skeleton>
            </div>
            <C3Skeleton {...args} height={20} width={200} className={'b-m-5'}></C3Skeleton>
            <C3Skeleton {...args} height={50} width={200} className={'b-m-5'}></C3Skeleton>
            <C3Skeleton {...args} height={70} width={200} className={'b-m-5'}></C3Skeleton>
        </div>
    </div>
);
export const Variants = VariantsTemplate.bind({});