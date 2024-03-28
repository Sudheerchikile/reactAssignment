import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import './index.css';

const MetamaskComponent = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [connButtonText, setConnButtonText] = useState('Connect Wallet');

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask) {
      const web3 = new Web3(window.ethereum);
      web3.eth.getAccounts().then(accounts => {
        if (accounts.length > 0) {
          accountChangedHandler(accounts[0]);
          setConnButtonText('Wallet Connected');
         
        }
      }).catch(error => {
        setErrorMessage(error.message);
      });
    } else {
      setErrorMessage('Please install MetaMask browser extension to interact');
    }

    return () => {
      if (typeof window.ethereum !== 'undefined') {
        window.ethereum.off('accountsChanged', accountChangedHandler);
        window.ethereum.off('chainChanged', chainChangedHandler);
      }
    };
  }, []);

  const connectWalletHandler = () => {
    if (typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask) {
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(result => {
          accountChangedHandler(result[0]);
          setConnButtonText('Wallet Connected');
          setErrorMessage(null);
        })
        .catch(error => {
          setErrorMessage(error.message);
        });
    } else {
      setErrorMessage('Please install MetaMask browser extension to interact');
    }
  };

  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
  };

  const chainChangedHandler = () => {
    window.location.reload();
  };

  if (!window.ethereum) {
    return <div>MetaMask is not installed or not available</div>;
  }

  return (
    <div className='walletCard'>
      <h4>Connection to MetaMask using web3</h4>
      <button onClick={connectWalletHandler} className='wallet-button'>{connButtonText}</button>
      <div className='accountDisplay'>
        <h3>Address: {defaultAccount}</h3>
      </div>
      {errorMessage && <div className='errorMessage'>{errorMessage}</div>}
    </div>
  );
};

export default MetamaskComponent;
