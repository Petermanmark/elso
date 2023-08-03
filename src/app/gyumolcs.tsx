export interface GyumolcsProps {
  name: string;
  isRed?: boolean;
}

export function Gyumolcs(props: GyumolcsProps) {
  return (
    <li
      className={
        'flex p-2 border border-black justify-between ' +
        (props.isRed ? 'bg-red-300 ' : '')
      }
    >
      <span className="">{props.name}</span>
      <button className="" onClick={() => alert(`Megvetted ${props.name}`)}>
        Buy
      </button>
    </li>
  );
}
