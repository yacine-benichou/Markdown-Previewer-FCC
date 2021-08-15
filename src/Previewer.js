import marked from "marked";
import React from "react";

const renderer = new marked.Renderer();
// making sure the link works
renderer.link = function(href, title, text) {
    return `<a target="_blank" href="${href}">${text}` + "</a>"
}

class Previewer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
                <div id = "preview" dangerouslySetInnerHTML = {{__html: marked(this.props.input, {renderer: renderer})}} ></div>
        )
    }
}


export default Previewer;