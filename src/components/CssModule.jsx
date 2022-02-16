import classes from "./CssModule.module.scss";

export const CssModule = () => {
  return (
    <>
      <div className={classes.divStyle}>
        <p className={classes.titleStyle}>CSS Modules TEST!</p>
        <button className={classes.buttonStyle}>Test!</button>
      </div>
    </>
  );
};
