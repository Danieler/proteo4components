import { Component, h, Prop } from '@stencil/core';
import { Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'date-button',
  styleUrl: 'date-button.css',
  shadow: true,
})
export class DateButton {

  /**
   * data to emit
   */
  @Prop() data: string;
  /**
   * event to emit
   */
  @Event({
    eventName: 'emitDate',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) emitDate: EventEmitter<String>;

  private emitData() {
    this.emitDate.emit(this.data);
  }

  render() {
    return (
      <button onClick={() => this.emitData()}>Emit</button>
    );
  }

}
