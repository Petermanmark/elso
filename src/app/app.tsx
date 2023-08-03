import { Counter } from './counter';
import { Gyumolcsok } from './gyumolcsok';
import { Notes } from './notes';

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
      <Notes
        initialNotes={[
          { text: 'amonger Béla vagyok', id: 0 },
          { text: 'Samira vagyok', id: 1 },
          { text: 'Mai teendőim', id: 2 },
        ]}
      />
    </div>
  );
}

export default App;
