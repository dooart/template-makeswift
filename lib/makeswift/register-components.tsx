import { Style, TextInput } from "@makeswift/runtime/controls";
import { ReactRuntime } from "@makeswift/runtime/react";
import Logo from "components/logo";

ReactRuntime.registerComponent(Logo, {
  type: "logo",
  label: "Logo",
  props: {
    href: TextInput({ label: "URL" }),
    className: Style({ properties: Style.All }),
  },
});
