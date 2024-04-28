import { BarChart } from '@/components/graficos/BarChart';
import { useUsuarios } from '@/hooks/Usuarios';
import { transformDataPostUser } from '@/utils/graficos/trasformDataPostUser';
import { useEffect, useState } from 'react';
import { Dialog, DialogContent } from '@mui/material';
import { useModals } from '@/hooks/modals';

export const GraficoBarrasUsersPosts = () => {
  const { setShowUserPostGrafig, showUserPostGrafig } = useModals()
  const { usuarios, posts } = useUsuarios()
  const [data, setData] = useState([])

  const handleClose = () => {
    setShowUserPostGrafig(false);
  };

  useEffect(() => {
    if (usuarios.length && posts.length) {
      const data = transformDataPostUser(posts, usuarios)
      setData(data)
    }
  }, [usuarios, posts])

  return (
    <>
      <Dialog
        maxWidth="lg"
        fullWidth
        open={showUserPostGrafig}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        PaperProps={{
          style: {
            position: 'absolute',
          },
        }}
      >
        <DialogContent>
          {data.length && <BarChart data={data} />}
        </DialogContent>
      </Dialog>
    </>
  );
};