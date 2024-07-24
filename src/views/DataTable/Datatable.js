export const SingleUserTradeColumns = [
  {
    accessorKey: 'invoiceNumber',
    header: 'Invoice Number',
    size: 160
  },
  {
    accessorKey: 'company',
    header: 'Company',
    size: 160
  },
  {
    accessorKey: 'exportAmount',
    header: 'Export Amount',
    size: 160
  },
  {
    accessorKey: 'consignee',
    header: 'Consignee',
    size: 160
  },
  {
    accessorKey: 'methodOfDispatch',
    header: 'Method Of Dispatch',
    size: 160
  },
  {
    accessorKey: 'typeOfShipment',
    header: 'Type Of Shipment',
    headerStyle: { whiteSpace: 'normal', wordBreak: 'break-word', textAlign: 'center' },
    size: 160
  },
  {
    accessorKey: 'countryOfOrigin',
    header: 'Country Of Origin',
    size: 160
  },
  {
    accessorKey: 'countryOfFinalDestination',
    header: 'Country Of Destination',
    size: 160
  },
  {
    accessorKey: 'terms',
    header: 'Terms',
    size: 160
  },
  {
    accessorKey: 'description',
    header: 'Description',
    size: 160
  },

  {
    accessorKey: 'approved', // give a unique key for the first custom column
    header: 'Approved',
    size: 160
    // Cell: ({ row }) => <div>{row.original.approved ? 'Yes' : 'No'}</div>
  }
];

