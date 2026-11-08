import React, {Fragment} from "react";
import PropTypes from "prop-types";
import formatDate from '../../utils/formatDate';

const ProfileExperience = ({ experience: {
    company, title, location, current, to, from, description
} }) => {
    return (
        <Fragment>
            <div>
                <h3 className="text-dark">{company}</h3>
                <p><strong>Location: </strong>{location}</p>
                <p>{formatDate(from)} - { current ? ' Current': formatDate(to)}</p>
                <p><strong>Position: </strong>{title}</p>
                <p><strong>Description: </strong>{description}</p>
            </div>
        </Fragment>
    )
};

ProfileExperience.propTypes = {
    experience: PropTypes.object.isRequired
};

export default ProfileExperience;