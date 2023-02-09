import  { COLUMNS } from '../input/columns';
import React, { useMemo } from 'react';
import { useTable } from 'react-table';


const Table = ({ countries }) => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo (() => countries, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
        columns,
        data
    })

  
    
    return (
        <table {...getTableProps()} className='table'>
         <thead>
            {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                </tr>
            ))}
         </thead>
         <tbody {...getTableBodyProps()}>
            {rows.map(row => {
                prepareRow(row)
                return(
                    <tr {...row.getRowProps()}>
                        {
                            row.cells.map(cell => {
                                return <td key={cell.id} {...cell.getCellProps}>{cell.render('Cell')}</td>
                            })
                        }
                    </tr>
                )
            })}
         </tbody>
        </table>
    );
};

export default Table;