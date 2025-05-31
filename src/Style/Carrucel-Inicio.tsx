import React from 'react';
import styled from 'styled-components';

// Define las interfaces para las props que tus componentes styled recibirán
interface InnerProps {
  $quantity: number;
}

interface CardProps {
  $index: number;
  $colorCard: string;
  $imageSrc: string; // Agregamos la prop para la URL de la imagen
}

// Adapta tus styled components para aceptar estas props
const StyledInner = styled.div<InnerProps>`
  --w: 23vh;
  --h: 14vh;
  --translateZ: calc((var(--w) + var(--h)) + 0px);
  --rotateX: -15deg;
  --perspective: 1000px;
  position: absolute;
  width: var(--w);
  height: var(--h);
  top: 25%;
  left: calc(50% - (var(--w) / 2) - 2.5px);
  z-index: 2;
  transform-style: preserve-3d;
  transform: perspective(var(--perspective));
  animation: rotating 20s linear infinite;

  --quantity: ${props => props.$quantity};

  @keyframes rotating {
    from {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX))
        rotateY(0);
    }
    to {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX))
        rotateY(1turn);
    }
  }
`;

const StyledCard = styled.div<CardProps>`
  position: absolute;
  border: 2px solid rgba(${props => props.$colorCard});
  border-radius: 12px;
  overflow: hidden;
  inset: 0;
  transform: rotateY(calc((360deg / var(--quantity)) * ${props => props.$index}))
    translateZ(var(--translateZ));

  // Modificamos el .img para usar background-image
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover; // Asegura que la imagen cubra el área sin distorsionarse
    background-image: url(${props => props.$imageSrc}); // Usamos la URL de la imagen
    background-size: cover; // Ajusta el tamaño de la imagen para cubrir el contenedor
    background-position: center; // Centra la imagen
    background-repeat: no-repeat; // Evita que la imagen se repita
    // Puedes mantener el degradado o eliminarlo si solo quieres la imagen
    background: #0000
       radial-gradient(
         circle,
         rgba(${props => props.$colorCard}, 0.2) 0%,
         rgba(${props => props.$colorCard}, 0.6) 80%,
         rgba(${props => props.$colorCard}, 0.9) 100%
       ), url(${props => props.$imageSrc}); /* Aplica el degradado sobre la imagen si quieres */
  }
`;

const StyledWrapper = styled.div`
  .wrapper {
    width: 85vh;
    height: 40vh;
    position: relative;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    
  }
`;



const Card = () => {
  // Datos de las tarjetas, ahora incluyendo una URL de imagen
  const cardData = [
    { index: 0, color: '142, 249, 252', imageSrc: 'https://www.singulart.com/images/artworks/v2/cropped/12535/main/base/440475_27843d5d46da7b9b22908b550deb9739.jpeg' },
    { index: 1, color: '142, 252, 204', imageSrc: 'https://mrwallpaper.com/images/high/michael-jackson-in-thriller-jacket-c2pasr9qxmjbfjdp.webp' },
    { index: 2, color: '142, 252, 157', imageSrc: 'https://mrwallpaper.com/images/high/michael-jackson-live-performance-t1hmxylt6ixxunal.webp' },
    { index: 3, color: '215, 252, 142', imageSrc: 'https://mrwallpaper.com/images/high/michael-jackson-in-his-stage-costume-ij7kk27bl0qbdojx.webp' },
    { index: 4, color: '252, 252, 142', imageSrc: 'https://mrwallpaper.com/images/high/jackson-5-for-the-jacksons-1975-2um5t4upbxt1lyzj.webp' },
    { index: 5, color: '252, 208, 142', imageSrc: 'https://mrwallpaper.com/images/high/michael-jackson-close-up-image-grzfj62l4rl8wxmt.webp' },
    { index: 6, color: '252, 142, 142', imageSrc: 'https://mrwallpaper.com/images/high/american-pop-band-jackson-5-during-1970-performance-gtviibll3v7cd5tv.webp' },
    { index: 7, color: '252, 142, 239', imageSrc: 'https://mrwallpaper.com/images/high/american-pop-band-jackson-5-abc-1970-1yxdx5r05oft9tqc.webp' },
    { index: 8, color: '204, 142, 252', imageSrc: 'https://mrwallpaper.com/images/high/modern-art-michael-jackson-bzjqg2kvcjbxu178.webp' },
    { index: 9, color: '142, 202, 252', imageSrc: 'https://mrwallpaper.com/images/high/michael-jackson-tribute-poster-bhov8c08h1akwfl5.webp' },
  ];

  return (
    <StyledWrapper>
      <div className="wrapper">
        <StyledInner $quantity={cardData.length}>
          {cardData.map((data) => (
            <StyledCard
              key={data.index}
              $index={data.index}
              $colorCard={data.color}
              $imageSrc={data.imageSrc} // Pasamos la URL de la imagen como prop
            >
              <div className="img" />
            </StyledCard>
          ))}
        </StyledInner>
      </div>
    </StyledWrapper>
  );
}

export default Card;