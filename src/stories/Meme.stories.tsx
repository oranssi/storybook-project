import React from "react";
import {Meta, StoryFn} from "@storybook/react";
import Meme, {MemeProps} from "../components/Meme";
import MemeData from "../data/MemeData";

export default {
    title: "Meme",
    component: Meme
} as Meta;

const Template: StoryFn<MemeProps> = (args) => <Meme {...args} />;

export const Default = Template.bind({});

const random: number = Math.floor(Math.random() * MemeData.data.memes.length);
const randomMemeImg: string = MemeData.data.memes[random].url;

Default.args = {
    topText: "Top Text",
    bottomText: "Bottom Text",
    randomImg: `${randomMemeImg}`
};
