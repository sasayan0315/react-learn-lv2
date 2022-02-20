import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "pink"
};
export const ChildComponent = memo((props) => {
  return (
    <>
      {props.isVisible && (
        <>
          <div style={style}>
            <p>子コンポーネント</p>
            <button onClick={props.onClickClose}>close</button>
          </div>
        </>
      )}
    </>
  );
});
