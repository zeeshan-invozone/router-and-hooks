import React from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components';

const Style = styled.div`
  width: 100%;
  table {
    width: 100%;
    border-spacing: 0;
  }

  th,
  td {
    border: 1px solid;
    margin: 0;
    padding: 0.5rem;
  }
`;
const TableContainer = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });
  return (
    <Style>
      <div>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, ind) => (
                  <th {...column.getHeaderProps()} key={ind}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, ind) => {
                    return (
                      <td {...cell.getCellProps()} key={ind}>
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Style>
  );
};
export default TableContainer;
