import * as React from "react";
import "./glass-button.css";

function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

const GlassButton = React.forwardRef(
  ({ className, children}) => {
    return (
      <div
        className={cn(
          "glass-button-wrap cursor-pointer rounded-full",
          className,
        )}
      >
        <button className="glass-button">
          <span>{children}</span>
        </button>
        {/* <div className="glass-button-shadow rounded-full"></div> */}
      </div>
    );
  },
);
GlassButton.displayName = "GlassButton";

export { GlassButton };
