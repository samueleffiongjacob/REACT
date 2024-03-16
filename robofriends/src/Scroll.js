import React from "react";

const Scroll = (props) => {
    return(
        <div style={{overflow:'scroll', border: '1px solid #0ccac4 ', height: '80vh' }}>
            {props.children}
        </div>
    )
}

export default Scroll