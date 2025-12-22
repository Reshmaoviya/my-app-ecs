provider "aws" {
  region = "us-east-2"
}

resource "aws_ecs_cluster" "ecs_cluster" {
  name = "my-ecs-cluster"
}

resource "aws_ecr_repository" "ecr_repo" {
  name = "my-app-repo"
}
