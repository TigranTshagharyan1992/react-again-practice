import React from 'react';
import MyButton from "../UI/button/MyButton";

const Pagination = ({pagesCountArray,setPage,page}) => {
    return (
        <div>
            {pagesCountArray.map( (page, id) => {
                    const time = (new Date().getTime());
                    return <MyButton onClick={()=>setPage(page)} key={time+id}>{page}</MyButton>
                }
            )}
        </div>
    );
};

export default Pagination;