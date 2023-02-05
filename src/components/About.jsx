import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          As you know my name is Vshal. I am basically from Mathura(Uttar Pradesh) but, i am settled in Faridabad from my childhood. Talking about my educational qualifications i completed my SSC from Goverment Modal Senior Secondary School with 8.4 CGPA
          <br />
          Currently i am persuring Bachelor in Commerce from University of Delhi (SOL) apart from that i am doing Web Development from Almabetter (Bangalore) in which till now i have completed HTML, CSS, Javascript React, Redux, Node.js, Express.js, Mongoose, MongoDB, SQL etc.
          <br />
          My short-term goal is to get a job in a reputed company so that I can implement as well as improve my knowledge and skill.
          My long-term goal is to achieve a good position where. I can build my carrier and help the organization.
        </p>

        <br />

        <p className="text-xl">
          My strength is I am honest, self-motivated, and hardworking.
          My weakness is I am straightforward and I can not say no to people asking for help.
          That's all about me. Thank you!
        </p>
      </div>
    </div>
  );
};

export default About;