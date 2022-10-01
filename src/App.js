import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Manifesto from './components/Manifesto/Manifesto';
import Team from './components/Team/Team';
import GangHouse from './components/GangHouse/GangHouse';
import Staking from './components/Staking/Staking';
import Utility from './components/Utility/Utility';
import TraitMarket from './components/TraitMarket/TraitMarket';
import TraitMarketInner from './components/TraitMarketInner/TraitMarketInner';

import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import {WalletModalProvider} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css');

function App() {
  useEffect(() => {
    document.title = "Degen Gang";
  })

  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Mainnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
      () => [
          /**
           * Select the wallets you wish to support, by instantiating wallet adapters here.
           *
           * Common adapters can be found in the npm package `@solana/wallet-adapter-wallets`.
           * That package supports tree shaking and lazy loading -- only the wallets you import
           * will be compiled into your application, and only the dependencies of wallets that
           * your users connect to will be loaded.
           */
          new PhantomWalletAdapter()
      ],
      []
  );

  return (
      <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
              <WalletModalProvider>
                  <div>
                    <Router>
                      {!window.location.href.includes('/art_upgrade') ? <Header/> : null}
                      <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/manifesto' element={<Manifesto/>} />
                        <Route path='/team' element={<Team/>} />
                        <Route path='/utility' element={<Utility/>} />
                        <Route path='/traitmarket' element={<TraitMarket/>} />
                        <Route path='/art_upgrade' element={<TraitMarketInner/>} />
                        <Route path='/staking' element={<Staking/>} />
                        <Route path='/ganghouse' element={<GangHouse/>} />
                      </Routes>
                      {!window.location.href.includes('/art_upgrade') ? <Footer /> : null}
                      
                    </Router>
                  </div>
              </WalletModalProvider>
          </WalletProvider>
      </ConnectionProvider>
  );
}

export default App;

