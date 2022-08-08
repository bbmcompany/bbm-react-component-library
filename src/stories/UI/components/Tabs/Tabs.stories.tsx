import { ComponentMeta, ComponentStory } from "@storybook/react";
import { C3Button } from "../Button/Button";
import { C3Tabs } from "./Tabs";
import  './tabs-stories.scss'

export default {
    title: 'COMPONENTS/C3Tabs',
    component: C3Tabs,
    argTypes : {

    }
} as ComponentMeta<typeof C3Tabs>;

const VariantsTemplate: ComponentStory<typeof C3Tabs> = args => (
    <div className={'tabs'}>
        <C3Tabs {...args}>
            <C3Button>Button</C3Button>
            <C3Button>Tabs</C3Button>
            <C3Button>Fluid</C3Button>
        </C3Tabs>
        <C3Tabs {...args} fluid>
            <C3Button>Button</C3Button>
            <C3Button>Tabs</C3Button>
            <C3Button>Group</C3Button>
        </C3Tabs>
        <C3Tabs {...args}>
            <C3Button icon={'add_photo'}>Button</C3Button>
            <C3Button icon={'academy'}>Tabs</C3Button>
            <C3Button>With Icon</C3Button>
        </C3Tabs>
        <C3Tabs {...args} fluid>
            <C3Button icon={'add_photo'}>Button</C3Button>
            <C3Button icon={'academy'}>Tabs</C3Button>
            <C3Button>With Icon</C3Button>
        </C3Tabs>
        <C3Tabs {...args}>
            <C3Button icon={'add_photo'} iconButton>Button</C3Button>
            <C3Button icon={'academy'} iconButton>Tabs</C3Button>
            <C3Button>Only Icon</C3Button>
        </C3Tabs>
        <C3Tabs {...args} fluid>
            <C3Button icon={'add_photo'} iconButton>Button</C3Button>
            <C3Button icon={'academy'} iconButton>Tabs</C3Button>
            <C3Button>Only Icon</C3Button>
        </C3Tabs>
    </div>
);
export const Variants = VariantsTemplate.bind({});

const AbsoluteOnlyIconTemplate: ComponentStory<typeof C3Tabs> = args => (
    <div className={'tabs'}>
        <C3Tabs {...args} className={'b-position-absolute'}>
            <C3Button icon={'add_photo'} iconButton>Button</C3Button>
            <C3Button icon={'academy'} iconButton>Tabs</C3Button>
            <C3Button>Only Icon</C3Button>
        </C3Tabs>
    </div>
);
export const AbsoluteOnlyIcon = AbsoluteOnlyIconTemplate.bind({});

const AbsoluteWithIconTemplate: ComponentStory<typeof C3Tabs> = args => (
    <div className={'tabs'}>
        <C3Tabs {...args} className={'b-position-absolute'}>
            <C3Button icon={'add_photo'}>Button</C3Button>
            <C3Button icon={'academy'}>Tabs</C3Button>
            <C3Button>With Icon</C3Button>
        </C3Tabs>
    </div>
);
export const AbsoluteWithIcon = AbsoluteWithIconTemplate.bind({});