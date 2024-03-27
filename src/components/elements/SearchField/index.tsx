import { FC, useRef } from 'react';
import { Button } from '../Button';

export const SearchField: FC = () => {
  const normal =
    'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mr-3';
  const dark = 'dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white';
  const style = `${normal} ${dark}`;
  const inputRef = useRef<HTMLInputElement>(null);
  const hancleClickSearch = () => {};

  return (
    <div className='w-full flex flex-row'>
      <input className={style} type='text' placeholder='キーワードを検索' ref={inputRef} />
      <Button clickHandler={hancleClickSearch} iconClass='i-material-symbols-search w-5 h-5' />
    </div>
  );
};
