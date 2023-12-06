import { DetailedHTMLProps, HTMLAttributes, Ref, forwardRef } from "react";

interface GlassBoxProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

function GlassBoxComponent(props: GlassBoxProps, ref: Ref<HTMLDivElement>) {
  const { className, children, ...otherProps } = props;

  const defaultStyle =
    "border border-white rounded-2xl backdrop-blur-lg border-opacity-30 flex flex-col";

  const finalStyle = `${defaultStyle} ${className}`;
  return (
    <div className={finalStyle} ref={ref} {...otherProps}>
      {children}
    </div>
  );
}

export const GlassBox = forwardRef(GlassBoxComponent);
