const avatar = (seed) =>
  `https://api.dicebear.com/7.x/avataaars/png?seed=${encodeURIComponent(seed)}&size=200`;

export const contacts = [
  { id: 'c1', name: 'Mira', online: true, image: avatar('Mira'), fallback: '👩' },
  { id: 'c2', name: 'Phill', online: true, image: avatar('Phill'), fallback: '🧑' },
  { id: 'c3', name: 'Mike', online: false, image: avatar('Mike'), fallback: '👨' },
  { id: 'c4', name: 'Kierra', online: false, image: avatar('Kierra'), fallback: '👱‍♀️' },
];

export const recentChats = [
  {
    id: 'r1',
    name: 'Phillip Geidt',
    preview: 'Phillip is typing...',
    time: '11:34',
    unread: 6,
    online: true,
    bg: 'purple',
    image: avatar('Phillip'),
    fallback: '🧑‍🎨',
  },
  {
    id: 'r2',
    name: 'Kierra from Match',
    preview: 'Voice message',
    voice: true,
    time: '11:05',
    unread: 2,
    bg: 'yellow',
    image: avatar('Kierra'),
    fallback: '👱‍♀️',
  },
  {
    id: 'r3',
    name: 'Mike Smith',
    preview: 'Yes, put my name down in that list of the donations.',
    time: '10:31',
    bg: 'green',
    image: avatar('Mike'),
    fallback: '👨',
  },
  {
    id: 'r4',
    name: 'Stacey Neighbor',
    preview: 'Hi! Her mom already used it',
    time: '08:12',
    bg: 'pink',
    image: avatar('Stacey'),
    fallback: '👩‍🦰',
  },
];

export const groupChats = [
  {
    id: 'g1',
    name: 'Kevin’s BP',
    preview: 'Kate and Ann are typing...',
    time: '12:32',
    unread: 6,
    extra: 6,
    members: [avatar('Kate'), avatar('Ann'), avatar('Kevin'), avatar('Leo')],
  },
];
