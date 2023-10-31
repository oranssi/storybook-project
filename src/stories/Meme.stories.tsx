import React from "react";
import {Meta, StoryFn} from "@storybook/react";
import Meme, {MemeProps} from "../components/Meme";

export default {
    title: "Meme",
    component: Meme
} as Meta;

const Template: StoryFn<MemeProps> = (args) => <Meme {...args} />;

export const Default = Template.bind({});

Default.args = {
    topText: "Top Text",
    bottomText: "Bottom Text",
    randomImg: "https://i.imgflip.com/1bij.jpg"
};
