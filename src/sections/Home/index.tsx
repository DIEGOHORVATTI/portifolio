import { Box, Divider, Grid, Stack, Typography } from '@mui/material'

import { Iconify } from '@/components'

export const Home = () => {
  return (
    <Box id="kapa">
      <Box sx={{ margin: '8%' }}>
        <Typography variant="h1">Especialistas em design e tecnologia</Typography>

        <Grid
          py="6rem"
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          width="100%"
        >
          <Grid item xs={12} sm={4}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} width="max-content">
              <Typography variant="body2">DESIGN & CODE & BUSINESS</Typography>

              <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                <Iconify icon="mdi:code-braces" />
                <Iconify icon="mdi:language-javascript" />
                <Iconify icon="mdi:rocket" />
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={8}>
            <Stack direction="column" spacing={2}>
              <Typography variant="h4">
                Desenvolvimento de Branding, Dashboard, Automoções, Aplicativos e muito mais
              </Typography>

              <Typography variant="h6">
                Ajudamos empresas a criar produtos digitais incríveis, escaláveis e sustentáveis.
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Box
          component="section"
          sx={{
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
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
