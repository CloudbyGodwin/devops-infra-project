output "vpc_id" {
  value = module.vpc.vpc_id
}

output "public_subnet_id" {
  value = module.vpc.public_subnet_id
}

output "private_subnet_id" {
  value = module.vpc.private_subnet_id
}

output "web_instance_eip" {
  description = "Elastic IP address of the EC2 instance"
  value       = module.ec2.web_instance_eip
}

output "root_web_instance_eip" {
  value = module.ec2.web_instance_eip
}
