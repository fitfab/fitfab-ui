import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
//import { linkTo } from "@storybook/addon-links";

//import { Button, Welcome } from '@storybook/react/demo';
import { Button } from "../build/index";

// storiesOf("Welcome", module).add("to Storybook", () => (
//   <Welcome showApp={linkTo("Button")} />
// ));

storiesOf("Button", module)
  .add("with text", () => (
    <Button
      bgColor="lightPink"
      fontColor="white"
      onClick={action("clicked")}
      
    >Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button
      bgColor="lightYellow"
      fontColor="white"
      onClick={action("clicked")}
    >😀 😎 👍 💯</Button>
  ));
