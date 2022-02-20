export const StyledJsx = () => {
  return (
    <>
      <div className="divStyle">
        <p className="titleStyle">Styled Jsx TEST!</p>
        <button className="buttonStyle">Test!</button>
      </div>
      <style jsx="true">{`
        .divStyle {
          border: solid 2px;
          border-radius: 10px;
          margin: 10px;
          padding: 10px;
          display: flex;
          justify-content: space-around;
          width: 300px;
        }

        .titleStyle {
          color: red;
        }

        .buttonStyle {
          border-radius: 8px;
          background-color: lightblue;
        }
      `}</style>
    </>
  );
};
