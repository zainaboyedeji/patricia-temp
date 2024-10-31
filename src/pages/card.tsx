import Sidebar from "@/components/sidebar";
import Card from "@/components/card";
import CardActivity from "@/components/card-activity";
import CardDetails from "@/components/card-details";
import Image from "next/image";
import WebPageTitle from "@/components/web-page-title";
import router from "next/router";

const CardPage: React.FC = () => {
  return (
    <>
      <WebPageTitle title="Card | Patricia Customer Dashboard" />
      <div className="lg:flex">
        <Sidebar />
        <main className="flex-1 p-6 lg:p-8">
          <div className="border-b flex pb-5">
            <Image
              src="arrow-circle-left.svg"
              width="30"
              height="30"
              alt="Arrow Left"
              onClick={() => router.push("/")}
            />
            <h1 className="text-3xl ml-2 text-[#444854]">Card</h1>
          </div>
          <div className="min-h-screen p-1 lg:p-0">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-3/5 flex flex-col gap-6">
                <Card />
                <CardDetails />
              </div>

              <div className="lg:w-2/5 w-full">
                <CardActivity />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default CardPage;
