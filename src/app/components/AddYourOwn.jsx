import React from 'react';
import AddYourNewIcon from '../assets/AddYourNew.svg';
import Image from 'next/image';

function AddYourOwn() {
  return (
    <div className="row vw-100 d-flex justify-content-center align-items-center" style={{backgroundColor:"#F7FDFF"}}>
        <div className="card col-9 m-5 p-5" >
            <div className="card-body">
            <h5 className="card-title mb-4">
            <Image 
                src={AddYourNewIcon} 
                alt="Description for AddYourNewIcon" 
                className='me-3'
                layout="intrinsic"
            />
              Add Your Own</h5>
            <p className="card-text">Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>
            <a href="#" className="btn custom-outline-purple">Add New</a>
            </div>
        </div>
    </div>
  );
}

export default AddYourOwn;
