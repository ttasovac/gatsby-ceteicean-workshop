import React from "react";
import Highlight, { defaultProps, themes } from "prism-react-renderer";

const SyntaxHiglight = (props) => {
  return (
    <Highlight
      {...defaultProps}
      theme={themes.vsDark}
      code={props.children.props.children.trim()}
      language="jsx"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
const Code = (props) => <SyntaxHiglight {...props} />;
export default Code;