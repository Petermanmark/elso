import { Gyumolcsok } from './Gyumolcsok';

export function App() {
  return (
    <div>
      <Gyumolcsok
        data={[
          { name: 'alma', isRed: true },
          { name: 'szilva' },
          { name: 'körte' },
          { name: 'cseresznye', isRed: true },
        ]}
      />
    </div>
  );
}

export default App;
