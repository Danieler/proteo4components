import { newSpecPage } from '@stencil/core/testing';
import { DateButton } from '../date-button';

describe('date-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DateButton],
      html: `<date-button></date-button>`,
    });
    expect(page.root).toEqualHtml(`
      <date-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </date-button>
    `);
  });
});
