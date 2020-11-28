import FormRedact from "../components/FormRedact";
import React, {useRef, useState} from "react";
import styled from 'styled-components'
import TextCanvas from "../components/TextCanvas";

const Wrap = styled.div`
  display: flex;
`;

const CanvasContainer = styled.div`
  flex: 0 0 70%;
  width: 70%;
  position: relative;
`;

const Canvas = styled.canvas`
  width: 100%;
`;

const Form = styled(FormRedact)`
  flex: 0 0 30%;
`;

export default function Index() {
  const [data, setData] = useState(null);
  const canvas = useRef(null);

  const loadFile = (file) => {
    const context = canvas.current.getContext('2d');
    const image = new Image();
    image.onload = () => {
      canvas.current.width = image.width;
      canvas.current.height = image.height;
      context.drawImage(image, 0, 0, image.width, image.height);
    };
    image.src = URL.createObjectURL(file);
  };
// https://upload.wikimedia.org/wikipedia/commons/5/52/Continuous_form_paper_%2814p875_x_11%29.jpg
  return <Wrap>
    <CanvasContainer>
      <Canvas ref={canvas} style={{display: 'none'}} />
      <img src="/background/paper.jpeg" style={{width: '100%'}} />
      <TextCanvas data={data} />
    </CanvasContainer>
    <Form onLoadFile={loadFile} onUpdate={(d) => {setData(d)}} />
  </Wrap>
};
