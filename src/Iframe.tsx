import { useState } from "react";

function Iframe() {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      {!isIframeLoaded && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="loading.svg" alt="loading" width={100} />
        </div>
      )}
      <iframe
        title="web"
        src="https://duadigital.click/"
        frameBorder={0}
        style={{
          position: "absolute",
          left: 0,
          height: "100%",
          width: "100%",
          visibility: isIframeLoaded ? "visible" : "hidden",
        }}
        height="100%"
        width="100%"
        onLoad={() => setIsIframeLoaded(true)}
      />
    </div>
  );
}

export default Iframe;
