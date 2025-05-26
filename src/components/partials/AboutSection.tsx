import Button from 'src/components/form/Button';
import SectionTitle from 'src/components/shared/SectionTitle';
import { FiCoffee } from 'react-icons/fi';
import { HiOutlineChartBar, HiOutlineFire, HiOutlineUsers } from 'react-icons/hi';
import ProgressBar from 'src/components/shared/ProgressBar';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <>
      <SectionTitle>About Me</SectionTitle>

      <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:gap-8">
        {/* Bio */}
        <div className="">
          <p className="text-justify">
            Hi, I'm Dhrumil Busa — a passionate Full Stack Developer based in Surat, Gujarat.<br />

            I specialize in building, designing, and customizing websites and mobile applications that are not just functional but also user-friendly and performance-driven. With hands-on experience across both front-end and back-end technologies, I turn ideas into scalable digital solutions that deliver real value.<br />

            Whether it's crafting responsive UI, integrating APIs, or optimizing backend logic — I love the full cycle of bringing products to life through clean, efficient code.
          </p>
          <Link href="/Dhrumil Busa.pdf" passHref>
            <a download>
              <Button className="mt-5">Download CV</Button>
            </a>
          </Link>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">Frontend Development</h6>
              <p>95%</p>
            </div>
            <ProgressBar color="amber" progress={95} />
          </div>
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">Backend Development</h6>
              <p>85%</p>
            </div>
            <ProgressBar color="blue" progress={85} />
          </div>

          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">Mobile Application</h6>
              <p>65%</p>
            </div>
            <ProgressBar color="rose" progress={65} />
          </div>
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">PHP Application</h6>
              <p>90%</p>
            </div>
            <ProgressBar color="green" progress={90} />
          </div>

        </div>
      </div>

      {/* Overview */}
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineFire size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">5+</h2>
            <p className="mt-1">Projects Completed</p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineChartBar size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">6+</h2>
            <p className="mt-1">Months of experience</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
