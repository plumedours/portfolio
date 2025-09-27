function ModelViewer({ modelUrl }) {

  return (
    <div className="sketchfab-embed-wrapper">
      <iframe
        title="Sketchfab Model"
        frameBorder="0"
        allowFullScreen
        src={modelUrl}
      ></iframe>
    </div>
  );
}

export default ModelViewer;