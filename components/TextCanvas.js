import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  position: absolute;
  transform-style: preserve-3d;
  perspective-origin: 150% 150%;
  perspective: 250px;
`;

const Paragraph = styled.span`
  margin: 0;
  width: 100%;
`;

const Word = styled.span`
  white-space: pre-wrap;
`;

const Char = styled.div`
  width: fit-content;
  font-family: "Hand Font", cursive;
`;

export default function TextCanvas({ data }) {
  if (!data) return <Wrap>Loading...</Wrap>;

  const {text, color, fontSize, top, left, width, rotate, lineHeight, random, letterSpacing, opacity, perspective, rotateX} = data;

  const createDiff = (value, scale) => {
    return (+value || 0) + (0.5 - Math.random()) / 5 * (+value || 1) * (scale || 1) * random;
  };

  const prepare = [];

  const words = text.split(' ');
  let counter = 0;
  for (let word of words) {
    const wordElements = [];
    for (let char of word) {
      wordElements.push(<Char style={{
        transform: `rotate(${createDiff(null, 20)}deg) skew(${createDiff(null, 10)}deg, ${createDiff(null, 10)}deg)`,
        display: char === '\n' ? 'block' : 'inline-block',
        color: color.hex,
        fontSize: `${createDiff(fontSize)}px`,
        lineHeight: `${createDiff(lineHeight)}px`,
        marginTop: `${createDiff()}px`,
        marginLeft: `${createDiff()}px`,
        opacity: createDiff(1 - opacity / 100, 0.6),
        letterSpacing: `${createDiff(letterSpacing)}px`,
      }}>{char !== '\n' && char}</Char>);
      counter++;
    }
    prepare.push(<Word>{wordElements} </Word>);
  }

  return <Wrap style={{
    top: `${top}px`,
    left: `${left}px`,
    width: `${width}%`,
    transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateZ(${rotate / 5}deg)`,
  }}>
    {prepare}
  </Wrap>;
}