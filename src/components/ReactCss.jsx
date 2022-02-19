import { CssModule } from "./CssModule";
import { InlineStyle } from "./InlineStyle";
import { StyledJsx } from "./StyledJsx";
import { StyledComponent } from "./StyledComponent";
import { Emotion } from "./Emotion";

export const ReactCss = () => {
  return (
    <>
      <InlineStyle />
      <CssModule />
      <StyledJsx />
      <StyledComponent />
      <Emotion />
    </>
  );
};
