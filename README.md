# RecurrPay: Automated Recurring Payments on Fuel Network

## Overview
RecurrPay is a decentralized platform built on the Fuel Network, enabling users and organizations to automate various types of payments, including recurring and one-time transactions. The platform facilitates seamless payroll distribution, contract payments, and other automated transactions using smart contracts on the Fuel blockchain.

## Key Features
1. **User and Organization Accounts**: 
   - Both users and organizations can create accounts.
   - Organizations can invite users to their network.

2. **Automated Payments**: 
   - Organizations can set up recurring or one-time payments, executed via cron jobs.

3. **Payroll Management**: 
   - Facilitates automatic payroll distributions over Fuel each month without manual intervention.

4. **Fuel Integration**: 
   - Payments are handled using the Fuel TS SDK with a sway smartcontracts.

5. **Balance Management**: 
   - Organizations must maintain sufficient funds to ensure recurring payments are successful.

6. **Detailed Transaction History**: 
   - Users can track the status of payments, including pending, processing, paid, and failed transactions.

## Problem Solved
1. **Manual Payment Processes**: Reduces inefficiencies by automating payment processing.
2. **Complex Automation**: Simplifies setting up recurring payments.
3. **User Data Control**: Users manage their own KYC details without organizational oversight.
4. **Simplified KYC Management**: Users don't need to provide KYC details for every service; instead, they manage it through the platform.

## Solutions Provided
- **Efficiency**: Automates payment processes, minimizing manual effort and errors.
- **Cost-Effectiveness**: Leverages Fuel low transaction fees for affordable payment management.
- **Automation**: Enables recurring payments and ensures timely execution.

## Target Audience
- **Organizations**: Businesses needing to manage payroll, subscriptions, or recurring payments.
- **Individuals**: Users automating regular payments like bills, subscriptions, or personal transfers.
- **Fund Distributors**: Entities requiring regular fund disbursements (e.g., FUEL Accelerator Program, Web3 communities,Hackathon Prizes).

## Stellar Integration Details
- **Fuel TS SDK**: Handles smart contract creation along with its deployment and also integrating smart contract.
- **Cron Jobs**: Automates recurring payments using scheduled tasks.
- **Security**: A robust backend ensures secure and authorized access to funds.

## Why Fuel?
- **Low Transaction Fees**: Fuel Network offers extremely low transaction fees, making it an ideal platform for businesses processing large volumes of transactions, such as payroll or subscription payments.
- **Speed**:  Fuel’s blockchain infrastructure supports fast, near-instant transactions.
- **Scalability**: Fuel’s high throughput makes it suitable for organizations of all sizes.
- **Interoperability**: Fuel Network’s flexible design allows it to integrate with other blockchain networks and support multiple assets, enabling global businesses to manage payments in various currencies.

## Impact on Fuel Network

RecurrPay aims to onboard businesses and organizations to the Stellar ecosystem, driving Web3 adoption beyond personal use and into mainstream business applications. By targeting the $3,073bn US digital payments market, RecurrPay will help expand Stellar's reach into enterprise-level payment systems.

## Technical Architecture
- **Frontend**: Built using Fuel's TS SDK.
- **Backend**: Developed with Nest.js.
- **Contracts**: Sway Smart contracts.


## License
This project is licensed under the [MIT License](LICENSE).
