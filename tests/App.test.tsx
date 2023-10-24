import React from 'react'
import {render,screen} from '@testing-library/react'
import App from '../src/App'

describe('<App />', () => { 
    test('should wordk', ()=> {
        render(<App/>)
    })
 })