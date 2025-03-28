# TruView: Blockchain-Powered BIM Platform for Construction

![TruView Logo](./public/favicon.png)

## Overview

TruView is a Next.js-based platform revolutionizing the construction industry by integrating blockchain technology with Building Information Modeling (BIM). This integration enhances transparency, security, and efficiency by ensuring project documentation and models are immutable, traceable, and accessible to authorized stakeholders.  TruView aims to resolve common construction issues like disputes, data integrity problems, and inefficient document management.

## Features

* **Blockchain Integration:** All project documents and BIM models are stored on a blockchain for immutability and traceability.
* **Decentralized Document Management:** Securely manage and access project documents (contracts, designs, revisions) via a decentralized system.
* **Dispute Resolution:** Smart contracts automate and secure dispute resolution, reducing time and cost.
* **Transparency and Audit Trails:** Every transaction and change is logged on the blockchain, providing a complete audit trail.
* **IPFS Integration:** Large BIM models are stored off-chain using IPFS; only the hash is stored on the blockchain, ensuring data integrity and accessibility without blockchain congestion.
* **User-Friendly Interface:**  Built with React and Tailwind CSS for intuitive navigation and interaction.

## Usage

* **Document Uploading:** Authorized users upload project documents and BIM models.  These are stored on IPFS, with the corresponding hash stored on the blockchain.
* **Project Viewing:** Users view project documents and models, track changes, and access the audit trail.
* **Dispute Resolution:**  In disputes, relevant smart contracts are triggered to resolve issues based on predefined rules.


## Installation

### Prerequisites

* Node.js (v22.5.1)
* npm
* Foundry (for smart contract development)
* IPFS (setup for file storage)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/alfarseniko/truView2.0.git
   cd truView2.0
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the application:
   ```bash
   npm run dev
   ```

## Technologies Used

* **Frontend:** Next.js (React framework for building user interfaces), React (JavaScript library for building user interfaces), Tailwind CSS (utility-first CSS framework).
* **Backend:** Node.js (JavaScript runtime environment), Firebase (Backend-as-a-Service platform providing database, authentication, and other services).
* **Smart Contracts:** Solidity (programming language for writing smart contracts), Foundry (development environment for Solidity).
* **File Storage:** IPFS (InterPlanetary File System for decentralized storage of large files).


## Configuration

The project uses a `.eslintrc.json` file for ESLint configuration, extending the `next/core-web-vitals` preset.  Further configuration details can be found within the respective configuration files.  Firebase configuration is handled within `app/firebase.js`.

## Dependencies

The project dependencies are listed in `package.json`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
## Acknowledgments

Special thanks to all contributors and Pakistan Engineering Council for funding this project.

This project was inspired by the need to modernize document management and dispute resolution in the construction industry using cutting-edge technologies like blockchain and BIM.

## Contact

For more information, please visit our [website](https://www.truview.dev).



*README.md was made with [Etchr](https://etchr.dev)*