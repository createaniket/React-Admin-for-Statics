import React, { useEffect, useState } from 'react';

import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';

import { fetchAllUsers } from 'API/members';
import { Link } from 'react-router-dom';

import DefaultAvatar from '../../../../assets/images/user/avatar_5_default.png';

const Memberslist = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

    getUsers();
  }, []);

  const actionColumn = [
    {
      accessorKey: 'action',
      header: 'Action',
      width: 200,
      Cell: ({ row }) => {
        return (
          <div className="cellAction">
            <Link to={`/admin-resources/${row.original._id}`} style={{ textDecoration: 'none' }} state={row.original}>
              <div className="viewButton">view</div>
            </Link>

            <Link to={`/admin-resources/edit/${row.original._id}`} style={{ textDecoration: 'none' }} state={row.original}>
              <div className="editButton">Edit</div>
            </Link>
          </div>
        );
      }
    }
  ];

  const columns = [
    {
      accessorKey: '_id',
      header: 'ID',
      size: 70
    },

    {
      accessorKey: 'name', // give a unique key for the first custom column
      header: 'Member',
      size: 100,
      Cell: ({ row }) => (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // border:"1px solid red",
            width: 'fit-content'
          }}
        >
          <img
            src={row.original.avatar ? `http://localhost:9000/${row.original.avatar}` : DefaultAvatar} // Have to add http url
            alt=""
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              marginRight: '20px',
              objectFit: 'cover'
            }}
          />
          {row.original.name}
        </div>
      )
    },

    {
      accessorKey: 'verified', // give a unique key for the first custom column
      header: 'Verified',
      size: 100,
      Cell: ({ row }) => <div>{row.original.verified ? 'Yes' : 'No'}</div>
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
    getRowId: (row) => row._id //give each row a more useful id
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      Memberslist
      <div className="membersdatatable_section">
        <MaterialReactTable table={table} />
      </div>
    </div>
  );
};

export default Memberslist;
