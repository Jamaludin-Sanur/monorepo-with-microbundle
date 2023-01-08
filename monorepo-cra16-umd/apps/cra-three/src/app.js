import React from 'react'
import {App as AppOne} from '@cra/one'
import {App as AppTwo} from '@cra/two'
class App extends React.Component {

    render(){

        return (
            <section>
                <AppOne></AppOne>
                <br />
                <AppTwo></AppTwo>
                <br/>
                three xxx
            </section>
        )
    }

}

export default App

