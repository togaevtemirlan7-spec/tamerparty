import { useEffect, useRef } from "react";
import QrScanner from "qr-scanner";

export default function ScannerPage() {
  const videoRef = useRef(null);

  useEffect(() => {
    const scanner = new QrScanner(
      videoRef.current,
      (result) => {
        window.location.href = result.data;
      },
      {
        highlightScanRegion: true,
        highlightCodeOutline: true,
      }
    );

    scanner.start();
    return () => scanner.stop();
  }, []);

  return (
    <div className="container">
      <h1>Сканер QR</h1>
      <video
        ref={videoRef}
        style={{ width: "100%", borderRadius: 10, marginTop: 20 }}
      ></video>
    </div>
  );
}
