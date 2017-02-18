/// <reference path="interfaces.d.ts" />

import * as $ from 'jquery'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

class HelloWorld extends React.Component<IHelloWorldProps, IHelloWordState>{
    render(){
        return <h1>Hello World</h1>;        
    }
}

export default HelloWorld;