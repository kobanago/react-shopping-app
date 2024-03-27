import { Button } from '@/components/elements/Button';
import { List } from '@/components/elements/List';
import { SearchField } from '@/components/elements/SearchField';
import { goods } from 'mocks/features/data/goods.json';
import { FC, LegacyRef, forwardRef, useRef, useState } from 'react';

export type SideMenuProps = {
  ref?: LegacyRef<HTMLDivElement>;
};

export const SideMenu: FC<SideMenuProps> = forwardRef((props, ref) => {
  const normal = 'bg-gray-50 fixed left-0 shadow-lg p-1.5';
  const dark = 'dark:bg-gray-800 dark:text-white dark:shadow-white';
  const style = `${normal} ${dark}`;
  const [isListDispaly, setIsListDisplay] = useState(false);
  const [isMenuDispaly, setIsMenuDisplay] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const filterCategory = () => {
    if (!inputRef.current) return;
    //処理追加
  };

  return (
    <div className={style} ref={ref} {...props}>
      <Button
        addClass='m-2'
        iconClass={
          isMenuDispaly
            ? 'i-ph-arrow-bend-double-up-left-fill h-7 w-7'
            : 'i-ph-arrow-bend-double-up-right-fill h-7 w-7'
        }
        clickHandler={() => setIsMenuDisplay(!isMenuDispaly)}
      />
      {isMenuDispaly && (
        <div className='flex flex-col'>
          <SearchField />
          <Button
            label={isListDispaly ? '閉じる' : '一覧表示'}
            addClass='m-2'
            iconClass={
              isListDispaly
                ? 'i-material-symbols-book-2-rounded h-5 w-5'
                : 'i-material-symbols-menu-book-outline-rounded h-5 w-5'
            }
            clickHandler={() => setIsListDisplay(!isListDispaly)}
          />
          {isListDispaly && (
            <div className='my-2 overflow-y-scroll' style={{ maxHeight: '550px' }}>
              <List list={goods} clickHandler={filterCategory} ref={inputRef} />
            </div>
          )}
        </div>
      )}
    </div>
  );
});
