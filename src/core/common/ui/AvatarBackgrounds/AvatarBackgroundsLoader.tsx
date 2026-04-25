import { Spinner } from '../Spinner';
import { Typography } from '../Typography';
import { useEffect, useState } from 'react';

export function AvatarBackgroundsLoader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }

        return prev + 10;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rounded-xl overflow-hidden bg-black flex flex-col rounded-xl overflow-hidden grow h-[198px] w-[112px]">
      <div className="h-full w-full justify-center items-center grow-1 flex">
        <Spinner value={progress} size={65} strokeWidth={3} />
      </div>
      <Typography variant="xsSemibold" className="mt-auto pb-3 text-center text-white">1 minute left</Typography>
    </div>
  );
}
