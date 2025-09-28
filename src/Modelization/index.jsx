import ModelViewer from "../components/commons/ModelViewer";

function ModelizationPage() {
  return (
    <div id="top" className="flex flex-col justify-center w-11/12 mx-auto">
      <div className="my-5">
        <h1 className="text-center text-2xl text-neutral-200 font-semibold">Modélisation 3D</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto py-5 gap-10">
        <ModelViewer modelUrl="https://sketchfab.com/models/44623d7441b54c12bb39fb79c4f89212/embed" />
        <ModelViewer modelUrl="https://sketchfab.com/models/d7c6371b59944586be9bc51904c72438/embed" />
        <ModelViewer modelUrl="https://sketchfab.com/models/ec08631e05154b51ba638fa1930b6ea0/embed" />
        <ModelViewer modelUrl="https://sketchfab.com/models/4eade60f73a34444ba3785a7d1022f24/embed" />
        <ModelViewer modelUrl="https://sketchfab.com/models/a7b26e1485164b998a0bec36a91f4559/embed" />
        <ModelViewer modelUrl="https://sketchfab.com/models/cf4966f23f724668b23605224da41a01/embed" />
        <ModelViewer modelUrl="https://sketchfab.com/models/8292f0b6375f48d48a8f9189ec99a49b/embed" />
        <ModelViewer modelUrl="https://sketchfab.com/models/b35a1ea91037482ba3456739c0f54063/embed" />
        <ModelViewer modelUrl="https://sketchfab.com/models/a689c25105a349a289e1f7d4ad892554/embed" />
        <ModelViewer modelUrl="https://sketchfab.com/models/25b6462ce43140e9a31e25dee21d4b5d/embed" />
        <ModelViewer modelUrl="https://sketchfab.com/models/a318917ad7ab4f639d20071444067654/embed" />
        <ModelViewer modelUrl="https://sketchfab.com/models/226b7af022c24807975b1a0fb68088e8/embed" />
        {/* <ModelViewer modelUrl="https://sketchfab.com/models/CHANGE/embed" /> */}
      </div>
      {/* <div className="flex flex-col md:flex-row w-11/12 mx-auto justify-center items-center md:items-start gap-10 my-10 border shadow-md shadow-neutral-500 border-neutral-700 p-3">
        <div className="flex h-60">
          <iframe src="https://discord.com/widget?id=1029418323714248744&theme=dark" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-md text-neutral-200">Besoin d'aide en modélisation 3D avec SketchUp ? Rejoignez notre serveur Discord !</p>
          <div className="flex flex-col gap-2 text-sm text-neutral-400">
            <p>Vous travaillez sur un projet en 3D avec SketchUp et avez besoin d'orientations, d'astuces ou de réponses à vos questions ? Notre serveur Discord est là pour vous !</p>
            <p>En rejoignant notre communauté, vous aurez accès à :</p>
            <ul className="list-disc list-inside">
              <li>Des experts passionnés de SketchUp prêts à vous guider.</li>
              <li>Des partages de projets pour vous inspirer.</li>
              <li>Des discussions en direct avec d'autres amateurs de modélisation 3D.</li>
            </ul>
            <p>Et bien plus encore !</p>
            <p>Ne restez pas bloqué, venez nous rejoindre dès maintenant et faites de votre expérience de modélisation 3D une aventure collaborative.</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default ModelizationPage;
