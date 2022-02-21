import { newSpecPage } from '@stencil/core/testing';
import { DateOutput } from '../date-output';

describe('date-output', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DateOutput],
      html: `<date-output></date-output>`,
    });
    expect(page.root).toEqualHtml(`
      <date-output>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </date-output>
    `);
  });
});
