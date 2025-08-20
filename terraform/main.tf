module "vpc" {
  source = "./modules/vpc"

  region             = var.region
  vpc_cidr           = var.vpc_cidr
  public_subnet_cidr = var.public_subnet_cidr
  private_subnet_cidr = var.private_subnet_cidr
  project_prefix     = var.project_prefix
}



# Detect your current public IP
data "http" "my_ip" {
  url = "https://checkip.amazonaws.com"
}

# Convert it to CIDR notation (/32)
locals {
  my_ip_cidr = "${trimspace(data.http.my_ip.response_body)}/32"
}

module "ec2" {
  source          = "./modules/ec2"

  ami_id          = data.aws_ami.ubuntu.id       # Or a specific AMI ID string
  instance_type   = var.instance_type
  subnet_id       = module.vpc.public_subnet_id
  vpc_id          = module.vpc.vpc_id
  key_name        = var.key_name
  my_ip           = local.my_ip_cidr             # Now auto-detected
  project_prefix  = var.project_prefix
}



# Lookup the latest Ubuntu AMI ID in your region
data "aws_ami" "ubuntu" {
  most_recent = true
  owners      = ["099720109477"] # Canonical (Ubuntu)

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
}


module "s3" {
  source         = "./modules/s3"
  project_prefix = var.project_prefix
}
