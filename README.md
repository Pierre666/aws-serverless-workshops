![Serverless Workshop](images/logo.png)

# Serverless Workshop 🇨🇱

This repository contains a collection of workshops and other hands on content that will guide you through building various serverless applications using Amazon S3, AWS Lambda, Amazon API Gateway, Amazon DynamoDB, Amazon Cognito and others.

If you're new to serverless, please refer to [Serverless Computing on AWS](https://aws.amazon.com/serverless/) to learn more before jumping in on hands-on labs.

# Hands-on Labs

1. [**Web Application**](WebApplication) - This hands-on labs collection shows you how to build a dynamic, serverless web application. You'll learn how to host static web resources with Amazon S3, how to use Amazon Cognito to manage users and authentication, and how to build a RESTful API for backend processing using Amazon API Gateway, AWS Lambda and Amazon DynamoDB.

Start with [Static Web Site Hosting basics](WebApplication/1_StaticWebHosting) first;

Later you'll have enough time to complete the subsequent labs and [add user management](WebApplication/2_UserManagement), [fulfill backend requests with Lambda](WebApplication/3_ServerlessBackend), [produce a RESTful API using API Gateway](WebApplication/4_RESTfulAPIs) -- and _optionally_ [enable OAuth-based authentication](WebApplication/5_OAuth).

- [**Image Processing**](ImageProcessing) - This module shows you how to build a serverless image processing application using workflow orchestration in the backend. You'll learn the basics of using AWS Step Functions to orchestrate multiple AWS Lambda functions while leveraging the deep learning-based facial recognition features of Amazon Rekogntion.

- [**DevOps**](DevOps) - This workshop shows you how to use the [Serverless Application Model (SAM)](https://github.com/awslabs/serverless-application-model) to build a serverless application using Amazon API Gateway, AWS Lambda, and Amazon DynamoDB. You'll learn how to use SAM from your workstation to release updates to your application, how to build a CI/CD pipeline for your serverless application using AWS CodePipeline and AWS CodeBuild, and how to enhance your pipeline to manage multiple environments for your application.

# Feedback needed

Please be sure to [add your feedback](Workshop-Feedback.md) as a [pull request to this repository](https://github.com/gjmveloso/aws-serverless-workshops/pull/new/chile-workshop).

# Credits

This workshop is part of [Wild Rydes](http://wildrydes.com/) Workshop initiative. You can follow the upstream repo at https://github.com/aws-samples/aws-serverless-workshops to learn more.

## NeverStopBuilding