import React, { useEffect, useState } from 'react';

import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';

import { fetchAllUsers, VerifyUser } from 'API/members';
import { Link } from 'react-router-dom';

import DefaultAvatar from '../../../../assets/images/user/avatar_5_default.png';

// import {Usercolumns} from "../../../DataTable/"
import '../../../DataTable/Datatable.scss';

const Memberslist = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      const usersData = await fetchAllUsers();
      setUsers(usersData);
    } catch (error) {
      console.error('Failed to fetch users', error);
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    getUsers();
  }, []);

  const handleVerifyUser = (id) => {
    VerifyUser(id);
    getUsers();
  };

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

  const columns = [
    {
      accessorKey: 'uniqueMemberId',
      header: 'Member Id',
      size: 180
    },
    {
      accessorKey: 'name',
      header: 'Member',
      size: 200,
      Cell: ({ row }) => (
        <div className="cellWithImg">
          <img src={row.original.avatar ? `http://localhost:9000/${row.original.avatar}` : DefaultAvatar} alt="" className="cellImg" />
          {row.original.name}
        </div>
      )
    },
    {
      accessorKey: 'verified',
      header: 'Verified',
      size: 150,
      Cell: ({ row }) => <div className={`cellWithStatus ${row.original.verified}`}>{row.original.verified ? 'Yes' : 'No'}</div>
    },

    {
      accessorKey: 'verified',
      header: 'Trade Contribution',
      size: 300,
      Cell: ({ row }) => <Link className={`cellWithStatus ${row.original.verified}`}>View Trades</Link>
    }
  ];

  const table = useMaterialReactTable({
    columns: columns.concat(actionColumn),
    data: users, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
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
          <div className="dataTableTitle">Members</div>

          <MaterialReactTable table={table} />
        </div>
      </div>
    </div>
  );
};

export default Memberslist;
