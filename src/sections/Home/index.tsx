import { Box, Divider, Stack, Typography } from '@mui/material'

import { Iconify } from '@/components'

export const Home = () => {
  return (
    <Box id="kapa" sx={{ position: 'relative' }}>
      <Box id="kapaFIlho">
        <Typography component="h1" variant="h1">
          Especialistas em design e tecnologia
        </Typography>

        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} width="max-content">
          <Typography variant="body2">DESIGN & CODE & BUSINESS</Typography>

          <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
            <Iconify icon="mdi:code-braces" />
            <Iconify icon="mdi:language-javascript" />
            <Iconify icon="mdi:rocket" />
          </Stack>
        </Stack>

        <Typography variant="h2">
          Desenvolvimento de branding, sistemas, plataformas, aplicativos e muito mais
        </Typography>

        <Typography variant="body1">
          Ajudamos empresas a criar produtos digitais incríveis, escaláveis e sustentáveis.
        </Typography>

        <Box
          component="section"
          sx={{
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'absolute',
            px: 2,
            bottom: 5,
            left: 5
          }}
        >
          <Divider variant="fullWidth" color="white" />

          <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} p={2}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} width="max-content">
              <Iconify icon="solar:mouse-minimalistic-linear" />

              <Typography component="p">Continue explorando</Typography>
            </Stack>

            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} width="max-content">
              <Iconify icon="mdi:instagram" />

              <Iconify icon="mdi:linkedin" />

              <Iconify icon="mdi:medium" />
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}
