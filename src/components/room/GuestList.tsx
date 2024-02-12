import React from 'react';
import GuestListItem from './GuestListItem';

export default function GuestList() {
  const GUEST_LIST = [
    { id: 1, name: '김철수1', image: '/' },
    { id: 2, name: '김철수2', image: '/' },
    { id: 3, name: '김철수3', image: '/' },
    { id: 4, name: '김철수4', image: '/' },
    { id: 5, name: '김철수5', image: '/' },
    { id: 6, name: '김철수6', image: '/' },
    { id: 7, name: '김철수7', image: '/' },
  ];

  return (
    <div>
      {GUEST_LIST.map((guest) => (
        <GuestListItem key={guest.id} name={guest.name} image={guest.image} />
      ))}
    </div>
  );
}
