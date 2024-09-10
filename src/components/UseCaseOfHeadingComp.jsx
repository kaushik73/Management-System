import Heading from "../wrapperTags/Heading";

const UseCaseOfHeadingComp = () => {
  return (
    <div>
      <Heading
        data="Main Title"
        // style={["text-xl", "font-bold", "text-center"]}
        type="heading"
      />

      <Heading
        data="Subtitle Example"
        // style={["text-lg", "text-left", "text-gray-500"]}
        type="sub-heading"
      />

      <Heading
        data="Some description text goes here."
        // style={["text-sm", "italic"]}
        type="paragraph"
      />
    </div>
  );
};

export default UseCaseOfHeadingComp;
