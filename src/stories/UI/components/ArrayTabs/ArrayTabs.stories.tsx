import { ComponentMeta, ComponentStory } from "@storybook/react";
import { C3ArrayTabs } from "./ArrayTabs";
import './array-tabs-stories.scss'
import { C3Box } from "../Box/Box";
export default  {
    title: 'COMPONENTS/C3ArrayTabs',
    component: C3ArrayTabs,
    argTypes: {
    }
} as ComponentMeta<typeof C3ArrayTabs>;


const VariantsTemplate: ComponentStory<typeof C3ArrayTabs> = args => (
    <C3Box d={'flex'} displaydirection={'column'} className='array-tabs'>
        <C3ArrayTabs {...args} orange tabs={['All', "Today's Deals", 'Customer Service', 'Registery', 'Sell']} className={'b-position-relative'}></C3ArrayTabs>
        <C3ArrayTabs  {...args} orange tabs={['All', "Today's Deals", 'Customer Service', 'Registery', 'Sell']} className={'b-position-relative'} fluid></C3ArrayTabs>
        <C3ArrayTabs {...args} orange tabs={['All', "Today's Deals", 'Customer Service', 'Registery', 'Sell']} className={'b-position-relative'}></C3ArrayTabs>
        <C3ArrayTabs  {...args} orange tabs={['All', "Today's Deals", 'Customer Service', 'Registery', 'Sell']} className={'b-position-relative'} fluid></C3ArrayTabs>
    </C3Box>
);
export const Variants = VariantsTemplate.bind({});

const AbsoulteTemplate: ComponentStory<typeof C3ArrayTabs> = args => (
    <C3Box className='array-tabs'>
        <C3ArrayTabs {...args} tabs={['Position', 'Absolute', 'C3PO']} className={'b-position-absolute'}></C3ArrayTabs>
    </C3Box>
);
export const Absoulte = AbsoulteTemplate.bind({});

const RelativeTemplate: ComponentStory<typeof C3ArrayTabs> = args => (
    <C3Box d={'flex'} displaydirection={'column'} className='array-tabs'>
        <C3ArrayTabs {...args} tabs={['Position', 'Relative', 'Fluid']} className={'b-position-relative'} fluid></C3ArrayTabs>
        <C3ArrayTabs {...args} tabs={['Position', 'Relative', 'C3PO']} className={'b-position-relative'}></C3ArrayTabs>
        <C3ArrayTabs {...args} primary tabs={['Position', 'Relative', 'Fluid']} className={'b-position-relative'} fluid></C3ArrayTabs>
        <C3ArrayTabs {...args} primary tabs={['Position', 'Relative', 'C3PO']} className={'b-position-relative'}></C3ArrayTabs>
        <C3ArrayTabs {...args} secondary tabs={['Position', 'Relative', 'Fluid']} className={'b-position-relative'} fluid></C3ArrayTabs>
        <C3ArrayTabs {...args} secondary tabs={['Position', 'Relative', 'C3PO']} className={'b-position-relative'}></C3ArrayTabs>
        <C3ArrayTabs {...args} tertiary tabs={['Position', 'Relative', 'Fluid']} className={'b-position-relative'} fluid></C3ArrayTabs>
        <C3ArrayTabs {...args} tertiary tabs={['Position', 'Relative', 'C3PO']} className={'b-position-relative'}></C3ArrayTabs>
        <C3ArrayTabs {...args} orange tabs={['Position', 'Relative', 'Fluid']} className={'b-position-relative'} fluid></C3ArrayTabs>
        <C3ArrayTabs {...args} orange tabs={['Position', 'Relative', 'C3PO']} className={'b-position-relative'}></C3ArrayTabs>
        <C3ArrayTabs {...args} grey tabs={['Position', 'Relative', 'Fluid']} className={'b-position-relative'} fluid></C3ArrayTabs>
        <C3ArrayTabs {...args} grey tabs={['Position', 'Relative', 'C3PO']} className={'b-position-relative'}></C3ArrayTabs>
        <C3ArrayTabs {...args} error tabs={['Position', 'Relative', 'Fluid']} className={'b-position-relative'} fluid></C3ArrayTabs>
        <C3ArrayTabs {...args} error tabs={['Position', 'Relative', 'C3PO']} className={'b-position-relative'}></C3ArrayTabs>
        <C3ArrayTabs {...args} success tabs={['Position', 'Relative', 'Fluid']} className={'b-position-relative'} fluid></C3ArrayTabs>
        <C3ArrayTabs {...args} success tabs={['Position', 'Relative', 'C3PO']} className={'b-position-relative'}></C3ArrayTabs>
        <C3ArrayTabs {...args} warning tabs={['Position', 'Relative', 'Fluid']} className={'b-position-relative'} fluid></C3ArrayTabs>
        <C3ArrayTabs {...args} warning tabs={['Position', 'Relative', 'C3PO']} className={'b-position-relative'}></C3ArrayTabs>
        <C3ArrayTabs {...args} info tabs={['Position', 'Relative', 'Fluid']} className={'b-position-relative'} fluid></C3ArrayTabs>
        <C3ArrayTabs {...args} info tabs={['Position', 'Relative', 'C3PO']} className={'b-position-relative'}></C3ArrayTabs>

    </C3Box>
);
export const Relative = RelativeTemplate.bind({});