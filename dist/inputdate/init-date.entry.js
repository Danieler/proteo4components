import { r as registerInstance, h } from './index-48237352.js';

class DateUtil {
    constructor(date) {
        this.date = date;
    }
    padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }
    getFormatDate() {
        return [
            this.padTo2Digits(this.date.getDate()),
            //get month returns from 0 to 11
            this.padTo2Digits(this.date.getMonth() + 1),
            this.date.getFullYear(),
        ].join('/');
    }
}

let InitDate = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  getFormatDate() {
    const dateUtil = new DateUtil(new Date());
    this.formatedDate = dateUtil.getFormatDate();
  }
  connectedCallback() {
    this.getFormatDate();
  }
  render() {
    return (h("date-button", { data: this.formatedDate }, "hola"));
  }
};

export { InitDate as init_date };
