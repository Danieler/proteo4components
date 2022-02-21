import { Component, h, State } from '@stencil/core';
import { Listen } from '@stencil/core';

@Component({
  tag: 'date-output',
  styleUrl: 'date-output.css',
  shadow: true,
})
export class DateOutput {

  @State() date: string;

  @Listen('emitDate', { target: 'body' })
  emitDateHandler(event: CustomEvent<string>) {
    this.date = event.detail;
    console.log('Received the custom todoCompleted event: ', event.detail);
  }
  render() {
    return (
      <div>
      { this.date ? <p>Hoy es: {this.date}</p> : <p></p>}
      </div>
    );
  }

}
