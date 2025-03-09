import Header from "../components/UI/Header";
import redbullLogo from "../img/RedBullRacing.svg";

export default function PageNotFound() {
  return (
    <main className="bg-gray-300 max-w-[1200px] min-h-[400px] mx-auto ">
      <Header />
      <section className="flex flex-col items-center">
        <div className="flex flex-col items-center my-10 border-2 border-gray-500 rounded-[10%] max-w-[600px] px-10 pb-10">
          <p className="mt-10 text-2xl font-semibold">404 Page Not Found</p>
          <p className="mt-10 text-lg ">
            This is not the page you're looking for.
          </p>
          <img
            src={redbullLogo}
            className="mt-8 max-h-[100px] max-w-[350px]"
            alt="Red Bull Racing"
          />
        </div>
      </section>
    </main>
  );
}
