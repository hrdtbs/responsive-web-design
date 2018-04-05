import ReactMarkdown from "react-markdown";
import { Highlight } from "react-fast-highlight";

function flatten(text, child) {
  return typeof child === "string"
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
}

function HeadingRenderer(props) {
  var children = React.Children.toArray(props.children);
  var text = children.reduce(flatten, "");
  var slug = text
    .toLowerCase()
    .replace(/(<|>|&|"|'|\u005c|\u0020)/g, "-")
    .replace(/(\(|\))/g, "");
  return React.createElement("h" + props.level, { id: slug }, props.children);
}

const Link = props =>
  props.href.slice(0, 1) === "#" ? (
    <a href={props.href}>{props.children}</a>
  ) : (
    <a href={props.href} target="_blank">
      {props.children}
    </a>
  );

const Code = props => (
  <Highlight languages={[props.language || "html"]}>{props.value}</Highlight>
);

const Image = props => {
  try {
    if (props.src.match(/\.mp4$/)) {
      return <video src={`${props.src}`} controls />;
    } else {
      return <img src={`${props.src}`} alt={props.src} />;
    }
  } catch (error) {
    console.info(props, error);
    return (
      <span style={{ color: "grey", fontSize: "0.9em" }}>
        This image is Not Found - {props.src}
      </span>
    );
  }
  //return <img src={process.env.REACT_APP_PATH + props.src} />;
};

const Markdown = ({ source }) => {
  return (
    <ReactMarkdown
      source={source}
      className="container"
      renderers={{
        link: Link,
        code: Code,
        image: Image,
        heading: HeadingRenderer
      }}
    />
  );
};

export default Markdown;
