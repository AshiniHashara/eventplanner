import React from 'react';
import './SubHeading.css';
import { images } from '../../constants';
const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className='p__cormorant'>{title}</p>
  </div>
);

export default SubHeading;
