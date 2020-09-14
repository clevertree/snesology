import * as React from "react";
import {ASUIPageContainer, ASUIMarkdown} from "../audio-source/components";

import ASComposer from "../audio-source/composer/ASComposer";

export default class DemoPage extends React.Component {
    render() {
        return (
            <ASUIPageContainer {...this.props}>
                <ASUIMarkdown source={`
                    # Audio Source Composer Demo
                `}/>

                <ASComposer playlist="/pls/feed/home.pls"/>
                <ASUIMarkdown source={`
                    Menu->View->Enable Fullscreen to render in landscape mode.
                    
                    [or load the Composer by itself](/composer)
               
                    More instructions coming soon...
                `}/>
            </ASUIPageContainer>
        );
    }
}

