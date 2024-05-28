import React from 'react'

const LeaderBoardBox = () => {



    const rowsData = [
        {
            rank: 1,
            name: 'Selling with re entr',
            calmarRatio: 3.96,
            overallProfit: 381845,
            avgDailyProfit: 319.54,
            winPercentDay: 0.65,
            price: '-',
        },
        {
            rank: 2,
            name: 'Momentum Strategy',
            calmarRatio: 2.85,
            overallProfit: 298712,
            avgDailyProfit: 249.76,
            winPercentDay: 0.62,
            price: 1499,
        },
        {
            rank: 3,
            name: 'Breakout Strategy',
            calmarRatio: 2.12,
            overallProfit: 245389,
            avgDailyProfit: 204.49,
            winPercentDay: 0.58,
            price: 999,
        },
        {
            rank: 4,
            name: 'Trend Following',
            calmarRatio: 1.97,
            overallProfit: 219765,
            avgDailyProfit: 183.14,
            winPercentDay: 0.55,
            price: 2499,
        },
        {
            rank: 5,
            name: 'Mean Reversion',
            calmarRatio: 1.84,
            overallProfit: 198234,
            avgDailyProfit: 165.20,
            winPercentDay: 0.51,
            price: 1799,
        },
        {
            rank: 6,
            name: 'Volatility Skew',
            calmarRatio: 1.72,
            overallProfit: 182345,
            avgDailyProfit: 151.95,
            winPercentDay: 0.49,
            price: 2999,
        },
        {
            rank: 7,
            name: 'Option Selling',
            calmarRatio: 1.61,
            overallProfit: 168921,
            avgDailyProfit: 140.77,
            winPercentDay: 0.47,
            price: 1299,
        },
        {
            rank: 8,
            name: 'Pairs Trading',
            calmarRatio: 1.53,
            overallProfit: 156789,
            avgDailyProfit: 130.66,
            winPercentDay: 0.45,
            price: 2199,
        },
        {
            rank: 9,
            name: 'Market Making',
            calmarRatio: 1.44,
            overallProfit: 145432,
            avgDailyProfit: 121.19,
            winPercentDay: 0.43,
            price: 1599,
        },
        {
            rank: 10,
            name: 'Arbitrage',
            calmarRatio: 1.37,
            overallProfit: 134567,
            avgDailyProfit: 112.14,
            winPercentDay: 0.41,
            price: 2799,
        },
    ];


    return (
        <div className='h-10 m-10 border-2 border-black h-auto'>
            <div className='flex justify-between'>
                <div className='text-4xl font-extrabold'>Basic Backtest</div>
                <div className="join">
                    <select className="select select-bordered join-item">
                        <option disabled selected>0%</option>
                        <option>0.5%</option>
                        <option>1.0%</option>
                    </select>
                </div>
            </div>



            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Calmar Ratio</th>
                            <th>Overall Profit</th>
                            <th>Avg. Daily Profit</th>
                            <th>Win %(Day)</th>
                            <th>Price (Rs)</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rowsData.map((row, index) => (
                            <tr key={index}>
                                <th>{row.rank}</th>
                                <td>{row.name}</td>
                                <td>{row.calmarRatio}</td>
                                <td>{row.overallProfit}</td>
                                <td>{row.avgDailyProfit}</td>
                                <td>{row.winPercentDay}</td>
                                <td>{row.price}</td>
                                <td>
                                    <a href=''  className="link link-primary">View</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default LeaderBoardBox
