import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import 'jest-styled-components'

/**
 * Jest에서는 test 함수와 it 함수는 동일한 기능을 하는 함수이다.
 * 차이는 테스트를 읽기 쉽게 하기 위해서 첫번째 아규먼트와 문장 연결하는 주어(test, it)가 다른 것이다.
 * test('renders learn react link', ~ ) -> test renders learn react link
 * it('should have a button.', ~ ) -> it shoud have a button.
 */
describe('<App />', () => {
  it('renders component correctily', () => {
    const { container } = render(<App />)

    const toDoList = screen.getByTestId('toDoList')
    expect(toDoList).toBeInTheDocument()
    expect(toDoList.firstChild).toBeNull()

    const input = screen.getByPlaceholderText('할 일을 입력해 주세요')
    expect(input).toBeInTheDocument()
    const label = screen.getByText('추가')
    expect(label).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })

  it('adds and deletes ToDo items', () => {
    render(<App />)

    const input = screen.getByPlaceholderText('할 일을 입력해 주세요')
    const button = screen.getByText('추가')
    fireEvent.change(input, { target: { value: 'study react 1' } })
    fireEvent.click(button)

    const todoItem = screen.getByText('study react 1')
    expect(todoItem).toBeInTheDocument()
    const deleteButton = screen.getByText('삭제')
    expect(deleteButton).toBeInTheDocument()

    const toDoList = screen.getByTestId('toDoList')
    expect(toDoList.childElementCount).toBe(1)

    fireEvent.change(input, { target: { value: 'study react 2' } })
    fireEvent.click(button)

    const todoItem2 = screen.getByText('study react 2')
    expect(todoItem2).toBeInTheDocument()
    expect(toDoList.childElementCount).toBe(2)

    const deleteButtons = screen.getAllByText('삭제')
    fireEvent.click(deleteButtons[0])
    expect(todoItem).not.toBeInTheDocument()
    expect(toDoList.childElementCount).toBe(1)
  })

  it('does not add empty ToDo', () => {
    render(<App />)
    
    const toDoList = screen.getByTestId('toDoList')
    const length = toDoList.childElementCount

    const button = screen.getByText('추가')
    fireEvent.click(button)

    expect(toDoList.childElementCount).toBe(length)
  })
  
})