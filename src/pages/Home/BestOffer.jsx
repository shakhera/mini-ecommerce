import { useEffect, useState } from "react";

const BestOffer = () => {
  const targetDate = "2024-12-31T00:00:00";

  const [timeLeft, setTimeLeft] = useState(
    dayjs(targetDate).diff(dayjs(), "millisecond")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = dayjs(targetDate).diff(dayjs(), "millisecond");
      setTimeLeft(diff);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <section className="relative p-4 w-full mx-auto min-h-[30vh] bg-gray-200 dark:bg-black/5 dark:text-white my-12 flex items-center overflow-hidden">
      <div className="container mx-auto flex justify-center items-center relative h-full w-full">
        <div className="absolute left-0 top-0 lg:top-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <img src={apple} alt="apple" className="w-80 h-auto" />
        </div>

        <div className=" text-center w-2/3 mx-auto">
          <SectionSubTitle subTitle="Best Deals of the week!" />
          <h2 className="text-3xl lg:text-5xl font-bold">
            The best Offer Of this Week!
          </h2>
          <div className="flex justify-center items-center mt-10 text-2xl">
            {timeLeft > 0 ? (
              <ul className="flex items-center">
                <li className="text-center bg-white p-2 h-24 w-20 rounded-md mx-2">
                  <div className="text-4xl font-semibold text-green-700">
                    {days}
                  </div>
                  <div className="text-xl">Days</div>
                </li>
                <li className="flex items-center justify-center text-green-600 text-7xl">
                  :
                </li>
                <li className="text-center bg-white p-2 h-24 w-20 rounded-md mx-2">
                  <div className="text-4xl font-semibold text-green-700">
                    {hours}
                  </div>
                  <div className="text-xl">Hours</div>
                </li>
                <li className="flex items-center justify-center text-green-600 text-7xl">
                  :
                </li>
                <li className="text-center bg-white p-2 h-24 w-20 rounded-md mx-2">
                  <div className="text-4xl font-semibold text-green-700">
                    {minutes}
                  </div>
                  <div className="text-xl">Mins</div>
                </li>
                <li className="flex items-center justify-center text-green-600 text-7xl">
                  :
                </li>
                <li className="text-center bg-white p-2 h-24 w-20 rounded-md mx-2">
                  <div className="text-4xl font-semibold text-green-700">
                    {seconds}
                  </div>
                  <div className="text-xl">Secs</div>
                </li>
              </ul>
            ) : (
              <h2>Time's up!</h2>
            )}
          </div>
        </div>

        <div className="absolute right-0 top-0 lg:top-1/2 transform -translate-y-1/2 translate-x-2/3 lg:translate-x-1/2">
          <img src={orange} alt="orange" className="w-80 h-auto" />
        </div>
      </div>
    </section>
  );
};

export default BestOffer;
