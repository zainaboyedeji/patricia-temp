import Sidebar from "@/components/sidebar";
import Card from "@/components/card";
import CardActivity from "@/components/card-activity";
import CardDetails from "@/components/card-details";
import WebPageTitle from "@/components/web-page-title";

const CardPage: React.FC = () => {
  return (
    <>
      <WebPageTitle title="Card | Patricia Customer Dashboard" />
      <div className="lg:flex">
        <Sidebar />
        <main className="flex-1 p-6 lg:p-8 bg-white">
          <div className="border-b">
            <h1 className="text-3xl mb-6 text-[#9DA8B6] mt-4">Card</h1>
          </div>
          <div className="min-h-screen p-6">
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
