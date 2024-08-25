# TruView

![TruView Logo](./public/favicon.png)

## Overview

**TruView** is an innovative platform built on the Next.js framework that leverages blockchain technology to revolutionize the construction industry by integrating with Building Information Modeling (BIM). This integration enhances transparency, security, and efficiency in construction projects by ensuring that all project documentation and models are immutable, traceable, and accessible to authorized stakeholders. The platform aims to resolve common issues like disputes, data integrity, and document management, making construction processes smoother and more reliable.

## Key Features

- **Blockchain Integration**: All project documents and BIM models are stored on the blockchain, ensuring immutability and traceability.
- **Decentralized Document Management**: Securely manage and access project documents, including contracts, designs, and revisions, through a decentralized system.
- **Dispute Resolution**: Utilize smart contracts to automate and secure dispute resolution processes, reducing the time and cost associated with traditional methods.
- **Transparency and Audit Trails**: Every transaction and change is logged on the blockchain, providing a transparent and auditable trail of activities.
- **InterPlanetary File System (IPFS)**: Large BIM models are stored off-chain in IPFS, with only the hash stored on the blockchain, ensuring data integrity and accessibility without burdening the blockchain.
- **User-Friendly Interface**: Built with React and Tailwind CSS, the platform offers an intuitive interface for easy navigation and interaction.

## Technology Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Node.js, Firebase
- **Smart Contracts**: Solidity, Foundry
- **File Storage**: IPFS

## Getting Started

### Prerequisites

- **Node.js** (v22.5.1)
- **npm**
- **Foundry** for smart contract development
- **IPFS** setup for file storage

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/alfarseniko/truView2.0.git
   cd truView2.0
   ```
2. **Install dependencies:**:
   ```bash
    npm install
   ```
3. **Run the application on local host:**:
   ```bash
    npm run dev
   ```

### Usage

- **Uploading Documents**: Authorized users can upload project documents and BIM models, which are then stored securely on the IPFS with the corresponding hash stored on the blockchain.
- **Viewing Projects**: Users can view all the documents and models associated with a project, track changes, and view the audit trail.
- **Dispute Resolution**: In the case of a dispute, the relevant smart contract can be triggered to resolve the issue according to predefined rules.

## License

This project is licensed under the MIT License.
## Acknowledgments

Special thanks to all contributors and Pakistan Engineering Council for funding this project.

This project was inspired by the need to modernize document management and dispute resolution in the construction industry using cutting-edge technologies like blockchain and BIM.

## Contact

For more information, please visit our [website](https://www.truview.dev).

