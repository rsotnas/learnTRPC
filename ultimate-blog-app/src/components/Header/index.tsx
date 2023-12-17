import React, { useContext } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { BsBell } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { HiLogout } from "react-icons/hi";
import { IoReorderThreeOutline } from "react-icons/io5";
import { GlobalContext } from "../../contexts/GlobalContextProvider";

const Header = () => {
  const { data: sessionData, status } = useSession();
  const { setIsWriteModalOpen } = useContext(GlobalContext);

  return (
    <header className="flex h-20 w-full flex-row items-center justify-around border-b-[1px] border-gray-200 bg-white">
      <div>
        <IoReorderThreeOutline className="text-2xl text-gray-600" />
      </div>
      <div className="text-xl font-thin">Ultimate Blog Post</div>
      {status === "authenticated" ? (
        <div className="flex items-center space-x-4">
          <div>
            <BsBell className="text-2xl text-gray-600" />
          </div>
          <div>
            <div className="h-5 w-5 rounded-full bg-gray-600" />
          </div>
          <div>
            <button
              className="flex items-center space-x-3 rounded border border-gray-200 px-4 py-2 transition hover:border-gray-900 hover:text-gray-900"
              onClick={() => {
                setIsWriteModalOpen(true);
              }}
            >
              <div>Write</div>
              <div>
                <FiEdit />
              </div>
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                signOut();
              }}
              className="flex items-center space-x-3 rounded border border-gray-200 px-4 py-2 transition hover:border-gray-900 hover:text-gray-900"
            >
              <div>Logout</div>
              <div>
                <HiLogout />
              </div>
            </button>
          </div>
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              signIn();
            }}
            className="flex items-center space-x-3 rounded border border-gray-200 px-4 py-2 transition hover:border-gray-900 hover:text-gray-900"
          >
            SignIn
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
