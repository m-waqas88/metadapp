import React from 'react';
import './App.css';
import { useEtherBalance, useEthers } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';

function App() {


  const { activateBrowserWallet, deactivate, account } = useEthers();
  const etherBalance = useEtherBalance(account);

  return (
    <div className="App">
      <header className="App-header">
      <h1>MetaDapp</h1>
      <h4>Developed By: Waqas Yousuf</h4>
        {
          !account && <p>Please connect your wallet to see your wallet address and balance.</p>
        }
        {
          account && `Account: ${account}`
        }
        <br />
        {
          etherBalance && `Balance: ${Number(formatEther(etherBalance)).toFixed(4)} ETH`
        }
        
        <p className="App-link">
          {
            account ? <code onClick={deactivate}>Logout</code> : <code onClick={()=>activateBrowserWallet()}>Connect Wallet</code>
          }
        </p>
      </header>
    </div>
  );
}

export default App;
