import QrScanner from "qr-scanner";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ScannerPage() {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const scanner = new QrScanner(videoRef.current, (result) => {
      navigate(result.data);
      scanner.stop();
    });

    scanner.start();

    return () => scanner.stop();
  }, []);

  return (
    <div className="container">
      <h1>Сканер QR</h1>
      <video ref={videoRef} style={{ width: "100%" }}></video>
    </div>
  );
}
