"use client";
import { useEffect, useState, useRef, useMemo } from "react";
import RoseHeroTemp from "@/app/components/RoseHeroTemp";

export default function CoupleIntro() {
  const events = [
    // {
    //   title_ceremony: "Haldi",
    //   image: "/assets/haldi_n.webp",
    //   date: "Wednesday, December 9th 2026",
    //   time: "1:00 PM onwards",
    //   followed: "Followed by Lunch",
    // },
    // {
    //   title_ceremony: "Ring Ceremony & Cocktail",
    //   image: "/assets/ring_n.webp",
    //   date: "Wednesday, December 9th 2026",
    //   time: "6:00 PM onwards",
    //   followed: "Dinner Followed by Cocktail Time 7:00 PM onwards ",
    // },

    {
      title_ceremony: "Wedding",
      image: "/assets/wedding_n.webp",
      date: "Thursday, December 10th 2026",
      baraat: "Departure of Baraat 3:00 PM",

      vivah: "Shubh Vivah - Shubh Lagan anusaar",
      followed: "Dinner 7:00 PM onwards",
    },
  ];

  return (
    <>
      <div
        className="bg-[url('/assets/respo_back.webp')] md:bg-[url('/assets/back.webp')] bg-cover
                            md:bg-cover bg-top bg-no-repeat w-full relative overflow-hidden md:min-h-screen"
      >
        <RoseHeroTemp />
        <div className="relative pt-5 md:pt-30 3xl:pt-34 pb-20 z-10">
          <h2
            className="flex flex-col items-center text-center leading-tight text-3xl md:text-5xl lg:text-7xl
                               pb-0 md:pb-260 lg:pb-200 3xl:pb-270 text-[#B35800]"
          >
            <span className="great-vibes-regular font-semibold">
              Karan
            </span>
            <span className="playfair-display font-semibold italic text-xl md:text-3xl lg:text-[38px]">
              Weds
            </span>
            <span className="great-vibes-regular font-semibold">
              Tanishkaa
            </span>
          </h2>
          <div className="flex flex-col items-center text-center md:gap-6 mt-0 pt-120 lg:pt-150">
            <h2 className="font-eb-garamond font-bold text-base md:text-2xl lg:text-3xl text-center text-[#B35800]">
              ॐ श्री गणेशाय नम:
            </h2>
            <img
              src="/assets/aum.webp"
              alt="ganesh"
              className="w-16 h-16 md:w-25 md:h-24 lg:w-49 lg:h-47 mt-2 lg:mt-4"
            />
            {/* <h2 className="font-eb-garamond font-medium text-base md:text-2xl lg:text-3xl mt-2 md:mt-0 text-[#B35800]">
              With the heavenly blessings of
            </h2>
            <hr className="w-20 lg:w-26 lg:border-2 my-3 lg:my-4 border-[#B35800]" /> */}
            {/* <h2 className="font-eb-garamond font-medium text-xl md:text-3xl lg:text-[42px] text-[#B35800]">
              The Anands and Sahas
            </h2> */}
          </div>
          <div className="text-center mt-8">
            <h2 className="playfair-display font-semibold text-3xl md:text-4xl lg:text-6xl leading-tight lg:tracking-wide tracking-wider text-[#B35800] italic">
              Invite
            </h2>
            <p className="font-eb-garamond font-medium text-xl md:text-2xl lg:text-3xl mt-4 md:mt-6 text-[#B35800]">
              You to join us for the wedding celebrations of
            </p>
            <h2 className="great-vibes-regular font-semibold text-center text-5xl md:text-6xl lg:text-[100px] mt-6 leading-8 md:leading-tight text-[#B35800]">
              Karan
            </h2>
            <p className="text-center text-[17px] md:text-xl lg:text-[20px] leading-tight text-[#B35800] playfair-display mt-3">
              (Grand S/O Lt. Sh. Pyare Lal Madaan and Lt. Smt. Kartar Devi)
            </p>
            <p className="text-center text-[17px] md:text-xl lg:text-[20px] leading-tight text-[#B35800] playfair-display mt-3">
              (S/O Sh. Gulshan Madaan and Smt. Babita Madaan)
            </p>
            <h2 className="great-vibes-regular font-semibold text-5xl md:text-6xl lg:text-[100px] text-center mt-4 leading-tight text-[#B35800]">
              <span className="text-center mt-4 lg:mt-10 text-4xl md:text-6xl lg:text-[100px] leading-tight text-[#B35800] playfair-display font-medium">
                &
              </span>
              <br />
              Tanishkaa
            </h2>
            <p className="text-center text-[17px] md:text-xl lg:text-[20px] leading-tight text-[#B35800] playfair-display">
              (Grand D/O Sh. Mangey Ram Singh and Smt. Rajbala)
            </p>
            <p className="text-center text-[17px] md:text-xl lg:text-[20px] leading-tight text-[#B35800] playfair-display mt-3">
              (D/O Sh. Vijay Kumar Singh and Smt. Lata Singh)
            </p>
            <p className="font-eb-garamond font-medium text-xl md:text-xl lg:text-3xl mt-12 text-[#B35800]">
              At the Namaste Corbett Resort, <br/> Bachatpur, Ramnagar
              <br />
              <a
                href="https://maps.app.goo.gl/4j1dZ8THtrBCpZzTA"
                className="font-eb-garamond font-medium underline md:text-lg text-[13px] md:mt-2 text-[#B35800]"
                target="_blank"
              >
                View Directions
              </a>
            </p>

            {/* <p className="font-eb-garamond font-medium text-base md:text-xl lg:text-3xl mt-12 text-[#B35800]">
              On the following events
            </p> */}
          </div>

          <div className="flex justify-center mt-15 md:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 md:gap-x-26 lg:gap-x-60">
              {events.map((event, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <img
                    src={event.image}
                    alt={event.venue}
                    className="w-85 h-auto md:w-76 lg:w-80"
                  />

                  <h2 className="cinzel font-bold text-[24px] md:text-2xl lg:text-[32px] mt-2 md:mt-4 text-[#B35800]">
                    {event.title_ceremony}
                  </h2>
                  <p className="lora font-medium md:mt-2 text-[#B35800] text-lg">
                    {event.date && (
                      <>
                        <span className="text-base">{event.date}</span>
                        <br />
                      </>
                    )}

                    {event.time && (
                      <>
                        <span className="text-base">{event.time}</span>
                        <br />
                      </>
                    )}

                    {event.baraat && (
                      <>
                        <span className="text-base">{event.baraat}</span>
                        <br />
                      </>
                    )}

                    {event.vivah && (
                      <>
                        <span className="text-base">{event.vivah}</span>
                        <br />
                      </>
                    )}

                    {event.followed && (
                      <span className="text-base">{event.followed}</span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
