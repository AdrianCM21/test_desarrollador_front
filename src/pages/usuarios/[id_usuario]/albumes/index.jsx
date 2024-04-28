

import { ToolbarReturn } from "@/components/layouts/tablas/ToolbarReturn";
import { useUsuarios } from "@/hooks/Usuarios"
import { COLUMN_PROPS, createColumn } from "@/utils/TableCreate";
import { RemoveRedEye } from "@mui/icons-material";
import { Box } from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid"
import { useRouter } from "next/router";
import { useEffect } from "react";

const Albumes = () => {
  const { loading, getAlbums, albumes } = useUsuarios()
  const router = useRouter();
  const { id_usuario } = router.query;

  useEffect(() => {
    if (id_usuario) {
      getAlbums(id_usuario)
    }
  }, [id_usuario])


  const handleAlbumSubmit = async (id) => {
    router.push(`/usuarios/${id_usuario}/albumes/${id}`);
  }

  const columns = [
    createColumn('id', 'ID'),
    createColumn('title', 'Titulo del Album'),

    {
      ...COLUMN_PROPS,
      field: 'actions',
      headerName: 'Ver Albumes',
      type: 'actions',
      getActions: (params) => [
        <GridActionsCellItem
          key={`descarga-${params.row.id}`}
          icon={<RemoveRedEye color='success' />}
          label="Ver"
          onClick={() => {
            handleAlbumSubmit(params.row.id)
          }}
        />,
      ],
    },
  ];

  return (
    <Box style={{ height: 700, width: '100%' }}>
      <DataGrid
        columns={columns}
        rows={albumes || []}

        slots={{ toolbar: () => <ToolbarReturn /> }}
        disableColumnMenu={true}
        loading={loading}
        hideFooter={true}

      />
    </Box>
  )
}
export default Albumes