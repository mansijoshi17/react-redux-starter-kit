import React from 'react';
import {Link} from 'react-router-dom';



function Button() {

    return (
        <Link to="/newarrival"type="submit" className="positive ui button">
            NEW ARRIVALS
    </Link>
)
}

export default Button;