import { newSpecPage } from '@stencil/core/testing';
import { InitDate } from '../init-date';

describe('init-date', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InitDate],
      html: `<init-date></init-date>`,
    });
    expect(page.root).toEqualHtml(`
      <init-date>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </init-date>
    `);
  });
});
