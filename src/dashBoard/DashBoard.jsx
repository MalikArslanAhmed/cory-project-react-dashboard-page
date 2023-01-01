import React from 'react'
import './DasBoard.scss'
import { BiDownload } from 'react-icons/bi';

const DashBoard = () => {
    return (
        <div className='dashboard'>
            <div className='top'>
                <div className='top-first'>
                    <h2>Dashboard</h2>
                    <button><BiDownload />Generate report</button>
                </div>
                <div className='top-second'>
                    <div className='outter-card blue'>
                        <div className='top-second-card'>
                            <div className='img-container'>
                                <img src="https://www.w3schools.com/bootstrap4/img_avatar3.png" alt="Avatar" />
                            </div>
                            <div className='container'>
                                <h3>Angella Williams</h3>
                                <p>Yumma</p>
                            </div>
                            <div className='tag'><p>20<span>sec</span></p></div>
                        </div>
                    </div>
                    <div className='outter-card purple'>
                        <div className='top-second-card'>
                            <div className='img-container'>
                                <img src="https://www.w3schools.com/bootstrap4/img_avatar3.png" alt="Avatar" />
                            </div>
                            <div className='container'>
                                <h3>David Valatine</h3>
                                <p>Showertimer</p>
                            </div>
                            <div className='tag'><p>Next</p></div>
                        </div>
                    </div>
                    <div className='outter-card green'>
                        <div className='top-second-card'>
                            <div className='img-container'>
                                <img src="https://www.w3schools.com/bootstrap4/img_avatar3.png" alt="Avatar" />
                            </div>
                            <div className='container'>
                                <h3>Nisha Henry</h3>
                                <p>Trebee</p>
                            </div>
                            <div className='tag'><p>Next</p></div>
                        </div>
                    </div>
                    <div className='outter-card yellow'>
                        <div className='top-second-card'>
                            <div className='img-container'>
                                <img src="https://www.w3schools.com/bootstrap4/img_avatar3.png" alt="Avatar" />
                            </div>
                            <div className='container'>
                                <h3>OliviaSweetChild79!!</h3>
                                <p>Yumma</p>
                            </div>
                            <div className='tag'><p>Next</p></div>
                        </div>
                    </div>
                    <div className='outter-card blue'>
                        <div className='top-second-card'>
                            <div className='img-container'>
                                <img src="https://www.w3schools.com/bootstrap4/img_avatar3.png" alt="Avatar" />
                            </div>
                            <div className='container'>
                                <h3>John Doe</h3>
                                <p>Architect & Engineer</p>
                            </div>
                            <div className='tag'><p>Next</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='buttom'>
                <div className='video-call'>
                    <div className='header'>
                    <h4>Live Stream</h4>
                    </div>
                </div>
                <div className='light-control'>
                    <div className='header'>
                    <h4>light Control</h4>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default DashBoard