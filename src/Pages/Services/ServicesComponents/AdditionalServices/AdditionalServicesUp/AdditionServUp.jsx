import React from 'react';
import additServ1 from './AdditionServUp.module.css';

const AdditionServUp = ({img, name}) => {
  return (
						<div className={additServ1.firstLine_card}>
							<div><img src={img} alt="bot" /></div>
							<div className={additServ1.additionalPar}><p>{name}</p></div>
						</div>
  );
};

export default AdditionServUp;