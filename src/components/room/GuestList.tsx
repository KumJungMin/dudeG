import React from 'react';
import GuestListItem from './GuestListItem';

import Style from './GuestList.module.scss';

export default function GuestList() {
  const GUEST_LIST = [
    { id: 1, name: '김철수1', image: '/' },
    { id: 2, name: '김철수2', image: '/' },
  ];

  return (
    <div className={Style.guestList}>
      {GUEST_LIST.map((guest) => (
        <GuestListItem key={guest.id} name={guest.name} image={guest.image} />
      ))}
    </div>
  );
}
