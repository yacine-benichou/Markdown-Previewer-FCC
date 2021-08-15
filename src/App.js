import marked from "marked";
import React from "react";
import Editor from "./Editor";
import Previewer from "./Previewer";

// here is the code to interpret carriage return

marked.setOptions({
  breaks: true,
})


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: placeholder
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState(state => ({
      input: e.target.value
    }))
  }
  
  render() {
    return(
      <div className = "App">
        <div className = "container">
        <h1 className = "title text-center">Welcome to my React Markdown Previewer</h1>
          <div className = "row mt-4">
            <div className = "col-md-6">
              <div className = "col text-center">
                <h2>Editor</h2>
                <Editor input = {this.state.input} onChange = {this.handleChange} />
              </div>
            </div>
            <div className = "col-md-6">
              <div className = "col text-center">
                <h2>Previewer</h2>
                <Previewer input = {this.state.input} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const placeholder = `Here’s an overview of <strong>Markdown syntax</strong> that you can use anywhere.

# Headers

# This is an h1 tag
## This is an h2 tag
### This is an h3 tag

---
# Emphasis

**This text will be bold** |
__This will also be bold__

*This text will be italic* |
_This will also be italic_

***This text will be bold and italic*** |
___This text will be bold and italic___

And **you** can _combine them_

---
# Lists
## Unordered

* Item 1
* Item 2
* Item 2a
* Item 2b

## Ordered

1. Item 1
1. Item 2
1. Item 3
1. Item 3a
1. Item 3b

---
# Links

[React](https://reactjs.org/)
<br>[Hello World](https://reactjs.org/docs/hello-world.html)
[React Top-Level API](https://reactjs.org/docs/react-api.html)

---
# Inline code

I think you should use an \`<addr>\` element here instead.

---
# Codeblock

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

---
# Blockquotes

As Kanye West said:

> Everbody wanted to know what I would do if I didn't win.

>I guess we'll never know.

---
# Images

![Javascript Logo](https://cursoreactjs.com/images/iconos/icono_js.svg)

`;

export default App;