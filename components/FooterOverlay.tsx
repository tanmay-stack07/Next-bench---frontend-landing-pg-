import React from "react";

const FooterOverlay: React.FC = () => {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 h-[22vh] pointer-events-none"
      style={{ zIndex: 9999999999 }}
      aria-hidden="true"
    >
      {/* Gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      {/* Solid safety strip to fully cover any stubborn watermark */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-black"
        style={{ height: "max(10px, env(safe-area-inset-bottom))" }}
      />
      {/* Bottom-right cover block to mask watermark explicitly */}
      <div className="absolute bottom-2 right-2 w-[180px] h-[48px] bg-black/95 rounded-md" />
    </div>
  );
};

export default FooterOverlay;
