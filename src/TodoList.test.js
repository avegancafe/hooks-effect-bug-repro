import React from 'react'
import enzyme, { shallow, mount } from 'enzyme'
import adapter from 'enzyme-adapter-react-16'
import { TodoList } from './TodoList'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import { act } from 'react-dom/test-utils'

let axiosMockInstance

enzyme.configure({ adapter: new adapter() })

describe('<TodoList />', () => {
  let wrapper

  beforeEach(() => {
    console.log('mounting component')
    
    axiosMockInstance = new MockAdapter(axios)
    axiosMockInstance
      .onGet('https://jsonplaceholder.typicode.com/todos')
      .reply(200, [{ id: 1, title: 'a thing' }])
    
  })

  afterEach(() => {
    axiosMockInstance.restore()
  })

  it('calls its effect', async () => {
    await act(async () => {
      wrapper = mount(<TodoList />)
    })
    
    // this next line is enzyme specific, you wouldn't need 
    // this if you used plain react-dom
    wrapper.update() 
    
    console.log('in example:')
    console.log(wrapper.debug())
    const todos = wrapper.find('.todo').at(0)
    console.log('this is a test')
    expect(todos.text()).toBe('a thing')
  })
})
