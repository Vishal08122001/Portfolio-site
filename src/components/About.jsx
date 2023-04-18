import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="sm:pt-10 w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8" style={{ paddingTop: '7rem' }}>
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className=" text-lg text-gray-400 py-6 max-w-xxl">
          As you know my name is Vishal. I am basically from Mathura(Uttar Pradesh) but, i am settled in Faridabad from my childhood. Talking about my educational qualifications i completed my SSC from Goverment Modal Senior Secondary School with 8.4 CGPA.
          Currently, I am persuing Bachelor in Commerce from University of Delhi (SOL) apart from that i have completed Web Development from Almabetter.
        </p>

        <br />

        <p className="text-lg text-gray-400 py-6 max-w-xxl">
          My short-term goal is to get a job in a reputed company so that I can implement as well as improve my knowledge and skill.
          My long-term goal is to achieve a good position where. I can build my carrier and help the organization.

          My strength is I am honest, self-motivated, and hardworking.
          My weakness is I am straightforward and I can not say no to people asking for help.
        </p>
      </div>
    </div>
  );
};

export default About;