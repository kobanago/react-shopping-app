import { Select } from '@/components/elements/Select';
import { Cards } from '@/components/molecules/Cards';
import { Header } from '@/components/molecules/Header';
import { SideMenu } from '@/components/molecules/SideMenu';
import { goods } from 'mocks/features/data/goods.json';
import { FC, useEffect, useRef, useState } from 'react';
export const Main: FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const sideMenuRef = useRef<HTMLDivElement>(null);
  const [mainTopPadding, setMainTopPadding] = useState(0);
  const [mainLeftPadding, setMainLeftPadding] = useState(0);

  useEffect(() => {
    if (!headerRef.current || !sideMenuRef.current) return;
    setMainTopPadding(headerRef.current.offsetHeight);
    setMainLeftPadding(sideMenuRef.current.offsetWidth);
  }, []);

  return (
    <div>
      <Header ref={headerRef} />
      <main
        className='flex justify-between items-start'
        style={{ paddingTop: `${mainTopPadding}px` }}
      >
        <div className='flex flex-row'>
          <SideMenu ref={sideMenuRef} />
          <div style={{ paddingLeft: `${mainLeftPadding}px` }}>
            <div className='flex justify-between items-center'>
              <p>表示{goods.length}件</p>
              <Select clickHandler={() => {}} />
            </div>
            <Cards cards={goods} />
          </div>
        </div>
      </main>
    </div>
  );
};
