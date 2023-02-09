export const COLUMNS = [
    {
        Header: 'Flag',
        accessor: 'flag',
        Cell: tableProps => (
            <img
                src={tableProps.row.original.flag}
                width={150}
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
        accessor: 'languages',
        Cell: tableProps => {
            return (
                tableProps.row.original.languages.map((language) => <ul><li>{language}</li></ul>)
            )
        }
            

    },

]