import PropTypes from "prop-types";

const Heading = ({ data, style = [], type }) => {
  let Tag;
  let classes = [...style];

  switch (type) {
    case "heading":
      Tag = "h1";
      classes = [...classes, "text-xl", "font-bold", "text-center"];
      break;
    case "sub-heading":
      Tag = "h2";
      classes = [...classes, "text-lg", "font-semibold", "text-gray-800"];
      break;
    case "small-sub-heading":
      Tag = "h3";
      classes = [...classes, "text-md", "text-gray-500"];
      break;
    default:
      Tag = "p";
      classes = [...classes, "", ""];
      break;
  }

  return <Tag className={classes.join(" ")}>{data}</Tag>;
};

Heading.propTypes = {
  data: PropTypes.string.isRequired,
  style: PropTypes.arrayOf(PropTypes.string),
  type: PropTypes.oneOf([
    "heading",
    "sub-heading",
    "small-sub-heading",
    "paragraph",
  ]),
};

export default Heading;
