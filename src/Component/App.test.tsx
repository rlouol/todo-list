import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

/**
 * Jest에서는 test 함수와 it 함수는 동일한 기능을 하는 함수이다.
 * 차이는 테스트를 읽기 쉽게 하기 위해서 첫번째 아규먼트와 문장 연결하는 주어(test, it)가 다른 것이다.
 * test('renders learn react link', ~ ) -> test renders learn react link
 * it('should have a button.', ~ ) -> it shoud have a button.
 */
describe('<App />', () => {
  it('renders component correctily', () => {
    const { container } = render(<App />);

    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();

    const appLogo = screen.getByAltText('logo');
    expect(appLogo).toBeInTheDocument();
    expect(appLogo).toHaveAttribute('src', 'logo.svg');

    expect(container.getElementsByTagName('p')).toHaveLength(1);
    expect(container.getElementsByTagName('p')[0])
      .toHaveTextContent(
        'Edit src/App.tsx and save to reload.'
      );

    expect(container).toMatchSnapshot();
  });
});