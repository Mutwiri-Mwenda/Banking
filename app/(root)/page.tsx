import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';



function Home() {
  const loggedIn = {firstName: 'Mutwiri', lastName: 'Mwenda', email: 'mutwirimwenda@gmail.com'};

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type = "greeting"
            title = "Hello"
            user = {loggedIn?.firstName || 'Guest'}
            subtext = "Manage your fanances with ease"
           />
           <TotalBalanceBox 
           accounts = {[]}
           totalBanks = {1}
           totalCurrentBalance = {20355001.02}
           />
        </header>

      </div>
      <RightSideBar 
      user = {loggedIn}
      transactions ={[]} 
      banks = {[{currentBalance: 123.50}, { currentBalance: 500.32}]}
      />
    </section>
  )
}

export default Home
