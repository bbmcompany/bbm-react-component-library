import {ComponentMeta, ComponentStory} from "@storybook/react";
import {C3Button} from "../Button/Button";
import {C3Tabs} from "./Tabs";
import './tabs-stories.scss'

export default {
    title: 'COMPONENTS/C3Tabs',
    component: C3Tabs,
    argTypes: {}
} as ComponentMeta<typeof C3Tabs>;

const VariantsTemplate: ComponentStory<typeof C3Tabs> = args => (
    <div className={'tabs'}>
        <C3Tabs {...args}>
            <C3Button>Button</C3Button>
            <C3Button>Tabs</C3Button>
            <C3Button>Group</C3Button>
        </C3Tabs>
        <C3Tabs {...args} fluid>
            <C3Button>Button</C3Button>
            <C3Button>Tabs</C3Button>
            <C3Button>Fluid</C3Button>
        </C3Tabs>
        <C3Tabs {...args}>
            <C3Button icon={'add_photo'}>Button</C3Button>
            <C3Button icon={'academy'}>Tabs</C3Button>
            <C3Button>With Icon Group</C3Button>
        </C3Tabs>
        <C3Tabs {...args} fluid>
            <C3Button icon={'add_photo'}>Button</C3Button>
            <C3Button icon={'academy'}>Tabs</C3Button>
            <C3Button>With Icon Fluid</C3Button>
        </C3Tabs>
        <C3Tabs {...args}>
            <C3Button icon={'add_photo'} iconButton/>
            <C3Button icon={'academy'} iconButton/>
            <C3Button>Only Icon Group</C3Button>
        </C3Tabs>
        <C3Tabs {...args} fluid>
            <C3Button icon={'add_photo'} iconButton>Button</C3Button>
            <C3Button icon={'academy'} iconButton>Tabs</C3Button>
            <C3Button>Only Icon Fluid</C3Button>
        </C3Tabs>
    </div>
);
export const Variants = VariantsTemplate.bind({});

const IconTemplate: ComponentStory<typeof C3Tabs> = args => (
    <div className={'tabs'}>
        <C3Tabs {...args} >
            <C3Button icon={'add_photo'}/>
            <C3Button icon={'academy'}/>
            <C3Button icon={'add_product'}/>
        </C3Tabs>
        <C3Tabs {...args} fluid>
            <C3Button icon={'add_photo'}/>
            <C3Button icon={'academy'}/>
            <C3Button icon={'add_product'}/>
        </C3Tabs>
        <C3Tabs {...args} primary>
            <C3Button icon={'add_photo'}/>
            <C3Button icon={'academy'}/>
            <C3Button icon={'add_product'}/>
        </C3Tabs>
        <C3Tabs {...args} primary fluid>
            <C3Button icon={'add_photo'}/>
            <C3Button icon={'academy'}/>
            <C3Button icon={'add_product'}/>
        </C3Tabs>
        <C3Tabs {...args} secondary>
            <C3Button icon={'add_photo'}/>
            <C3Button icon={'academy'}/>
            <C3Button icon={'add_product'}/>
        </C3Tabs>
        <C3Tabs {...args} secondary fluid>
            <C3Button icon={'add_photo'}/>
            <C3Button icon={'academy'}/>
            <C3Button icon={'add_product'}/>
        </C3Tabs>
        <C3Tabs {...args} tertiary>
            <C3Button icon={'add_photo'}/>
            <C3Button icon={'academy'}/>
            <C3Button icon={'add_product'}/>
        </C3Tabs>
        <C3Tabs {...args} tertiary fluid>
            <C3Button icon={'add_photo'}/>
            <C3Button icon={'academy'}/>
            <C3Button icon={'add_product'}/>
        </C3Tabs>
        <C3Tabs {...args} orange>
            <C3Button icon={'add_photo'}/>
            <C3Button icon={'academy'}/>
            <C3Button icon={'add_product'}/>
        </C3Tabs>
        <C3Tabs {...args} orange fluid>
            <C3Button icon={'add_photo'}/>
            <C3Button icon={'academy'}/>
            <C3Button icon={'add_product'}/>
        </C3Tabs>
        <C3Tabs {...args} grey>
            <C3Button icon={'add_photo'}/>
            <C3Button icon={'academy'}/>
            <C3Button icon={'add_product'}/>
        </C3Tabs>
        <C3Tabs {...args} grey fluid>
            <C3Button icon={'add_photo'}/>
            <C3Button icon={'academy'}/>
            <C3Button icon={'add_product'}/>
        </C3Tabs>
        <C3Tabs {...args} error>
            <C3Button icon={'add_photo'}/>
            <C3Button icon={'academy'}/>
            <C3Button icon={'add_product'}/>
        </C3Tabs>
        <C3Tabs {...args} error fluid>
            <C3Button icon={'add_photo'}/>
            <C3Button icon={'academy'}/>
            <C3Button icon={'add_product'}/>
        </C3Tabs>
        <C3Tabs {...args} success>
            <C3Button icon={'add_photo'}/>
            <C3Button icon={'academy'}/>
            <C3Button icon={'add_product'}/>
        </C3Tabs>
        <C3Tabs {...args} success fluid>
            <C3Button icon={'add_photo'}/>
            <C3Button icon={'academy'}/>
            <C3Button icon={'add_product'}/>
        </C3Tabs>
        <C3Tabs {...args} warning>
            <C3Button icon={'add_photo'}/>
            <C3Button icon={'academy'}/>
            <C3Button icon={'add_product'}/>
        </C3Tabs>
        <C3Tabs {...args} warning fluid>
            <C3Button icon={'add_photo'}/>
            <C3Button icon={'academy'}/>
            <C3Button icon={'add_product'}/>
        </C3Tabs>
        <C3Tabs {...args} info>
            <C3Button icon={'add_photo'}/>
            <C3Button icon={'academy'}/>
            <C3Button icon={'add_product'}/>
        </C3Tabs>
        <C3Tabs {...args} info fluid>
            <C3Button icon={'add_photo'}/>
            <C3Button icon={'academy'}/>
            <C3Button icon={'add_product'}/>
        </C3Tabs>
    </div>
);
export const OnlyIcon = IconTemplate.bind({});

const WithIconTemplate: ComponentStory<typeof C3Tabs> = args => (
    <div className={'tabs'}>
        <C3Tabs {...args} >
            <C3Button icon={'add_photo'}>Button</C3Button>
            <C3Button icon={'academy'}>Tabs</C3Button>
            <C3Button>With Icon</C3Button>
        </C3Tabs>
        <C3Tabs {...args} fluid>
            <C3Button icon={'add_photo'}>Button</C3Button>
            <C3Button icon={'academy'}>Tabs</C3Button>
            <C3Button>With Icon</C3Button>
        </C3Tabs>
        <C3Tabs {...args} primary>
            <C3Button icon={'add_photo'}>Button</C3Button>
            <C3Button icon={'academy'}>Tabs</C3Button>
            <C3Button>With Icon</C3Button>
        </C3Tabs>
        <C3Tabs {...args} primary fluid>
            <C3Button icon={'add_photo'}>Button</C3Button>
            <C3Button icon={'academy'}>Tabs</C3Button>
            <C3Button>With Icon</C3Button>
        </C3Tabs>
        <C3Tabs {...args} secondary>
            <C3Button icon={'add_photo'}>Button</C3Button>
            <C3Button icon={'academy'}>Tabs</C3Button>
            <C3Button>With Icon</C3Button>
        </C3Tabs>
        <C3Tabs {...args} secondary fluid>
            <C3Button icon={'add_photo'}>Button</C3Button>
            <C3Button icon={'academy'}>Tabs</C3Button>
            <C3Button>With Icon</C3Button>
        </C3Tabs>
        <C3Tabs {...args} tertiary>
            <C3Button icon={'add_photo'}>Button</C3Button>
            <C3Button icon={'academy'}>Tabs</C3Button>
            <C3Button>With Icon</C3Button>
        </C3Tabs>
        <C3Tabs {...args} tertiary fluid>
            <C3Button icon={'add_photo'}>Button</C3Button>
            <C3Button icon={'academy'}>Tabs</C3Button>
            <C3Button>With Icon</C3Button>
        </C3Tabs>
        <C3Tabs {...args} orange>
            <C3Button icon={'add_photo'}>Button</C3Button>
            <C3Button icon={'academy'}>Tabs</C3Button>
            <C3Button>With Icon</C3Button>
        </C3Tabs>
        <C3Tabs {...args} orange fluid>
            <C3Button icon={'add_photo'}>Button</C3Button>
            <C3Button icon={'academy'}>Tabs</C3Button>
            <C3Button>With Icon</C3Button>
        </C3Tabs>
        <C3Tabs {...args} grey>
            <C3Button icon={'add_photo'}>Button</C3Button>
            <C3Button icon={'academy'}>Tabs</C3Button>
            <C3Button>With Icon</C3Button>
        </C3Tabs>
        <C3Tabs {...args} grey fluid>
            <C3Button icon={'add_photo'}>Button</C3Button>
            <C3Button icon={'academy'}>Tabs</C3Button>
            <C3Button>With Icon</C3Button>
        </C3Tabs>
        <C3Tabs {...args} error>
            <C3Button icon={'add_photo'}>Button</C3Button>
            <C3Button icon={'academy'}>Tabs</C3Button>
            <C3Button>With Icon</C3Button>
        </C3Tabs>
        <C3Tabs {...args} error fluid>
            <C3Button icon={'add_photo'}>Button</C3Button>
            <C3Button icon={'academy'}>Tabs</C3Button>
            <C3Button>With Icon</C3Button>
        </C3Tabs>
        <C3Tabs {...args} success>
            <C3Button icon={'add_photo'}>Button</C3Button>
            <C3Button icon={'academy'}>Tabs</C3Button>
            <C3Button>With Icon</C3Button>
        </C3Tabs>
        <C3Tabs {...args} success fluid>
            <C3Button icon={'add_photo'}>Button</C3Button>
            <C3Button icon={'academy'}>Tabs</C3Button>
            <C3Button>With Icon</C3Button>
        </C3Tabs>
        <C3Tabs {...args} warning>
            <C3Button icon={'add_photo'}>Button</C3Button>
            <C3Button icon={'academy'}>Tabs</C3Button>
            <C3Button>With Icon</C3Button>
        </C3Tabs>
        <C3Tabs {...args} warning fluid>
            <C3Button icon={'add_photo'}>Button</C3Button>
            <C3Button icon={'academy'}>Tabs</C3Button>
            <C3Button>With Icon</C3Button>
        </C3Tabs>
        <C3Tabs {...args} info>
            <C3Button icon={'add_photo'}>Button</C3Button>
            <C3Button icon={'academy'}>Tabs</C3Button>
            <C3Button>With Icon</C3Button>
        </C3Tabs>
        <C3Tabs {...args} info fluid>
            <C3Button icon={'add_photo'}>Button</C3Button>
            <C3Button icon={'academy'}>Tabs</C3Button>
            <C3Button>With Icon</C3Button>
        </C3Tabs>
    </div>
);
export const WithIcon = WithIconTemplate.bind({});


const CustomTemplate: ComponentStory<typeof C3Tabs> = args => (
    <div className={'tabs'}>
        <C3Tabs {...args} >
            <C3Button icon={'add_photo'}>Button</C3Button>
            <C3Button icon={'academy'}>Tabs</C3Button>
            <C3Button>With Icon</C3Button>
        </C3Tabs>
    </div>
);
export const Custom = CustomTemplate.bind({});