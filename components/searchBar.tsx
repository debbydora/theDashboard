import Image from "next/image";

const SearchBar = () => {
  return (
    <>
      <div className="flex justify-center -mt-2">
        <div className="mb-3 xl:w-96">
          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <input
              type="search"
              className="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-darkBlue bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
              placeholder="Search"
            />
            <button
              className="relative z-[2] flex items-center rounded-r bg-blue px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg"
              type="button"
            >
              <Image src="/search.svg" alt="search" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;

//  <div className="max-w-screen-2xl h-24 flex justify-between p-6 z-20 lg:p-9 border-2 border-red-700">
//       <div className="-mt-1 lg:-mt-6">
//         <Image width={150} height={10} src="/logo4.png" alt="" />
//       </div>
//       <SearchBar />
//       <div className="flex justify-between">
//         <p className="mr-6">docs</p>
//         <div className="mr-6 w-8 border-2 border-blue-700">
//           <Image width={20} height={20} src="bell.svg" alt="" />
//         </div>

//         <div className="mr-4 -mt-2">
//           <Image

//            width={40}
//             height={10}
//             src="image 4.svg"
//             alt=""
//             className="rounded-full"
//           />
//         </div>

//         <p>name of places</p>
//       </div>
//     </div>