import React from 'react';
import ser from './Service.module.css'

const Service = ({foto, text}) => {
  return (
    <div className={ser.services_box}>
			<img src={foto} alt="" />
			<h3>{text}</h3>
		</div>
  );
};

export default Service;