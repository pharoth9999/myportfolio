import Image from "next/image";

export default function Home() {
  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
      </style>
      <div>
        <nav className="flex flex-row justify-between items-center m-5 w-ful h-[50px] p-10 text-lg poppins-medium">
          <div className="">Thy Pharoth</div>
          <div>
            <ul className="flex flex-row justify-between items-center gap-5">
              <li>
                <a
                  href="#about"
                  className="border-2 border-black rounded-[25px] p-0.5 pl-3 pr-3 hover:bg-black hover:text-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="border-2 border-black rounded-[25px] p-0.5 pl-3 pr-3 hover:bg-black hover:text-white"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#Projects"
                  className="border-2 border-black rounded-[25px] p-0.5 pl-3 pr-3 hover:bg-black hover:text-white"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="border-2 border-black rounded-[25px] p-0.5 pl-3 pr-3 hover:bg-black hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div>
        <div className="flex flex-col justify-center items-start m-10 pl-5">
          <div className="text-lg poppins-regular">Hello! I'm Pharoth.</div>
          <p className="text-[60px] poppins-semibold">
            Year 3 Student in Computer Science at ITC
          </p>
        </div>
      </div>
      <div>
        <section id="about">
          <div className="flex justify-center items-center m-10 pl-5">
            <h1 className="text-[30px] poppins-semibold">About</h1>
          </div>
          <div>
            <div className="flex flex-col justify-center items-start m-10 pl-5">
              <p className="text-lg poppins-regular">
                I am a Year 3 student in Computer Science at ITC. I am
                passionate about technology and programming, and I am always
                looking to learn new things.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section id="experience">
          <div className="flex justify-center items-center m-10 pl-5">
            <h1 className="text-[30px] poppins-semibold">Experience</h1>
          </div>
          <div>
            <div className="flex flex-col justify-center items-start m-10 pl-5">
              <p className="text-lg poppins-regular">
                I have experience in web development, mobile development, and
                software development. I have worked on several projects using
                different technologies such as React, Node.js, Express.js,
                MongoDB, and Firebase.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section id="Projects">
          <div className="flex justify-center items-center m-10 pl-5">
            <h1 className="text-[30px] poppins-semibold">Projects</h1>
          </div>
          <div>
            <div className="flex flex-col justify-center items-start m-10 pl-5">
              <p className="text-lg poppins-regular">
                I have worked on several projects, including a web application
                for managing tasks, a mobile application for tracking expenses,
                and a software application for managing inventory.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section id="contact">
          <div className="flex justify-center items-center m-10 pl-5">
            <h1 className="text-[30px] poppins-semibold">Contact</h1>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center m-10 pl-5">
              <p className="text-lg poppins-regular">
                Email: phathyroth@gmail.com
              </p>
              <p className="text-lg poppins-regular">Phone: 0967885737</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
