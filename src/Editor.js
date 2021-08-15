import React from "react";

let inputStyle = {
    width: "100%",
    minheight: "200px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "10px",
  }

class Editor extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div style = {{maxWidth: "600px"}}>
                <textarea id = "editor" onChange = {this.props.onChange} type = "text" value = {this.props.input} style = {{width: "100%", minHeight: "200px", marginBottom: "-5px", resize: "vertical"}}></textarea>
            </div>
        )
    }
}

export default Editor;