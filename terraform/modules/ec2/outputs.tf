output "web_instance_eip" {
  description = "Elastic IP address of the EC2 instance"
  value       = aws_eip.web_eip.public_ip
}
