import React from 'react';
import {Profile} from "@/components/main/blocks";
import {textProfile, textProfileFile} from "@/components/main/blocks/Profile";

const About = () => {
    return (
        <div className="wrapper">
            <h1>About</h1>
            <Profile>{textProfileFile}</Profile>
        </div>
    );
};

export default About;