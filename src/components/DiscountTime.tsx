import Countdown, { zeroPad } from 'react-countdown'

function daysToMilliseconds(days: number): number {
  const millisecondsPerDay = 24 * 60 * 60 * 1000 // 1 day = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
  return days * millisecondsPerDay
}

export default function DiscountTime({
  from,
  days,
}: {
  from: Date
  days: number
}) {
  const Completionist = () => <span>You are lost the offer!</span>

  return (
    <Countdown
      date={from.getTime() + daysToMilliseconds(days)}
      renderer={({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          return <Completionist />
        } else {
          return (
            <div className='grid grid-cols-4 gap-5 text-center auto-cols-max'>
              <div className='flex flex-col items-center p-2 bg-warning rounded-md text-white'>
                <span className='font-mono text-2xl font-bold leading-6'>
                  {zeroPad(days)}
                </span>
                <span className='capitalize leading-3'>days</span>
              </div>

              <div className='flex flex-col items-center p-2 bg-warning rounded-md text-white'>
                <span className='font-mono text-2xl font-bold leading-6'>
                  {zeroPad(hours)}
                </span>
                <span className='capitalize leading-3'>hours</span>
              </div>

              <div className='flex flex-col items-center p-2 bg-warning rounded-md text-white'>
                <span className='font-mono text-2xl font-bold leading-6'>
                  {zeroPad(minutes)}
                </span>
                <span className='capitalize leading-3'>min</span>
              </div>

              <div className='flex flex-col items-center p-2 bg-warning rounded-md text-white'>
                <span className='font-mono text-2xl font-bold leading-6'>
                  {zeroPad(seconds)}
                </span>
                <span className='capitalize leading-3'>sec</span>
              </div>
            </div>
          )
        }
      }}
    />
  )
}
