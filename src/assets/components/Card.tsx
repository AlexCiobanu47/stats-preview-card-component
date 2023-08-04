import bgDesktop from "../images/image-header-desktop.jpg";
import bgMobile from "../images/image-header-mobile.jpg";
const Card = () => {
  return (
    <div className="sm:max-w-3xl mt-20 p-20 sm:p-5 flex flex-col sm:flex-row-reverse">
      <div>
        <img src={bgMobile} alt="" className="w-full rounded-t-lg sm:hidden" />
      </div>
      <div className="w-full rounded-r-lg hidden sm:inline-block ">
        <img src={bgDesktop} alt="" className="w-full h-full rounded-r-lg" />
      </div>
      <div className="bg-DarkDesaturatedBlue text-white rounded-lg px-5">
        <h1 className="font-bold text-3xl p-5 text-center">
          Get <span className="text-SoftViolet">insights</span> that help your
          business grow.
        </h1>
        <h2 className="text-SlightlyTransparentWhite text-md px-5 sm:my-5 text-center">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency
        </h2>
        <ul className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10 sm:mt-10 my-5">
          <li className="flex flex-col items-center justify-center">
            <h3 className="font-bold text-xl">10k+</h3>
            <h4 className="text-SlightlyTransparentWhite">COMPANIES</h4>
          </li>
          <li className="flex flex-col items-center justify-center">
            <h3 className="font-bold text-xl">314</h3>
            <h4 className="text-SlightlyTransparentWhite">TEMPLATES</h4>
          </li>
          <li className="flex flex-col items-center justify-center">
            <h3 className="font-bold text-xl">12M+</h3>
            <h4 className="text-SlightlyTransparentWhite">QUERIES</h4>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
