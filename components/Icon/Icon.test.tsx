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
    expect(svgIconPath).toHaveAttribute('d', HomeIcon);
  });
});
