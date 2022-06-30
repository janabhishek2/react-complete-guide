import React from "react";

function AddExpenseButton(props) {
  return (
    <>
      <div style={{borderRadius:"10px", backgroundColor:"pink" , display:"flex" , justifyContent:"center",padding:"20px" , width:"40%", margin:"auto"}}>
        <button
        onClick={props.changeShow}
          style={{borderRadius:"10px", color: "white", textAlign: "center", fontSize: "30px",backgroundColor:"purple" }}
        >
          Add New Expense
        </button>
      </div>
    </>
  );
}

export default AddExpenseButton;
