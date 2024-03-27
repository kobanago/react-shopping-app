import { FC, LegacyRef, forwardRef } from 'react';

export type ListProps = {
  list: any[];
  clickHandler: () => void;
  addClass?: string;
  ref?: LegacyRef<HTMLDivElement>;
};

export const List: FC<ListProps> = forwardRef(({ list, clickHandler, addClass }, ref) => {
  const normal =
    'px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out cursor-pointer';
  const dark = 'dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white flex items-center';
  const style = `${normal} ${dark}`;
  const nodataNormal = 'px-4 py-2 bg-whiteborder-gray-200 flex items-center';
  const nodataDark = 'dark:text-white dark:border-gray-800';
  const nodataStyle = `${nodataNormal} ${nodataDark}`;
  return (
    <div className={`px-4 sm:px-8 w-auto max-w-5xl m-auto ${addClass}`} ref={ref}>
      {list.length ? (
        <ul className='border border-gray-200 rounded overflow-hidden shadow-md dark:shadow-white'>
          {list.map((item, index) => (
            <li className={style} key={index.toString()} onMouseDown={clickHandler}>
              {item.class && <span className={item.class}> </span>}
              <span>{item.class ? `\u00a0\u00a0 ${item.label}` : item.label}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className={nodataStyle}>
          <span className='i-material-symbols-do-not-disturb-on'> </span>
          <span>{`\u00a0\u00a0 ${'no data'}`}</span>
        </p>
      )}
    </div>
  );
});
// コメントアウトでも読み込んでおく必要有
/* <span className='i-material-symbols-add-circle-rounded'> </span>
<span className='i-streamline-interface-time-rewind-back-return-clock-timer-countdown'>
  {' '}
</span>
<span className='i-material-symbols-logout-rounded'> </span>
<span className='i-material-symbols-person'> </span> */
