import {ComponentMeta, ComponentStory} from "@storybook/react";
import { C3Display } from "./display";
import './display-stories.scss'

export default {
    title: 'UTILITIES/C3Display',
    component: C3Display,
    argTypes: {}
} as ComponentMeta<typeof C3Display>


const DisplayNoneTemplate: ComponentStory<typeof C3Display> = args => (
    <div className={'display-none'}>
        <div className={'b-m-20'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum nulla sem, at vehicula urna
            mollis at. Nulla ultricies volutpat magna nec scelerisque. <C3Display className={'b-none'}>Fusce varius nibh massa, nec dictum ante aliquam
                quis.</C3Display> Mauris quis arcu vulputate, malesuada nibh et, tincidunt dui. Integer viverra urna vel suscipit
            congue. Cras dignissim hendrerit nulla et lobortis. Nulla quis elementum sapien, nec molestie nulla. Donec
            eu elementum tellus, vel hendrerit sapien. Etiam dapibus lorem ut enim porta luctus.
        </div>
    </div>
);
export const None = DisplayNoneTemplate.bind({});

const DisplayInlineTemplate: ComponentStory<typeof C3Display> = args => (
    <div className={'display-inline'}>
        <div className={'b-m-20'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum nulla sem, at vehicula urna
            mollis at. Nulla ultricies volutpat magna nec scelerisque. <C3Display className={'b-inline'}>Fusce varius nibh massa, nec dictum ante aliquam
                quis.</C3Display> Mauris quis arcu vulputate, malesuada nibh et, tincidunt dui. Integer viverra urna vel suscipit
            congue. Cras dignissim hendrerit nulla et lobortis. Nulla quis elementum sapien, nec molestie nulla. Donec
            eu elementum tellus, vel hendrerit sapien. Etiam dapibus lorem ut enim porta luctus.
        </div>
    </div>
);
export const Inline = DisplayInlineTemplate.bind({});
