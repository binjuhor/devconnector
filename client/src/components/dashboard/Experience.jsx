import React, {Fragment} from "react";
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';
import { deleteExperience } from "../../actions/profile";
import {connect } from 'react-redux';

const Experience = ({ experience, deleteExperience }) => {
    const experiences = experience.map(exp => (
        <tr key={exp._id}>
            <td>{exp.company}</td>
            <td className={'hide-sm'}>{exp.title}</td>
            <td className={'hide-sm'}>
                {formatDate(exp.from)} -{' '}
                {null === exp.to ? (' Now'):formatDate(exp.to)}
            </td>
            <td>
                <button className="btn btn-danger" onClick={()=>deleteExperience(exp._id)}>Delete</button>
            </td>
        </tr>
    ));

    return (
        <Fragment>
            <h2 className="my-2">Experience Credentials</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th className={'hide-sm'}>Title</th>
                        <th className={'hide-sm'}>Years</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{experiences}</tbody>
            </table>
        </Fragment>
    )
}

Experience.propTypes = {
    experience: PropTypes.array.isRequired,
    deleteExperience: PropTypes.func.isRequired
}

export default connect(null, {deleteExperience})(Experience);