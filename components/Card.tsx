import Image from "next/image";

interface CardProps {
  title?: string;
  icon?: string;
  info?: string;
}
const Card = (props: CardProps) => {
  return (
    // remove margin later
    <div className="bg-white w-60 h-40 border-2 border-shadowBlue m-auto my-3 shadow-3xl rounded box-border pt-5  pl-7 pb-7">
      <div className="w-12 h-12 flex rounded-full bg-purple opacity-10 justify-center relative">
        <Image
          src="/usersIcon.svg"
          alt=""
          width={22}
          height={22}
          className=""
        />
      </div>
      <p className=" mt-3.5 w-12 h-4 text-sm font-medium leading-4 uppercase text-lightBlue">
        Title
      </p>
      <p className="mt-3 font-semibold text-2xl leading-7 text-darkBlue uppercase w-16 h-7">
        info
      </p>
    </div>
  );
};

export default Card;
