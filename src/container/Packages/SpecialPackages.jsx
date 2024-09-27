import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialPackages.css';

const SpecialPackages = () => (
    <div className='app__specialPackages flex__center section__padding' id='packages'>
        <div className='app__specialPackages-title'>
            <SubHeading title="Floral Designs that Match Your Vision"/>
            <h1 className='headtext__cormorant'>This Week's Featured Arrangement</h1>
        </div>

        <div className='app__specialPackages-menu'>
            <div className='app__specialPackages-menu_floral'>
                <p className='app__specialPackages_menu_heading'>Floral Packages</p>
                    <div className='app__specialPackages_menu_item'>
                        {data.floralArrangements.map((floralArrangements, index) => (
                            <MenuItem key={floralArrangements.title + index} title={floralArrangements.title} price={floralArrangements.price} tags={floralArrangements.tags}/>
                        ))}
                    </div>
            </div>
            <div className='app__specialPackages-menu_img'>
                <img src={images.boke} alt='boke'/>
            </div>

            <div className='app__specialPackages-menu_deco'>
                <p className='app__specialPackages_menu_heading'>Deco Packages</p>
                    <div className='app__specialPackages_menu_item'>
                        {data.decorPackages.map((decorPackages, index) => (
                            <MenuItem key={decorPackages.title + index} title={decorPackages.title} price={decorPackages.price} tags={decorPackages.tags}/>
                        ))}
                    </div>
            </div>
        </div>

        <div style={{marginTop: '15px'}}>
            <button type='button' className='custom__button'>View More</button>
        </div>
    </div>
);


export default SpecialPackages;