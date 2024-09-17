import Sidebar from "@/components/sidebar";
import WalletOverview from "@/components/wallet-overview";
import RecentActivity from "@/components/recent-activity";
import TabComponent from "@/components/tab-component";
import Image from "next/image";

const Dashboard: React.FC = () => {
  return (
    <div className="lg:flex">
      <Sidebar />
      <main className="flex-1 p-6 lg:p-8 bg-gray-100">
        <h1 className="text-3xl mb-6 text-secondaryColor mt-4">Wallet</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <WalletOverview />
            <RecentActivity />
          </div>
          <div>
            <div className="flex justify-end">
              <div className="flex justify-end bg-white p-2 w-[30%] rounded-lg">
                <Image
                  src="/notification.svg"
                  alt="Notification"
                  width={30}
                  height={30}
                  className="mr-2"
                />
                <Image
                  src="/girl.svg"
                  alt="Girl"
                  width={30}
                  height={30}
                  className="mr-2"
                />
                <Image
                  src="/ellipsis.svg"
                  alt="Ellipsis"
                  width={5}
                  height={5}
                />
              </div>
            </div>
            <TabComponent />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
