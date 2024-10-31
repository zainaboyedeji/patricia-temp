import Sidebar from "@/components/sidebar";
import WalletOverview from "@/components/wallet-overview";
import RecentActivity from "@/components/recent-activity";
import TabComponent from "@/components/tab-component";
import WebPageTitle from "@/components/web-page-title";
import NotificationMenu from "@/components/notification-menu";

const Dashboard: React.FC = () => {
  return (
    <>
      <WebPageTitle title="Wallet | Patricia Customer Dashboard" />
      <div className="lg:flex">
        <Sidebar />
        <main className="flex-1 p-6 lg:p-8">
          <div className="border-b">
            <h1 className="text-3xl mb-2 text-[#444854] font-normal">Wallet</h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <WalletOverview />
              <RecentActivity />
            </div>
            <div className="">
              <div className="hidden lg:block mt-10 mb-10">
                <NotificationMenu />
              </div>
              <TabComponent />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
