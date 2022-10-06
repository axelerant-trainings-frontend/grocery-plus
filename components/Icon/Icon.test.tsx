import { render, screen } from '@testing-library/react';
import Icon from './Icon';
import { HomeIcon, DashIcon, ArrowForwardIcon, BagIcon } from '../iconLibrary';

describe('Test Icon component', () => {
  it('renders the component', () => {
    render(
      <Icon icon={HomeIcon} height="50" width="50" className="text-charcoal" />,
    );
    const svgIcon = screen.getByTestId('svgIcon');
    expect(svgIcon).toBeTruthy();
  });
});

describe('Test Icon component', () => {
  it('adds class same as passed down as props', () => {
    render(
      <Icon icon={HomeIcon} height="50" width="50" className="text-charcoal" />,
    );
    const svgIconWrapper = screen.getByTestId('svgIconWrapper');
    expect(svgIconWrapper).toHaveClass('text-charcoal');
  });
});

describe('Test Icon component', () => {
  it('adds height and width same as passed down as props', () => {
    render(
      <Icon icon={HomeIcon} height="50" width="50" className="text-charcoal" />,
    );
    const svgIcon = screen.getByTestId('svgIcon');
    expect(svgIcon).toHaveAttribute('height', '50');
    expect(svgIcon).toHaveAttribute('width', '50');
  });
});

describe('Test Icon component', () => {
  it('renders the proper icon as passed down as props', () => {
    render(
      <Icon icon={HomeIcon} height="50" width="50" className="text-charcoal" />,
    );
    const svgIconPath = screen.getByTestId('svgIconPath');
    expect(svgIconPath).toHaveAttribute(
      'd',
      'M8.19785 10.655V15.655C8.19785 16.205 7.74785 16.655 7.19785 16.655H3.19785C2.64785 16.655 2.19785 16.205 2.19785 15.655V8.655H0.497852C0.037852 8.655 -0.172148 8.085 0.167852 7.785L8.52785 0.255C8.90785 -0.085 9.48785 -0.085 9.86785 0.255L18.2279 7.785C18.5779 8.085 18.3579 8.655 17.8979 8.655H16.1979V15.655C16.1979 16.205 15.7479 16.655 15.1979 16.655H11.1979C10.6479 16.655 10.1979 16.205 10.1979 15.655V10.655H8.19785ZM14.1979 7.06768C14.1979 6.92594 14.1377 6.79086 14.0323 6.69603L9.53233 2.64603C9.34218 2.4749 9.05352 2.4749 8.86337 2.64603L4.36337 6.69603C4.25801 6.79086 4.19785 6.92594 4.19785 7.06768V14.155C4.19785 14.4311 4.42171 14.655 4.69785 14.655H5.69785C5.97399 14.655 6.19785 14.4311 6.19785 14.155V8.655H12.1979V14.155C12.1979 14.4311 12.4217 14.655 12.6979 14.655H13.6979C13.974 14.655 14.1979 14.4311 14.1979 14.155V7.06768Z',
    );
  });
});
