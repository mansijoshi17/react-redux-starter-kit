import React from 'react';

class Suggestions extends React.Component {

    render(props) {
        const options = this.props.result.map(r => (
            <li style={{ listStyleType: 'none', fontFamily: 'sans-serif' }}>
                {r.name}
            </li>
        ))
        return (
            <div className="demo">
                <ul style={{ listStyleType: 'none' }}>
                    {options}
                </ul>
            </div>
        )
    }
}

export default Suggestions;