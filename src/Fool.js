import React from 'react'

const Fool = () => {
  return (
    <div className="container">
      <form>
        <p style={{marginTop: '40px'}}>
          You have successfully been <span style={{color :"yellow"}}>FOOLED!</span>
        </p>
      </form>
      <div className="drops">
        <div className="drop drop-1"></div>
        <div className="drop drop-2"></div>
        <div className="drop drop-3"></div>
        <div className="drop drop-4"></div>
        <div className="drop drop-5"></div>
      </div>
    </div>
  );
}

export default Fool
