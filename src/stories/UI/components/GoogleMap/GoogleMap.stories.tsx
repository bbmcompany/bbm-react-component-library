import { ComponentMeta, ComponentStory } from "@storybook/react";
import { C3GoogleMap } from "./GoogleMap";

export default {
    title: 'COMPONENTS/C3GoogleMap',
    component: C3GoogleMap,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: {
                    'xs': 'xs',
                    's': 's',
                    'm': 'm',
                    'l': 'l',
                }
            }
        },
    }
} as ComponentMeta<typeof C3GoogleMap>;

const GoogleMapTemplate : ComponentStory<typeof C3GoogleMap> = args => (
    <div className={'google-map'}>
        <C3GoogleMap {...args}></C3GoogleMap>
    </div>
);
export const GoogleMap = GoogleMapTemplate.bind({});