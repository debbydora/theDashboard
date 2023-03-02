import Image from "next/image";

const InfoCard = () => {
  return (
    //remove margin later
    <div className="max-w-5xl h-52 border-2 border-shadowBlue mx-auto mt-3">
      <div className="flex">
        <div>
          <Image width={100} height={100} src="/avatar.svg" alt="info icon" />
        </div>
        <div>
          <p>Grace Effiom</p>
          <p>Id</p>
        </div>
        <img src="../../Line 1.svg" alt="info icon" />
        <div>
          <p>Grace Effiom</p>
          <p>Id</p>
        </div>
        <img src="../../Line 1.svg" alt="info icon" />
      </div>
      <div>Footer</div>
    </div>
  );
};

export default InfoCard;
