export const InlineStyle = () => {
  const divStyle = {
    border: "solid 2px",
    borderRadius: "10px",
    margin: "10px",
    padding: "10px",
    display: "flex",
    justifyContent: "space-around",
    width: "300px"
  };

  const titleStyle = {
    color: "red"
  };

  const buttonStyle = {
    borderRadius: "8px",
    backgroundColor: "lightblue"
  };
  return (
    <>
      <div style={divStyle}>
        <p style={titleStyle}>InlineStyle TEST!</p>
        <button style={buttonStyle}>Test!</button>
      </div>
    </>
  );
};
