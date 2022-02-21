import { r as registerInstance, e as createEvent, h } from './index-48237352.js';

const dateButtonCss = ":host{display:block}button{width:60px;height:28px;background-color:#016DFF;color:white;border:0;font-size:12px;border-radius:2px;-webkit-box-shadow:0px 10px 13px -7px rgba(0, 0, 0, 0.50), 5px 5px 15px 1px rgba(0,0,0,0);box-shadow:0px 10px 13px -7px rgba(0, 0, 0, 0.50), 5px 5px 15px 1px rgba(0,0,0,0);cursor:pointer}";

let DateButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.emitDate = createEvent(this, "emitDate", 7);
  }
  emitData() {
    this.emitDate.emit(this.data);
  }
  render() {
    return (h("button", { onClick: () => this.emitData() }, "Emit"));
  }
};
DateButton.style = dateButtonCss;

export { DateButton as date_button };
