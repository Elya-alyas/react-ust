import React from 'react';
import coop from './Cooperation.module.css'

const Cooperation = ({img, name, text}) => {
  return (
    <div className={coop.card}>
				    <div className={coop.card_img}>
					    <img src={img} alt="office" />
				    </div>
				    <div className={coop.par}>
              <h2>{name}</h2>
              <div>
              <p>{text}</p>
							</div>
						</div>
		</div>
  );
};

export default Cooperation;