resource "aws_security_group" "ec2_sg" {
  name        = "${var.project_prefix}-ec2-sg"
  description = "Allow SSH access"
  vpc_id      = var.vpc_id

  ingress {
    description = "Allow SSH from my IP"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = [var.my_ip]
  }

  egress {
    description = "Allow all outbound"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "${var.project_prefix}-ec2-sg"
  }
}

resource "aws_instance" "web" {
  ami                    = var.ami_id
  instance_type          = var.instance_type
  subnet_id              = var.subnet_id
  key_name               = "devops-key" 
  vpc_security_group_ids = [aws_security_group.ec2_sg.id]

  tags = {
    Name = "${var.project_prefix}-ec2-instance"
  }
}

# Allocate Elastic IP
resource "aws_eip" "web_eip" {
  instance = aws_instance.web.id
  domain      = "vpc"

  tags = merge(local.common_tags, {
    Name = "web-eip"
  })
}



