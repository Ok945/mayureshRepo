import React from 'react'
import LeaderBoardBox from './LeaderBoardBox'

const LeaderBoard = () => {
    return (
        <div className='w-full flex justify-center flex-col'>
            <div className='text-8xl font-semibold'>LeaderBoards</div>
            <LeaderBoardBox/>
        </div>
    )
}

export default LeaderBoard
