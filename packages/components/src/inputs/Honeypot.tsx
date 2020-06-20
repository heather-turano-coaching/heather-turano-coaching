import React, { FC, memo } from "react";

const inputHoneypotStyle = { display: "none" };

export const InputHoneypot: FC<{ botFieldName?: string }> = memo(
  ({ botFieldName = "bot-field" }) => {
    return (
      <p style={inputHoneypotStyle}>
        <label htmlFor={botFieldName}>
          Don’t fill this out if you&apos;re human:{" "}
          <input id={botFieldName} name={botFieldName} />
        </label>
      </p>
    );
  }
);
