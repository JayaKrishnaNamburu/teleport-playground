import React, { Component } from 'react';
import { sample } from './uidl-sample';
import MonacoEditor from 'react-monaco-editor';
import {
  UIDLValidators,
  createReactComponentGenerator
} from '@teleporthq/teleport-code-generators';
import * as babylon from 'babylon';
import travese from '@babel/traverse';
import generate from 'babel-generator';

class App extends Component {
  editorDidMount(editor, monaco) {
    editor.focus();
  }

  onChange(newValue, e) {
    let flag = UIDLValidators.validateComponent(newValue);
    if (flag) {
      try {
        const validJSON = JSON.parse(newValue);
        const reactGenerator = createReactComponentGenerator({ variation: 'CSSModules'});
        reactGenerator.generateComponent(validJSON)
          .then(result => {
            const { code, externalCSS } = result;
            const ast = babylon.parse(code, { sourceType: 'module', plugins: ["jsx"] });
            travese(ast, {
              ReturnStatement(path) {
                const generatedCode = generate(path.node.argument, {
                  retainLines: false,
                  compact: "auto",
                  concise: false
                }, code);
                const el = document.getElementById('holder');
                el.innerHTML = generatedCode.code;
              }
            });
          });
      } catch(e) {
       // console.log(e);
      }
    } else {
      const el = document.getElementById('holder');
      el.innerHTML = 'Input a valid UIDL';
    }
  }

  render() {
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <div className="wrapper">
        <div>
          <MonacoEditor
            width="800"
            height="100%"
            language="javascript"
            theme="vs-dark"
            value=''
            options={options}
            onChange={this.onChange}
            editorDidMount={this.editorDidMount}
          />
        </div>
        <div id="holder" className="holderWrapper">
          Live Preview of the generated code
          <p>
            Link for a collection of valid UIDL
            <a
              target="_blank"
              href="https://github.com/JayaKrishnaNamburu/teleport-code-generators/tree/master/examples/uidl-samples">
              examples
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
