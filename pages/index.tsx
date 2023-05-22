import { CheckComponent } from "@/components/CheckComponent";
import CheckIcon from "@mui/icons-material/Check";
import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import { SliderKeen } from '../components/SliderKeen/index';

export default function Home() {
  return (
    <>

      <Box sx={{ height: '50vh', backgroundColor: 'white', mb: 5 }} display='flex' flexDirection='column' justifyContent='space-around' data-aos="fade-down">
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant='h4' sx={{ mt: 6 }}>Juan Ignacio <br /> Ochipinti</Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant='subtitle1' sx={{ mt: 2 }}>20/10/2000</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant='subtitle1' sx={{ mt: 2 }}>Argentino</Typography>
          </Box>
          <Box display='flex' justifyContent='center'>
            <Box sx={{ textAlign: 'center', width: '80%' }}>
              <Typography variant='subtitle1' sx={{ mt: 2 }}>Diestro natural con un excelente control de zurda</Typography>
            </Box>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Typography variant='subtitle1' sx={{ mt: 2 }}>Lateral derecho</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: '100%', }} display='flex' justifyContent='center' data-aos="fade-right">
        <div className={'video-player-container'}>
          <video className={'video-player'} controls>
            <source src='/movie.mp4' type="video/mp4" />
            Tu navegador no admite la reproducción de videos HTML5.
          </video>
        </div>
      </Box>
      <Box data-aos="fade-left">
        <SliderKeen />
      </Box>


      <Box sx={{ textAlign: 'justify', pt: 2, hyphens: 'auto' }} display='flex' justifyContent='center' flexDirection='column' alignItems='start'>
        <Box sx={{ mb: 2, width: '100%' }} data-aos="fade-right">
          <Box >
            <Typography variant='subtitle1' textAlign='center'>Habilidades Técnicas:</Typography>
          </Box>
          <Box display='flex'>
            <CheckComponent body='Excelente control y manejo del balón.' />
          </Box>
          <Box>
            <CheckComponent body='Preciso en los pases cortos y largos.' />
          </Box>
          <Box>
            <CheckComponent body='Velocidad y agilidad para desbordar por la banda.' />
          </Box>
          <Box>
            <CheckComponent body='Capacidad para cruzar precisos centros al área.' />
          </Box>
          <Box>
            <CheckComponent body='Buena lectura del juego' />
          </Box>
          <Box>
            <CheckComponent body='capacidad de anticipación en defensa.' />
          </Box>
          <Box>
            <CheckComponent body='Habilidad en el uno contra uno' />
          </Box>
        </Box>
        <Box sx={{ mb: 2, width: '100%', mt: 6 }} data-aos="fade-left">
          <Box >
            <Typography variant='subtitle1' textAlign='center'>Habilidades Físicas:</Typography>
          </Box>
          <Box>
            <CheckComponent body='Velocidad para recorrer la banda.' />
          </Box>
          <Box>
            <CheckComponent body='Agilidad y  cambio de dirección rápida.' />
          </Box>
          <Box>
            <CheckComponent body='Buena resistencia física.' />
          </Box>
          <Box>
            <CheckComponent body='Potencia en los disparos ' />
          </Box>
          <Box>
            <CheckComponent body='Capacidad de llegar al área contraria ofensiva ' />
          </Box>
        </Box>

      </Box>
      <Box sx={{ backgroundColor: 'black', textAlign: 'justify', pt: 5, hyphens: 'auto', py: 5 }} display='flex' justifyContent='center'  >
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Box sx={{ width: '90%', textAlign: 'center', mb: 2 }} data-aos="fade-up">
            <Typography variant='subtitle1' sx={{ color: 'white' }}>SOBRE MI </Typography>
          </Box>
          <Box sx={{ width: '90%' }} data-aos="fade-right">
            <Typography variant='body1' sx={{ color: 'white' }}>He adquirido habilidades y conocimientos relevantes a través de mi trayectoria personal y profesional. Como aficionado al fútbol, he tenido la oportunidad de participar y organizar eventos relacionados con el deporte, lo que me ha permitido desarrollar habilidades de comunicación efectiva, trabajo en equipo y resolución de problemas. <br /><br />Mi residencia actual en California y mi pasión por el fútbol me han brindado una combinación única de destrezas y perspectivas que considero valiosas en esta posición.</Typography>
          </Box> <br />
          <Box sx={{ width: '90%' }}data-aos="fade-left">
            <Typography variant='body1' sx={{ color: 'white' }}>Durante mi trayectoria en la liga AFA, tuve el honor de representar al prestigioso equipo de Vélez y competir a nivel profesional como carrilero derecho. Esta experiencia me brindó una base sólida en términos de tácticas, habilidades técnicas y trabajo en equipo. Desempeñar esta posición me permitió desarrollar mi velocidad, agilidad y capacidad de desborde por la banda, así como mi habilidad para entregar precisos centros al área.</Typography>
          </Box>
          <Box sx={{ width: '90%', mt: 2 }} data-aos="fade-right">
            <Typography variant='body1' sx={{ color: 'white' }}>Mi dedicación al fútbol ha sido una fuente constante de inspiración y motivación, y me ha enseñado la importancia del compromiso, la disciplina y la perseverancia. Durante mi tiempo en el equipo juvenil de "Colegio Futbol Club", desarrollé mis habilidades técnicas y tácticas, así como mi capacidad para trabajar en equipo y comunicarme eficientemente con mis compañeros. Participamos en torneos locales y logramos ser heptacampeones de la liga local.</Typography>
          </Box>
          <Box sx={{ width: '90%', mt: 2 }} data-aos="fade-left">
            <Typography variant='body1' sx={{ color: 'white' }}>Más adelante en mi vida me uní al Samudio FC, un equipo amateur donde tuve la oportunidad de enfrentarme a jugadores más experimentados. Demostré mi capacidad para adaptarme rápidamente al nivel de juego y contribuir tanto en defensa como en el ataque. Participamos en competiciones regionales y alcanzamos el bicampeonato.</Typography>
          </Box>

        </Box>
      </Box>
    </>
  )
}
