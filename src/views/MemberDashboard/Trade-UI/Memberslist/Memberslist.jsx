import React, { useEffect, useState } from "react";

import {
    MaterialReactTable,
    useMaterialReactTable,
  } from "material-react-table";

  

const Memberslist = () => {



    const actionColumn = [
        {
          accessorKey: "action",
          header: "Action",
          width: 200,
          Cell: ({ row }) => {
            return (
              <div className="cellAction">
                <Link
                  to={`/admin-resources/${row.original._id}`}
                  style={{ textDecoration: "none" }}
                  state={row.original}
                >
                  <div className="viewButton">view</div>
                </Link>
    
                <Link
                  to={`/admin-resources/edit/${row.original._id}`}
                  style={{ textDecoration: "none" }}
                  state={row.original}
                >
                  <div className="editButton">Edit</div>
                </Link>
              </div>
            );
          },
        },
      ];

      const columns = [
        {
          accessorKey: "images", // give a unique key for the first custom column
          header: "Images",
          size: 50,
          Cell: ({ row }) => (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={`https://mysite.com/${row.original.images[0]}`} // Have to add http url
                alt=""
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  // marginRight: '20px',
                  objectFit: "cover",
                }}
              />
            </div>
          ),
        },
    
        {
          accessorKey: "name", // access nested data with dot notation
          header: "Name",
          size: 200,
        },

        {
          accessorKey: "verified", // give a unique key for the first custom column
          header: "Verified",
          size: 100,
          Cell: ({ row }) => <div>{row.original.verified ? "Yes" : "No"}</div>,
        },
      ];
    

      const table = useMaterialReactTable({
        columns: columns.concat(actionColumn),
        data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        enableRowSelection: true,
        enableStickyHeader: true,
        enableSorting: true,
        getRowId: (row) => row._id, //give each row a more useful id
      });
    

  


  return (
    <div>Memberslist</div>
  )
}

export default Memberslist