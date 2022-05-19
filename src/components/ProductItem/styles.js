import styled from '@emotion/styled/macro';
import { COLORS, LAYOUT } from 'styles/theme';

const Container = styled.div`
  margin-bottom: 2rem;
`;

const ImageContainer = styled.div`
  cursor: pointer;

  position: relative;
  width: 100%;
  overflow: hidden;
  filter: brightness(0.95);

  &::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;

  left: 0px;
  top: 0px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ImageContainer}:hover & {
    transform: scale(110%);
  }
`;

const CartController = styled.div`
  position: absolute;
  width: 90%;
  left: 5%;
  background-color: ${COLORS.WHITE};
  border-radius: ${LAYOUT.BORDER_RADIUS * 2};
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ItemInfo = styled.div`
  width: 80%;
  padding: 0.6rem 0;

  & > p {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 0.9rem;
  padding: 0.5rem 0;
`;

const Price = styled.p`
  font-size: 1.2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  width: 20%;
`;

export { Container, ImageContainer, Image, Description, ItemInfo, Title, Price, ButtonContainer };
