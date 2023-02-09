export const COLUMNS = [
    {
        Header: 'Flag',
        accessor: 'flag',
        Cell: tableProps => (
            <img
                src={tableProps.row.original.flag}
                width={60}
                alt='Flag'
            />
        )
    },
    {
        Header: 'Name',
        accessor: 'name',
    },
    {
        Header: 'Region',
        accessor: 'region',
    },
    {
        Header: 'Population',
        accessor: 'population',
    },
    {
        Header: 'Languages',
        accessor: 'id',

    },

]