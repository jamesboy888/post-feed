import React from 'react'
import PropTypes from 'prop-types';

export default function Post({ id, tittle, deletePost }) {
    return (
        <div className="Post">
            <button className="Post__delete" onClick={()=> deletePost(id)}>X</button>
            <div className="Post__tittle">{tittle}</div>
            <img className="Post__img" src={`https://source.unsplash.com/random?sig=${id}`} />
        </div>
    )
}

Post.propTypes = {
    id: PropTypes.number.isRequired,
    tittle: PropTypes.string.isRequired,
    deletePost: PropTypes.func.isRequired
}
