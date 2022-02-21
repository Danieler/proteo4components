import type { Components, JSX } from "../types/components";

interface DateOutput extends Components.DateOutput, HTMLElement {}
export const DateOutput: {
  prototype: DateOutput;
  new (): DateOutput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
