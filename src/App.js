import './App.css';
import ColorPicker from './components/ColorPicker';

function App() {
  return (
    <div>
      <ColorPicker colors={['#0000fe', '#feff00', '#ff00fe', '#00ffff', '#fea500', '#81007f', '#febfcd', '#008001', '#fe6347', '#fe6347', '#8b4512', '#ff8b00', '#ff8b00', '#4682b4', '#fed700']} />
    </div>
  );
}

export default App;
