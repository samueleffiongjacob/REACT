import React from "react";
import 'tachyons';
// better way to is by distructionin { name ,email,id}

// roboot api implementation  for work
const Card = ({name,email,id}) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">

            
            {/* https://robohash.org/test?200x200 ==>// use first*/}
            {/* consuming robort api */}

            <img  alt="Roots"  src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p> {email}</p>
            </div>
                
        </div>
        
    )
}
export default Card;