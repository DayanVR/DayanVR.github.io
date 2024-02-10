import React from 'react'

const Result = ({tipAmount, totalAmount, handleReset}) => {
  return (
    <div className='result'>
          <section className='amount'>
            <div>
              <p>Tip Amount <br/>
              <small>/ person</small></p>
              <p className='tips'>
                ${tipAmount}
              </p>
            </div>
            <div>
              <p>Total <br/> 
              <small>/ person</small></p>
              <p className='tips'>${totalAmount === 'Infinity' ? '0.00' : totalAmount}</p>
            </div>
          </section>
            <button onClick={handleReset}>RESET</button>
        </div>
  )
}

export default Result