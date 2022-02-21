import { EventEmitter } from '../../stencil-public-runtime';
export declare class DateButton {
  /**
   * data to emit
   */
  data: string;
  /**
   * event to emit
   */
  emitDate: EventEmitter<String>;
  private emitData;
  render(): any;
}
