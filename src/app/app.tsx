import { Todos } from './todos';

export function App() {
  return (
    <div className="relative pb-6">
      {/* <Gyumolcsok
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
      /> */}

      <Todos />
      <span className="bottom-2 absolute right-4 text-white">
        Készítette: Peterman Márk
      </span>
    </div>
  );
}

export default App;
