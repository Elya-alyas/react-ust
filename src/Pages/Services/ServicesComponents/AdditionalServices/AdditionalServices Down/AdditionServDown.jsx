import React from 'react';
import additServ2 from './AdditionServDown.module.css';

const AdditionServDown = ({img, name}) => {
  return (
						<div className={additServ2.secondLine_card}>
							<div><img src={img} alt="bot" /></div>
							<div className={additServ2.additionalPar}><p>{name}</p></div>
						</div>
  );
};

export default AdditionServDown;