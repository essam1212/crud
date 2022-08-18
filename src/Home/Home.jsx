import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <div>
                <div className='w-25 m-auto text-center'>
                    <h1 className='fw-bold'>Home Page</h1>
                </div>
                <div className='bg-img w-50 text-center m-auto '>
                    <h1>wellcom to my system</h1>
                </div>
            </div>
            <div className=' d-flex justify-content-center'>
                <button type="button" class="btn btn-primary me-3 fs-1 rounded-5 "><Link className='nav-link active' to={"Pruches"}>Pruches </Link></button>
                
            </div>



        </>
    )
}
