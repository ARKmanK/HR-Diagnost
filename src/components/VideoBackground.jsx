import raceVideo from '../img/race.webm';

export default function VideoBackground({ children }) {
  return (
    <div className='relative'>
      <video autoPlay muted loop>
        <source src={raceVideo} type='video/webm' />
      </video>
      <div className='absolute inset-0 bg-black opacity-70 z-2'></div>
      <div className='absolute inset-0 w-full'>
        <div className='flex flex-col items-center mt-45'>
          <div className='bg-blue-950 border-2 rounded-xl border-black p-4 z-3 opacity-90'>{children}</div>
        </div>
      </div>
    </div>
  );
}
