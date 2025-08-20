variable "vpc_id" {
  description = "ID of the VPC"
  type        = string
}

variable "subnet_id" {
  description = "ID of the public subnet to launch EC2 into"
  type        = string
}

variable "ami_id" {
  description = "AMI ID for the EC2 instance (e.g., Ubuntu)"
  type        = string
}

variable "instance_type" {
  description = "EC2 instance type (e.g., t2.micro)"
  type        = string
}

variable "project_prefix" {
  description = "Prefix for naming EC2 resources"
  type        = string
}

variable "key_name" {
  description = "EC2 key pair name"
  default     = "devops-key"
}

variable "my_ip" {
  description = "Your public IP in CIDR notation (e.g., 1.2.3.4/32)"
  type        = string
}

