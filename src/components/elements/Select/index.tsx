import { FC } from 'react';

export type SelectProps = {
  clickHandler: () => void;
};

export const Select: FC<SelectProps> = ({ clickHandler }) => {
  const normal =
    'block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline';
  const dark = 'dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white dark:shadow-white';
  const style = `${normal} ${dark}`;
  const options = ['更新：新しい順', '更新：古い順', '価格：安い順', '価格：古い順'];

  return (
    <div className='inline-block relative w-64 dark:text-white'>
      <label className='block text-gray-700 dark:text-white text-sm font-bold'>並べ替え</label>
      <select className={style}>
        {options.map((item, index) => (
          <option key={index.toString()} onMouseDown={clickHandler}>
            {item}
          </option>
        ))}
      </select>
      <div className='pointer-events-none absolute bottom-2 right-0 flex items-center px-2'>
        <span className='i-material-symbols-arrow-drop-down-circle-outline-rounded w-5 h-5'> </span>
      </div>
    </div>
  );
};
