import React, { useEffect, useState } from 'react'
import {fetchSingleUserAllTrades} from 'API/Trade'
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';

import {SingleUserTradeColumns} from '../../../DataTable/Datatable'
import { Link } from 'react-router-dom';
import './Tradelist.scss'


const Tradelist = () => {

    const [trades, setTrades] = useState([]);
    const [loading, setLoading] = useState(true);

    const ID= '6697a87ef15b657384d95559'


    const getSingleUsersAllTrades = async (ID) => {
        try {
          const SigleUserTradeData = await fetchSingleUserAllTrades(ID);
          setTrades(SigleUserTradeData);
        } catch (error) {
          console.error('Failed to fetch single users trades', error);
        } finally {
          setLoading(false);
        }
      };

      useEffect(() => {
        getSingleUsersAllTrades(ID);
      }, []);

      const actionColumn = [
        {
          accessorKey: 'action',
          header: 'Action',
          width: 250,
          Cell: ({ row }) => {
            return (
              <div className="cellAction">
                <Link to={`/admin-resources/${row.original._id}`} style={{ textDecoration: 'none' }} state={row.original}>
                  <div className="viewButton">view</div>
                </Link>
    
                <Link to={`/admin-resources/edit/${row.original._id}`} style={{ textDecoration: 'none' }} state={row.original}>
                  <div className="editButton">Edit</div>
                </Link>
    
                {row.original.verified ? (
                  <></>
                ) : (
                  <div className="deleteButton" onClick={() => handleVerifyUser(row.original._id)}>
                    Verify
                  </div>
                )}
              </div>
            );
          }
        }
      ];


      const table = useMaterialReactTable({
        // columns: SingleUserTradeColumns.concat(actionColumn),
        columns: SingleUserTradeColumns,

        data: trades, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        enableRowSelection: true,
        enableStickyHeader: true,
        enableSorting: true,
        muiTableContainerProps: { sx: { maxHeight: '600px' } },
        muiTableBodyRowProps: { sx: { height: '50px' } },
        enableColumnResizing: true,
    
        getRowId: (row) => row._id //give each row a more useful id
      });
      

      if (loading) {
        return <div>Loading...</div>;
      }
    

    return (
      <div>
      <div className="datatabelmain">
        <div className="membersdatatable_section">
          <div className="dataTableTitle">Trades</div>

          <MaterialReactTable table={table} />
        </div>
      </div>
    </div>
  )
}

export default Tradelist