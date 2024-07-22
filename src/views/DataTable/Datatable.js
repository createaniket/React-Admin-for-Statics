



  export const SingleUserTradeColumns = [
    {
      accessorKey: 'invoiceNumber',
      header: 'Invoice Number',
      size: 220
    },
    {
      accessorKey: 'company',
      header: 'Company',
      size: 220
    },
    {
      accessorKey: 'exportAmount',
      header: 'Export Amount',
      size: 220
    },
    {
      accessorKey: 'consignee',
      header: 'Consignee',
      size: 220
    },
    {
      accessorKey: 'methodOfDispatch',
      header: 'Method Of Dispatch',
      size: 220
    },
    {
      accessorKey: 'typeOfShipment',
      header: 'Type Of Shipment',
      size: 220
    },
    {
      accessorKey: 'countryOfOrigin',
      header: 'Country Of Origin',
      size: 240
    },
    {
      accessorKey: 'countryOfFinalDestination',
      header: 'Country Of Destination',
      size: 240
    },
    {
      accessorKey: 'terms',
      header: 'Terms',
      size: 200
    },
    {
      accessorKey: 'description',
      header: 'Description',
      size: 900
    },

    {
      accessorKey: 'approved', // give a unique key for the first custom column
      header: 'Approved',
      size: 100,
      // Cell: ({ row }) => <div>{row.original.approved ? 'Yes' : 'No'}</div>
    }
  ];