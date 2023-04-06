import React from 'react';
import numb from './Numbers.module.css'

const Numbers = ({num, name1, text, name2, img1, img2, img3, img4, name3, a, img5}) => {
  return (
    <div className={numb.analyze}>
					<div className={numb.num}>
						{num}
					</div>
					<div className={numb.text}>
						<h1>{name1}</h1>
            <p>{text}</p>
						<h2>{name2}</h2>
						<img src={img1} alt="" />
						<img src={img2} alt="" />
						<img src={img3} alt="" />
						<img src={img4} alt="" />
						<div className={numb.box}>
							<h3>{name3}</h3>
							<div className={numb.box_img}>
            <div><a href="#">{a}</a></div>
								<div><img src={img5} alt="arrow" /></div>
							</div>
						</div>
					</div>
				</div> 
  );
};

export default Numbers;
