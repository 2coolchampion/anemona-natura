import ImageCropTool from "@/components/ImageCropTool";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center bg-red-800 bg-opacity-10">
        <div className="relative w-5/6 h-[563px] ">
          <div className="absolute w-auto h-auto bg-gradient-to-t from-gray-950 to-teal-600 ">
            Content
          </div>
          <Image
            src="/hero-images/v1.png"
            alt="Forest fog"
            width={2912}
            height={1632}
            style={{
              objectFit: "cover",
              // objectPosition: "10px 40px",
              transform: "scaleX(-1)",
              zIndex: -1,
              position: "relative",
            }}
            priority
          ></Image>
        </div>
      </div>
      <div className="bg-red-500 w-[90px] h-[50px]"></div>
      <div>Wroks?</div>
    </>
  );
}
