import Link from "next/link";
import Image from "next/image";
import Container from "../Container";
import lazyCat from "../../../../public/img/lazyCat.jpg";
interface HeroProps {
    data: {
        title: string;
        description: string;
        cta_button_txt: string;
        picture: {
            filename: string;
        }
    };
}
const Hero = ({data}:HeroProps) => {
    const { title, description, cta_button_txt, picture } = data;
  return (
    <>
      <Container className="flex flex-wrap pt-28 pb-18">
        <div className="flex items-center w-full lg:w-1/2 lg:px-10">
          <div className="max-w-2xl mb-8 pr-3">
            <h1 className="text-4xl font-bold leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight text-white">
              {title}
            </h1>
            <p className="py-5 text-xl leading-normal lg:text-xl xl:text-2xl text-gray-300">
              {description}
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href="#contact"
                className="px-7 py-3 text-white text-xl bg-indigo-600 rounded-md"
              >
                {cta_button_txt}
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <Image
            src={picture.filename}
            width="500"
            height="500"
            className={"object-cover rounded-full hidden lg:inline"}
            alt="lanlan"
            loading="eager"
          />
        </div>
      </Container>
    </>
  );
};

export default Hero;
