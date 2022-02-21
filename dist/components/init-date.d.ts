import type { Components, JSX } from "../types/components";

interface InitDate extends Components.InitDate, HTMLElement {}
export const InitDate: {
  prototype: InitDate;
  new (): InitDate;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
