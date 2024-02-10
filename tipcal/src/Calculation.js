import React, { useState } from 'react'
import bill from './icon-dollar.svg';
import peopleIcon from './icon-person.svg'

const Calculation = ({handleTipClick, billAmount, handleBill, people, handlePeople, numPeople, percentage}) => {

    return (
    <div className='calc'>
          <section className='bill-wrapper'>
            <small>Bill</small>
            <input type='number' value={billAmount} onChange={handleBill} className='bill-input'/><br/>
            <img src={bill} className='bill'/>
          </section>
          <section>
            <small>Select Tip %</small>
            <div className='tipsPercentage'>
              <button className={percentage === 5 ? 'active' : ''}  onClick={() => handleTipClick(5)}>5%</button>
              <button className={percentage === 10 ? 'active' : ''}  onClick={() => handleTipClick(10)}>10%</button>
              <button className={percentage === 15 ? 'active' : ''}  onClick={() => handleTipClick(15)}>15%</button>
              <button className={percentage === 25 ? 'active' : ''}  onClick={() => handleTipClick(25)}>25%</button>
              <button className={percentage === 50 ? 'active' : ''}  onClick={() => handleTipClick(50)}>50%</button>
              <input className='custom' max='95' type='number' placeholder='Custom' onChange={(e) => handleTipClick(e.target.value)}/>
            </div>
          </section>
          <section className='people-wrapper'>
            <div className={numPeople ? 'noZero' : ''}>
              <small className='people'>Number of People</small>
              {numPeople && (<small>Can't be zero</small>)}
            </div>
            <input style={{marginTop: '7px'}} type='number' value={people} onChange={handlePeople}
            className={numPeople ? 'danger' : ''}/>
            <img src={peopleIcon} className='peopleIcon'/>
          </section>
        </div>
  )
}

export default Calculation