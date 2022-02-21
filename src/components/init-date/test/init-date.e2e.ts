import { newE2EPage } from '@stencil/core/testing';

describe('init-date', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<init-date></init-date>');

    const element = await page.find('init-date');
    expect(element).toHaveClass('hydrated');
  });
});
