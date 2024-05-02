import SVG from 'react-inlinesvg';

interface IconProps {
  name: string;
  size?: number;
}

export default function Icon(props: IconProps) {
  const { name, size = 24 } = props;

  const svgPath = `/svgs/${name}.svg`;
  return <SVG src={svgPath} width={size} height={size} title={name} />;
}
