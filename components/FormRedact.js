import React, {useEffect, useState} from "react";
import { SketchPicker } from 'react-color';
import styled from "styled-components";

const initialText = `Принимая задачу в работу, ответственный соглашается со всеми параметрами, указанными в задаче.
В случае несогласия с параметрами, ответственный должен уведомить поставщика в течение 3-х рабочих часов с момента постановки задачи.
Если во время выполнения задачи находятся проблемы, из-за которых время на решение задачи значительно увеличивается, ответственный  должен оповестить об этом и создателя задачи и руководителя отдела,в котором он закреплен в комментарии к задаче.
`

const Input = styled.input`
  width: 100%;
  display: block;
`;

export default function FormRedact({ onLoadFile, onUpdate }) {
  const [text, setText] = useState(initialText);
  const [color, setColor] = useState({hex: '#193169'});
  const [top, setTop] = useState(31);
  const [left, setLeft] = useState(74);
  const [width, setWidth] = useState(75);
  const [fontSize, setFontSize] = useState(22);
  const [rotate, setRotate] = useState(0);
  const [lineHeight, setLineHeight] = useState(22);
  const [random, setRandom] = useState(1);
  const [letterSpacing, setLetterSpacing] = useState(-1);
  const [opacity, setOpacity] = useState(5);
  const [perspective, setPerspective] = useState(500);
  const [rotateX, setRotateX] = useState(5);

  useEffect(() => {
    onUpdate({
      text,
      color,
      fontSize,
      top,
      left,
      width,
      rotate,
      lineHeight,
      random,
      letterSpacing,
      opacity,
      perspective,
      rotateX,
    });
  }, [text, color, fontSize, top, left, width, rotate, lineHeight, random, letterSpacing, opacity, perspective, rotateX]);

  return <form>
    <Input type="file" onChange={(e) => {onLoadFile(e.target.files[0])}} placeholder="файл" />
    <textarea value={text} onChange={(e) => {setText(e.target.value)}} placeholder="текст" />
    <SketchPicker color={color} onChangeComplete={setColor} />
    Размер шрифта
    <Input type="number" value={fontSize} onChange={(e) => {setFontSize(e.target.value)}} placeholder="Размер шрифта" />
    Top
    <Input type="number" value={top} onChange={(e) => {setTop(e.target.value)}} placeholder="Top" />
    Left
    <Input type="number" value={left} onChange={(e) => {setLeft(e.target.value)}} placeholder="Left" />
    Width
    <Input type="number" value={width} onChange={(e) => {setWidth(e.target.value)}} placeholder="Width" />
    Поворот
    <Input type="number" value={rotate} onChange={(e) => {setRotate(e.target.value)}} placeholder="Поворот" />
    Высота строки
    <Input type="number" value={lineHeight} onChange={(e) => {setLineHeight(e.target.value)}} placeholder="Высота строки" />
    Рандом
    <Input type="number" value={random} onChange={(e) => {setRandom(e.target.value)}} placeholder="Рандом" />
    Межбуквенный интервал
    <Input type="number" value={letterSpacing} onChange={(e) => {setLetterSpacing(e.target.value)}} placeholder="Межбуквенный интервал" />
    Прозрачность
    <Input type="number" value={opacity} onChange={(e) => {setOpacity(e.target.value)}} placeholder="Прозрачность" />
    Перспектива
    <Input type="number" value={perspective} onChange={(e) => {setPerspective(e.target.value)}} placeholder="Прозрачность" />
    Поворот перспективы
    <Input type="number" value={rotateX} onChange={(e) => {setRotateX(e.target.value)}} placeholder="Поворот перспективы" />
  </form>;
}