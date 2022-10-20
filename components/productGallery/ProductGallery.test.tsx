import { render, screen, cleanup } from '@testing-library/react';
import ProductGallery from './ProductGallery';

const productImages = [
  'https://dummyimage.com/1000x400/070be6/fff.png',
  'https://dummyimage.com/900x900/bd09e6/fff.png',
  'https://dummyimage.com/600x600/070be6/fff.png',
];

describe('ProductGallery', () => {
  afterEach(cleanup);
  it('handles empty gallery', () => {
    expect(
      render(<ProductGallery productImages={[]} />).container,
    ).toBeEmptyDOMElement();
  });
  it('Renders correct number of images in slider', () => {
    render(<ProductGallery productImages={productImages} />);
    const imgThumbnailElements = screen.findAllByAltText(
      'product gallery thumbnail',
    );
    expect(imgThumbnailElements).toHaveLength(3);
    const imgElements = screen.findAllByAltText('product gallery image');
    expect(imgElements).toHaceLength(3);
  });
});
