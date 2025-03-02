import { FaGithub, FaTwitter, FaFacebook, FaEnvelope } from "react-icons/fa";

const ProfileCard = () => {
  return (
    <div className="flex flex-col md:items-center gap-3 bg-white md:p-6 p-5 rounded-lg shadow-md shadow-zinc-400">
      <div className="flex flex-col items-center md:flex md:flex-row md:gap-6">
        <img
          src="./felipe.png"
          alt="profile picture"
          className="md:hover:opacity-80 md:size-32 size-24 rounded-full object-cover hover:cursor-pointer transform transition-transform duration-300 hover:scale-102 md:hover:scale-108 hover:z-50 md:hover:shadow-xl hover:shadow-lg origin-bottom"
        />
        <div className="flex flex-col relative">
          <div className="flex flex-col text-center md:text-left">
            <h2 className="text-black font-bold md:text-xl text-lg mt-2 leading-6 max-w-35 text-center md:text-left ">
              Felipe Fioravanti
            </h2>
            <p className="text-gray-500 text-xs">Software Developer</p>
            <div className="flex md:flex-row gap-1.5 mt-1 justify-center md:justify-start">
              <a
                href="https://github.com/ffioravanti"
                className="text-lg hover:text-gray-600"
              >
                <FaGithub />
              </a>
              <a
                href="https://github.com/ffioravanti"
                className="text-lg hover:text-blue-500"
              >
                <FaTwitter />
              </a>
              <a
                href="https://github.com/ffioravanti"
                className="text-lg hover:text-blue-600"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
          <div
            className="z-50 md:top-0 md:left-0 absolute bottom-22 left-22 md:relative
          inline-flex self-start items-center md:hover:opacity-80 rounded-sm bg-purple-600 mt-2 p-1.5 md:px-3 md:py-1 font-semibold text-sm cursor-pointer transition-all md:gap-2"
          >
            <FaEnvelope className="text-md" />
            <p className="hidden md:flex">Mensagem</p>
          </div>
        </div>
      </div>
      <hr className="md:w-3xs" aria-orientation="vertical" />
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        <div className="flex flex-col items-center group">
          <h3 className="font-bold text-lg text-purple-600 transition-transform duration-200 group-hover:scale-110 cursor-pointer">
            45
          </h3>
          <p className="text-gray-500 text-xs transition-all duration-200 cursor-pointer group-hover:underline">
            projetos
          </p>
        </div>
        <div className="flex flex-col items-center group">
          <h3 className="font-bold text-lg text-purple-600 transition-transform duration-200 group-hover:scale-110 cursor-pointer">
            6
          </h3>
          <p className="text-gray-500 text-xs transition-all duration-200 cursor-pointer group-hover:underline">
            palestras
          </p>
        </div>
        <div className="flex flex-col items-center group">
          <h3 className="font-bold text-lg text-purple-600 transition-transform duration-200 group-hover:scale-110 cursor-pointer">
            15
          </h3>
          <p className="text-gray-500 text-xs transition-all duration-200 cursor-pointer group-hover:underline">
            artigos
          </p>
        </div>
        <div className="flex flex-col items-center group">
          <h3 className="font-bold text-lg text-purple-600 transition-transform duration-200 group-hover:scale-110 cursor-pointer">
            12k
          </h3>
          <p className="text-gray-500 text-xs transition-all duration-200 cursor-pointer group-hover:underline">
            seguidores
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
