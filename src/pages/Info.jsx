import { useEffect } from 'react';
import usePageStore from '../store/pageStore';

const Info = () => {
  const { setDetailStatus } = usePageStore();

  useEffect(() => {
    setDetailStatus(true);
  }, [setDetailStatus]);

  return (
    <div className="
    INFO-PAGE
    UNIVERSAL-CONTAINER
    flex justify-center
    min-h-screen
    px-4 pt-24 pb-32
    text-xl font-semibold text-center tracking-wide
    bg-cyan-100"
    >
      <div>Created by Muhammad Anindyo Poetra Mufatyta</div>
    </div>
  );
};

export default Info;
