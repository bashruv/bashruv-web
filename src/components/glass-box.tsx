import React from "react";

interface GlassBoxProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  Component?: keyof React.ReactHTML;
  hoverEnable?: boolean;
  onRequestClose?: () => void;
}

function GlassBoxComponent(
  props: GlassBoxProps,
  ref: React.Ref<HTMLDivElement>
) {
  const {
    className,
    children,
    Component,
    onRequestClose,
    hoverEnable,
    ...otherProps
  } = props;

  const essentialStyle = "border border-white rounded-2xl flex flex-col";

  const defaultStyle = "backdrop-blur-lg border-opacity-30 shadow-2xl";

  const hoverStyle =
    "bg-neutral-800 hover:bg-opacity-30 hover:backdrop-blur-lg hover:border-opacity-30 bg-opacity-0 backdrop-filter-none border-opacity-0 transition-all hover:shadow-2xl";

  const finalStyle = `${essentialStyle} ${
    hoverEnable ? hoverStyle : defaultStyle
  } ${className}`;

  return React.createElement(
    Component || "div",
    { className: finalStyle, ref: ref, ...otherProps },
    <>
      {onRequestClose !== undefined && (
        <div className="py-4 px-6 flex justify-end header-bar">
          <button
            className="bg-red-500 rounded-full p-2"
            onClick={onRequestClose}
          />
        </div>
      )}
      {children}
    </>
  );
}

export const GlassBox = React.forwardRef(GlassBoxComponent);
