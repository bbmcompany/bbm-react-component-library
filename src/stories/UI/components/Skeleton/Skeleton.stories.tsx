import {ComponentMeta, ComponentStory} from "@storybook/react";
import { C3Box } from "../Box/Box";
import {C3Skeleton} from "./Skeleton";
import './skleton-stories.scss'

export default {
    title: 'COMPONENTS/C3Skeleton',
    component: C3Skeleton,
    argTypes: {}
} as ComponentMeta<typeof C3Skeleton>;

const VariantsTemplate: ComponentStory<typeof C3Skeleton> = args => (
    <C3Box d={'flex'} justify={'between'} className={'skeleton'}>
        <C3Box>
            <C3Skeleton {...args} className={'b-m-5'}></C3Skeleton>
        </C3Box>
        <C3Box d={'flex'} displaydirection={'column'} className={'skeleton-template-custom'}>
            <C3Skeleton {...args} height={40} width={40}  className={'b-m-5 b-border-100'}></C3Skeleton>
            <C3Skeleton {...args} height={20} width={200} className={'b-m-5'}></C3Skeleton>
            <C3Skeleton {...args} height={150} width={200} className={'b-m-5'}></C3Skeleton>
        </C3Box>
        <C3Box className={'skeleton-template-custom'}>
            <C3Skeleton {...args} height={40} width={40} className={'b-m-5 b-border-100'}></C3Skeleton>
            <C3Skeleton {...args} height={20} width={100} className={'b-m-5'}></C3Skeleton>
            <C3Skeleton {...args} height={40} width={150} className={'b-m-5'}></C3Skeleton>
            <C3Skeleton {...args} height={60} width={200} className={'b-m-5'}></C3Skeleton>
        </C3Box>
        <C3Box className={'skeleton-template-custom'}>

            <C3Box d={'flex'} className={'custom-image'}>
                <C3Skeleton {...args} height={40} width={40} className={'b-border-100'}></C3Skeleton>
                <C3Skeleton {...args} height={40} width={40}  className={'b-border-100'}></C3Skeleton>
            </C3Box>
            <C3Skeleton {...args} height={20} width={200} className={'b-m-5'}></C3Skeleton>
            <C3Skeleton {...args} height={50} width={200} className={'b-m-5'}></C3Skeleton>
            <C3Skeleton {...args} height={70} width={200} className={'b-m-5'}></C3Skeleton>
        </C3Box>
    </C3Box>
);
export const Variants = VariantsTemplate.bind({});