import { useSnapshot } from 'valtio';
import { useGLTF } from '@react-three/drei';

function ShoeModel(props) {
  const snap = useSnapshot(props.state);
  const { nodes, materials } = useGLTF('/shoe-draco.glb');
  
  // Add the rendering and animation logic here
  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
      onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
      onPointerOut={(e) => e.intersections.length === 0 && set(null)}
      onPointerMissed={() => (props.state.current = null)}
      onPointerDown={(e) => (
        e.stopPropagation(), (props.state.current = e.object.material.name)
      )}
    >
      <mesh
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={snap.items.laces}
      />
      <mesh
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={snap.items.mesh}
      />
      <mesh
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={snap.items.caps}
      />
      <mesh
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={snap.items.inner}
      />
      <mesh
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={snap.items.sole}
      />
      <mesh
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={snap.items.stripes}
      />
      <mesh
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={snap.items.band}
      />
      <mesh
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={snap.items.patch}
      />
    </group>
  );
}

export default ShoeModel;
