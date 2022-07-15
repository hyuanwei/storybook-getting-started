import React from "react";
import { storiesOf } from "@storybook/react";
import MajorBanner from "../components/major.banner";
import MinorBanner from "../components/minor.banner";
import { text } from "@storybook/addon-knobs";

storiesOf("Component | Banners/Major", module)
    .add("With Only Title", () => (
        <MajorBanner
            title="Banner Title"
            photo="People Outdoors/shutterstock_116403520.jpg"
        ></MajorBanner>
    ))
    .add("With All Text Options", () => {
        const title = text("Title", "Banner Title");
        return (
            <MajorBanner
                title={title}
                photo="People Outdoors/shutterstock_116403520.jpg"
                subtitle="Banner Subtitle"
                body="Banner Body"
            ></MajorBanner>
        );
    });

storiesOf("Component | Banners/Minor", module)
    .add("No Pictures", () => (
        <MinorBanner
            title="Banner Title"
            subtitle="Banner Subtitle"
            body="Banner Body"
        ></MinorBanner>
    ))
    .add("With Pictures", () => (
        <MinorBanner
            title="Banner Title"
            subtitle="Banner Subtitle"
            body="Banner Body"
            leftPhoto=""
            RightPhoto=""
        ></MinorBanner>
    ));
