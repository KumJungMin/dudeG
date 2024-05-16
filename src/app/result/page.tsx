'use client';

import { useMemo, useState } from 'react';
import { useUserStore } from '@/stores/useUserStore';
import Button from '@/components/ui/button/Button';
import BottomActionSheet from '@/components/ui/bottomActionSheet/BottomActionSheet';

import styles from './result.module.scss';

export default function Result() {
  const { guests } = useUserStore();

  const [isOpenedBottomSheet, setIsOpenedBottomSheet] = useState(false);
  const [selectedGuest, setSelectedGuest] = useState(Object.keys(guests)[0]);

  const guestList = useMemo(() => {
    return Object.keys(guests).map((key) => ({
      key,
      value: guests[key].name,
    }));
  }, [guests]);

  const toggleBottomSheet = () => {
    setIsOpenedBottomSheet(!isOpenedBottomSheet);
  };

  return (
    <main className={styles.container}>
      <div>
        <h3 className={styles.title}>서로의 두더지와 추천 선물 리스트</h3>
        <Button className={styles.subTitle} onClick={toggleBottomSheet}>
          <span>친구의 두더지:</span>
          <span>{Object.values(guests)[0].name}</span>
        </Button>
      </div>
      {isOpenedBottomSheet && (
        <BottomActionSheet
          items={guestList}
          selectedKey={selectedGuest}
          onClickItem={setSelectedGuest}
        />
      )}
      <div className={styles.wrapper}>
        {/* TODO: api 승인 후 검색 API 연동하고 iframe 제거하고 검색 결과를 보여준다. */}
      </div>
    </main>
  );
}
