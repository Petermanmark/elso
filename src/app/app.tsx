import { Counter } from './counter';
import { Gyumolcsok } from './gyumolcsok';

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
      <Counter initialCount={0} />
    </div>
  );
}

export default App;
