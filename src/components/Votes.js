import React from "react";

export default function Votes({ item, handleVotes, checkCount, disable}) {
  return (
    <div className="dishitem">
      <div className="imagecontainer">
      <img src={item.image}/>
      </div>
      <div className="dishinput">
      <input
        type="checkbox"
        checked={item.votes}
        onChange={() => handleVotes(`${item.id}`)}
        onClick={()=>checkCount(`${item.id}`)}
        disabled={disable}
      />
      <label>{item.dishName}</label>
      </div>
    </div>
  );
}
