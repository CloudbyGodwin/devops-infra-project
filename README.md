# Lydia's Daycare - AWS Static Site Deployment

This project automates the deployment of the "Lydia's Daycare" static React web application to AWS. It uses a combination of Terraform for infrastructure provisioning and Ansible for server configuration, demonstrating a complete Infrastructure as Code (IaC) and Configuration Management workflow.

## Architecture

The deployment process follows these steps:

1.  **Infrastructure Provisioning (Terraform)**: A developer runs Terraform, which creates the necessary cloud infrastructure in AWS:
    *   A **Virtual Private Cloud (VPC)** to provide a secure and isolated network. The VPC is built with both a **public subnet** for internet-facing resources (like our web server) and a **private subnet** for backend resources, following best practices.
    *   An **EC2 Instance** (a virtual server) running Ubuntu. An **Elastic IP (EIP)** is attached to this instance to ensure it has a permanent, static public IP address that does not change if the server is rebooted.
    *   An **S3 Bucket** to store the static website files (HTML, CSS, JS, images).
    *   Terraform automatically uploads the contents of the React application's `build` directory to this S3 bucket.

2.  **Configuration Management (Ansible)**: After the infrastructure is created, Ansible is used to configure the EC2 instance:
    *   The server's public IP address (an output from Terraform) is added to the Ansible **inventory** file.
    *   An Ansible **playbook** is run against the server.
    *   The playbook uses an `nginx` **role** to install, configure, and start the Nginx web server.
    *   Nginx is configured to serve the website files, making the application accessible to the world.

3.  **Result**: The Lydia's Daycare website is served by Nginx running on the EC2 instance, publicly accessible via its static Elastic IP address.

## Technical Highlights

*   **Dynamic Local IP Detection**: The Terraform configuration automatically detects the public IP address of the person running the script. It then creates a security group (firewall) rule that only allows SSH access from that specific IP, enhancing security.
*   **Modular Infrastructure**: The Terraform code is broken into reusable modules (`vpc`, `ec2`, `s3`), making the infrastructure code clean, organized, and easy to maintain.

## Project Structure

```
.
├── ansible/         # Ansible configuration
│   ├── inventory/   # List of servers for Ansible to manage
│   └── roles/       # Reusable Ansible roles (e.g., nginx)
├── app/             # React application source code
│   └── lydias-daycare/
├── terraform/       # Terraform infrastructure code
│   ├── modules/     # Reusable Terraform modules (vpc, ec2, s3)
│   └── main.tf      # Main Terraform configuration
└── README.md        # This file
```

## Prerequisites

Before you begin, ensure you have the following tools installed:
*   AWS CLI (configured with your credentials)
*   Terraform
*   Ansible
*   Node.js & npm

## Step-by-Step Deployment

### 1. Build the React Application
First, you need to create the static files for the website.

```bash
# Navigate to the app directory
cd app/lydias-daycare

# Install dependencies
npm install

# Build the static files (output goes to the 'build' directory)
npm run build

# Return to the project root
cd ../..
```

### 2. Deploy Infrastructure with Terraform
This step creates all the necessary AWS resources.

```bash
# Navigate to the terraform directory
cd terraform

# Initialize Terraform
terraform init

# (Optional) See what Terraform will create
terraform plan

# Apply the configuration to create the infrastructure
terraform apply
```
After the command completes, Terraform will output the public IP address of the EC2 instance (`web_instance_eip`). **Copy this IP address.**

### 3. Configure Ansible
Add the server's IP address to the Ansible inventory.

1.  Open the file `ansible/inventory/hosts`.
2.  Replace the placeholder IP address with the one you copied from the Terraform output.
3.  Ensure the path to your SSH private key (`ansible_ssh_private_key_file`) is correct.

### 4. Provision the Server with Ansible
This step runs the Ansible playbook to install and configure Nginx on the server.

```bash
# From the project root directory
ansible-playbook -i ansible/inventory/hosts ansible/playbooks/main.yml
```
*(Note: The `main.yml` playbook and the `nginx` role tasks need to be created for this step to be functional.)*

### 5. Access Your Application
Open your web browser and navigate to the public IP address of your EC2 instance: `http://<your-ec2-ip-address>`

## Cleanup

To avoid ongoing AWS charges, you can destroy all the infrastructure created by Terraform with a single command.

```bash
# Navigate to the terraform directory
cd terraform

# Destroy all resources
terraform destroy
```
