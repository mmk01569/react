import React, { Component } from 'react';

export class Instruments extends Component {
    static displayName = Instruments.name;

    constructor(props) {
        super(props);
        this.state = { instrumentDefinitions: [], loading: true };
    }

    componentDidMount()
    {
        this.populateInstrumentData();
    }

    static renderInstrumentsTable(instrumentDefinitions) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {instrumentDefinitions.map(instDef =>
                        <tr key={instDef.name}>
                            <td>{instDef.name}</td>
                            <td>{instDef.location}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Instruments.renderInstrumentsTable(this.state.instrumentDefinitions);

        return (
            <div>
                <h1 id="tabelLabel" >Instrument definitions</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    async populateInstrumentData()
    {
        const response = await fetch('instrumentDefinition');
        const data = await response.json();
        this.setState({ instrumentDefinitions: data, loading: false });
    }
}
