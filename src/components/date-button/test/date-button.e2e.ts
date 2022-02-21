import { newE2EPage } from '@stencil/core/testing';

describe('date-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<date-button></date-button>');

    const element = await page.find('date-button');
    expect(element).toHaveClass('hydrated');
  });
});
