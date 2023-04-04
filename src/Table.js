import React, { useState } from 'react'
import "./index.css"

let count=0;

function Table() {
    let [num, setNum] = useState("")
    let [data, setData] = useState([])

    const run = (e) => {
        // e.preventDefault()
        setNum(e.target.value)
        if (e.target.value) {
            let newData = data
            newData.push({ sNo: ++count, number: e.target.value })

            setData(newData)
        }

    }

    return (
        <>
            <div id='input'>
                <input type='Number' placeholder='Type number...' name='num' value={num} onChange={(e) => run(e)} />
            </div>
            <hr />
            <div>
                <table>
                    <thead>
                        <th>S.No.</th>
                        <th>Number</th>
                    </thead>

                    <tbody>
                        {data.map(x => {
                            return (
                                <tr>
                                    <td>{x.sNo}</td>
                                    <td>{x.number}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table
