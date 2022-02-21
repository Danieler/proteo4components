import { Component, h } from '@stencil/core';
import { DateUtil } from 'dateLibrary'

@Component({
  tag: 'init-date',
  shadow: true,
})
export class InitDate {

  public formatedDate: string;
  private getFormatDate() {
    const dateUtil = new DateUtil(new Date());
    this.formatedDate = dateUtil.getFormatDate()
  }

  connectedCallback() {
    this.getFormatDate()
  }

  render() {
    return (
      <date-button data={this.formatedDate}>hola</date-button>
    );
  }
}
