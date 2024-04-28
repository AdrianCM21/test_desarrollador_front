import { ToolbarDataGrid } from "@/components/layouts/tablas/ToolbarDataGrid";
import { useUsuarios } from "@/hooks/Usuarios"
import { COLUMN_PROPS, createColumn } from "@/utils/TableCreate";
import { RemoveRedEye } from "@mui/icons-material";
import { Box } from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid"
import { useRouter } from "next/router";

const UsuariosPage = () => {
    const { usuarios, loading, } = useUsuarios()
    const router = useRouter();
    const handleAlbunesSubmit = async (id_usuario) => {

        router.push(`/usuarios/${id_usuario}/albumes`);
    }
    const columns = [
        createColumn('id', 'ID'),
        createColumn('name', 'Nombre'),
        createColumn('username', 'Nombre de Usuario'),
        createColumn('email', 'Correo'),
        createColumn('phone', 'Telefono'),
        createColumn('website', 'Sitio Web'),
        {
            ...COLUMN_PROPS,
            field: 'actions',
            headerName: 'Ver albunes',
            type: 'actions',
            getActions: (params) => [
                <GridActionsCellItem
                    key={`descarga-${params.row.id}`}
                    icon={<RemoveRedEye color='success' />}
                    label="Ver"
                    onClick={() => {
                        handleAlbunesSubmit(params.row.id)
                    }}
                />,
            ],
        },
    ];

    return (
        <Box style={{ height: 700, width: '100%' }}>
            <DataGrid
                columns={columns}
                rows={usuarios}

                slots={{ toolbar: () => <ToolbarDataGrid datos={usuarios} /> }}
                disableColumnMenu={true}
                loading={loading}
                hideFooter={true}

            />
        </Box>
    )
}
export default UsuariosPage