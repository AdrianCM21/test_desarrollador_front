import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Typography, CircularProgress, Box, Container } from '@mui/material';
import { useUsuarios } from '@/hooks/Usuarios';
import { ToolbarReturn } from '@/components/layouts/tablas/ToolbarReturn';
import Image from 'next/image';

const AlbumPage = () => {
  const { getFotos, fotos, loading, albumes, getAlbums } = useUsuarios()
  const router = useRouter();
  const { id_album, id_usuario } = router.query;

  useEffect(() => {
    if (!albumes.length && id_usuario) {
      getAlbums(id_usuario)
    }
    if (id_album) {

      getFotos(id_album)
    }
  }, [id_album, id_usuario, albumes])

  return (
    <Container>
      <ToolbarReturn />
      <Box display={'flex'} justifyContent={'center'}>
        <Typography variant="h4" component="h1" gutterBottom>
          {loading ? 'Cargando...' : (
            albumes.find((album) => album.id === parseInt(id_album))?.title
          )}
        </Typography>
      </Box>

      {loading ? (
        <CircularProgress />
      ) : (
        <Box sx={{ width: '80%', height: '400px', margin: '0 auto' }}>
          <Carousel showThumbs={fotos.length} >
            {fotos.map((foto) => (
              <div key={foto.id}>
                <Image src={foto.url} alt={foto.title} width={250} height={500} />

              </div>
            ))}
          </Carousel>
        </Box>
      )}
    </Container>
  );
};

export default AlbumPage;