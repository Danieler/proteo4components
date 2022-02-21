import { newE2EPage } from '@stencil/core/testing';

describe('date-output', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<date-output></date-output>');

    const element = await page.find('date-output');
    expect(element).toHaveClass('hydrated');
  });
});
