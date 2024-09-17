import React from 'react'

class Class extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }


    render() {
        return (
            <div className='mt-10 mx-auto text-center'>
                <p className='mb-5 text-xl font-bold'>Count: {this.state.count}</p>
                <button type="button" className="text-white text-2xl bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"  onClick={() => this.setState({ count: this.state.count + 1 })}>   Increment</button>
                
            </div>
        );
    }
}

export default Class