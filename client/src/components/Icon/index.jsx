import { ReactSVG } from "react-svg";
import { useEffect, useState } from "react";

const Icon = ({ name = "heart-3-fill", color = "inherit", size = "18px" }) => {
  const [svgContent, setSvgContent] = useState(null);

  useEffect(() => {
    const importSVG = async () => {
      try {
        const svgModule = await import(`../../assets/svg/${name}.svg`);
        setSvgContent(svgModule.default);
      } catch (error) {
        console.error("Error loading SVG:", error);
      }
    };

    importSVG();
  }, [name]);

  return svgContent ? (
    <ReactSVG
      loading={() => {
        // console.log(` ${name}`);
      }}
      style={{
        display: "inline-block",
        fill: color,
        color,
        height: size,
        width: size,
      }}
      src={svgContent}
    />
  ) : (
    <div style={{ fill: color, height: size, width: size }}></div>
  );
};

export default Icon;
