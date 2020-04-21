import React, { useState } from "react";
import { useTable, useFilters } from "react-table";
import styled from "styled-components";

export default function Table({ data, columns }) {
  const [filterInput, setFilterInput] = useState("");
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters
  );
  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    setFilter("customer_name", value);
    setFilterInput(value);
  };
  // Render the UI for your table
  return (
    <TableSect>
      <input
        value={filterInput}
        onChange={handleFilterChange}
        placeholder="Search name"
      />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <Cell {...cell.getCellProps()}>{cell.render("Cell")}</Cell>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </TableSect>
  );
}

const Cell = styled.td`
  font-size: 0.65rem;
`;

const TableSect = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  margin-left: 13rem;
  table {
    border-spacing: 0;
    border: 1px solid #f6f6f6;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
      :nth-child(odd) {
        td {
          background-color: #fafafa;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid #f6f6f6;
      border-right: 1px solid #f6f6f6;

      :last-child {
        border-right: 0;
      }
    }
  }
`;
