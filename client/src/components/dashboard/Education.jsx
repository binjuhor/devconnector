import React, {Fragment} from "react";
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';
import { deleteEducation } from '../../actions/profile';
import { connect } from 'react-redux';

const Education = ({ education, deleteEducation }) => {
    const educations = education.map(edu => (
        <tr key={edu._id}>
            <td>{edu.school}</td>
            <td className={'hide-sm'}>{edu.degree}</td>
            <td className={'hide-sm'}>
                {formatDate(edu.from)} -{' '}
                {null === edu.to ? ('Now'):formatDate(edu.to)}
            </td>
            <td>
                <button className="btn btn-danger" onClick={ () => deleteEducation(edu._id) }>Delete</button>
            </td>
        </tr>
    ));

    return (
        <Fragment>
            <h2 className="my-2">Education Credentials</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>School Name</th>
                    <th className={'hide-sm'}>Degree</th>
                    <th className={'hide-sm'}>Years</th>
                    <th />
                </tr>
                </thead>
                <tbody>{educations}</tbody>
            </table>
        </Fragment>
    )
}

Education.propTypes = {
    education: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired
}

export default connect(null, {deleteEducation})(Education);