import { useState } from 'react';

export function useOpenModal() {
  const [openModal, setOpenModal] = useState(false);
  return { openModal, setOpenModal };
}
