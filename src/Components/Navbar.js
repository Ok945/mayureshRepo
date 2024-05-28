import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-center w-full'>
            <ul className="menu lg:menu-horizontal text-2xl font-semibold">
                <li className='mx-2'><a href='/link2'>LeaderBoard</a></li>
                <li>
                    <details open>
                        <summary>Historical Trading </summary>
                        <ul>
                            <li><a href='/link3' >Trading </a></li>
                            <li><a href='/link4'>Order</a></li>
                            <li><a href='/link4'>Holding</a></li>
                            <li><a href='/link4'>Position</a></li>
                        </ul>
                    </details>
                </li>
                <li className='mx-2'><a href='/linkt'>Item 3</a></li>
                <li className='mx-2'><a href='/linkt'>Item 4</a></li>
                <li className='mx-2'><a href='/linkt'>Item 5</a></li>
                <li className='mx-2'><a href='/linkt'>Item 6</a></li>
                <li className='mx-2'><a href='/linkt'>Item 7</a></li>
                <li className='mx-2'><a href='/linkt'>Item 8</a></li>
                <li className='mx-2'><a href='/linkt'>Item 9</a></li>
                <li className='mx-2'><a href='/linkt'>Item 31</a></li>
            </ul>
        </div>
    )
}

export default Navbar
