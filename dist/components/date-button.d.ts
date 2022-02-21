import type { Components, JSX } from "../types/components";

interface DateButton extends Components.DateButton, HTMLElement {}
export const DateButton: {
  prototype: DateButton;
  new (): DateButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
