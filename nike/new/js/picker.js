import { HexColorPicker } from 'react-colorful';
import { useSnapshot } from 'valtio';

function Picker(props) {
  const snap = useSnapshot(props.state);
  
  return (
    <div style={{ display: snap.current ? 'block' : 'none' }}>
      <HexColorPicker
        className="picker mx-auto max-w md:max-w-full"
        color={snap.items[snap.current]}
        onChange={(color) => (props.state.items[snap.current] = color)}
      />
      <h1 className="name_shoe">{snap.current}</h1>
    </div>
  );
}

export default Picker;
