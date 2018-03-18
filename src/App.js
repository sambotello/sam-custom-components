import React, { Component } from 'react';

import Input from 'components/Input';

class App extends Component {
    state = {
        val: '',
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const { val } = this.state;
        return (
            <div>
                <h1>Sam Custom Components</h1>
                <Input label="Input Test" name="val" value={val} onChange={this.onChange} />
                <Input label="Input Test" name="val" value={val} onChange={this.onChange} inline />
                <Input label="Input Test" name="val" value={val} onChange={this.onChange} inline dark/>
                <Input label="Input Test Big" name="val" value={val} onChange={this.onChange} big dark/>
            </div>
        );
    }
}

export default App;
