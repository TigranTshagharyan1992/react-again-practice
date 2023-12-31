import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <div id='search'>
                <MyInput
                    value = {filter.query}
                    onChange={event => setFilter({...filter,query:event.target.value})}
                    placeholder = "search by value"
                />
            </div>
            <div id='select'>
                <MySelect  onChange={event =>setFilter({...filter,sort:event.target.value})}
                           defaultValue='Order By'
                           options={[
                    {name:'By Title', value:'title'},
                    {name:'By Description', value:'body'},
                ]}/>
            </div>
        </div>
    );
};

export default PostFilter;