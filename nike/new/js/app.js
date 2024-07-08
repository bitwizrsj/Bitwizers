import { proxy, useSnapshot } from 'valtio';

const state = proxy({
  count: 0,
  current: null,
  items: {}
});
console.log(state.items);

function addComponentFromText(compFunc) {
  window.React = React;
  eval(compFunc);
  const NewComp = window.NewComp;
  console.log(NewComp);
}

function Shoe() {
  addComponentFromText(fetchTest());
}

window.onload = () => {
  const canvasContainer = document.getElementById('canvas-container');
  const picker = document.getElementById('color-picker');

  // Initialize canvas and picker here with necessary logic
  return (
    <>
      <div className="grid flex max-w-sm md:max-w-full">
        <Canvas
          className="canvas flex"
          shadows
          dpr={[1, 2]}
          camera={{ position: [0, 0, 4], fov: 50 }}
        >
          <ambientLight intensity={0.7} />
          <spotLight
            intensity={0.5}
            angle={0.1}
            penumbra={1}
            position={[10, 15, 10]}
            castShadow
          />
          <Suspense fallback={null}>
            <ShoeModel state={state} />
            <Environment preset="city" />
            <ContactShadows
              rotation-x={Math.PI / 2}
              position={[0, -0.8, 0]}
              opacity={0.25}
              width={10}
              height={10}
              blur={1.5}
              far={0.8}
            />
          </Suspense>
          <OrbitControls />
        </Canvas>
        <Picker state={state} />
      </div>
    </>
  );
};
