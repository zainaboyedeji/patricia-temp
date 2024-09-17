import Sidebar from '@/components/sidebar';
import WalletOverview from '@/components/wallet-overview';
import RecentActivity from '@/components/recent-activity';
import DepositMethods from '@/components/deposit-method';

const Dashboard: React.FC = () => {
  return (
    <div className="lg:flex">
      <Sidebar />
      <main className="flex-1 p-6 lg:p-8 bg-gray-100">
        <h1 className="text-3xl mb-6 text-secondaryColor mt-10">Wallet</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <WalletOverview />
            <RecentActivity />
          </div>
          <DepositMethods />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
