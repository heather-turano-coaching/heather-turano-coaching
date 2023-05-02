import { forwardRef } from "react";

export const AudiencefulForm = forwardRef<
  HTMLFormElement,
  Omit<JSX.IntrinsicElements["form"], "method">
>(function AudiencefulForm({ children, style, ...restProps }, ref) {
  return (
    <form
      {...restProps}
      ref={ref}
      method="POST"
      style={{
        textAlign: "initial",
        ...style
      }}
    >
      {children}
      {/* Honeypot */}
      <div
        style={{
          position: "absolute",
          left: -5000
        }}
        aria-hidden="true"
      >
        <input type="text" name="b28-ft" tabIndex={-1} value="" readOnly />
      </div>
    </form>
  );
});
