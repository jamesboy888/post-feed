import React,{useState} from 'react'
import PropTypes from 'prop-types';

export default function Input({ addPost }) {
    
    const [input, setInput] = useState('');

    const onChange =(e)=>{
        setInput(e.target.value);
    }

    const onKeyDown =(e)=>{
        const tittle = e.target.value;

        if(e.key === 'Enter' && tittle){
            addPost(tittle);
            setInput('');
        }
    }

    return (
        <div className="Input"> 
            <div className="Input_header">Create Post</div>
            <input 
                className="Input_field"
                type="text"
                value={input}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
        </div>
    )
}

Input.propTypes={
    addPost: PropTypes.func.isRequired
};
