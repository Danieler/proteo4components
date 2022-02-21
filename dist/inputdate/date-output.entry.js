import { r as registerInstance, h } from './index-48237352.js';

const dateOutputCss = ":host{display:block}";

let DateOutput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  emitDateHandler(event) {
    this.date = event.detail;
    console.log('Received the custom todoCompleted event: ', event.detail);
  }
  render() {
    return (h("div", null, this.date ? h("p", null, "Hoy es: ", this.date) : h("p", null)));
  }
};
DateOutput.style = dateOutputCss;

export { DateOutput as date_output };
