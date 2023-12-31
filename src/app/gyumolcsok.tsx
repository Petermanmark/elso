import { Gyumolcs, GyumolcsProps } from './gyumolcs';

export interface GyumolcsokProps {
  data: GyumolcsProps[];
}

export function Gyumolcsok(props: GyumolcsokProps) {
  return (
    <div className="m-4 w-96">
      <ul className="border-2 border-black">
        {props.data.map((gyumolcs) => (
          <Gyumolcs name={gyumolcs.name} isRed={gyumolcs.isRed} />
        ))}
      </ul>
    </div>
  );
}
