![Serverless Workshop](images/logo.png)

# Serverless Workshop 🇨🇱

This repository contains a collection of workshops and other hands on content that will guide you through building various serverless applications using Amazon S3, AWS Lambda, Amazon API Gateway, Amazon DynamoDB, Amazon Cognito and others.

If you're new to serverless, please refer to [Serverless Computing on AWS](https://aws.amazon.com/serverless/) to learn more before jumping in on hands-on labs.

## Warm-up

To get hands dirty, we'll need to make sure to have all the environment tooling required for theses hands-labs are installed on your computer.

> This workshop assumes you're using your local computer to walk-through the hands-on labs. If you prefer you can [spin up your own IDE in the cloud, using AWS Cloud9](DevOps/0_Cloud9). And **skip this warm-up section**.

1. Install [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/installing.html)

    - [macOS Instructions](https://docs.aws.amazon.com/cli/latest/userguide/cli-install-macos.html)
    - [Linux Instructions](https://docs.aws.amazon.com/cli/latest/userguide/awscli-install-linux-python.html)
    - [Windows Instructions](https://docs.aws.amazon.com/cli/latest/userguide/awscli-install-windows.html)

2. Configure a new profile on [AWS CLI](https://docs.aws.amazon.com/cli/latest/reference/)

    > As we're using a **temporary** account for this workshop we'll need to add a new profile instead of your default profile, while working with [AWS CLI](https://docs.aws.amazon.com/cli/latest/reference/).

    <details>
    <summary><strong>IAM Access Keys detailed creation for awsstudent</strong></summary>
    <p>

    - Under your [Console Home](https://console.aws.amazon.com/console/home), find IAM:

    ![Find IAM](images/find-iam.png)

    - Get into `Users`:

    ![IAM Users Details](images/users-details.png)

    - Find `awsstudent` user as it's the default user used by [Qwiklabs platform](https://aws.qwiklabs.com) we'll be using during the workshop.

    ![awsstudent IAM credentials](images/awsstudent-credentials.png)

    - Generate a new 'Access Key' to be used by [AWS CLI](https://docs.aws.amazon.com/cli/latest/reference/):

    ![Create Access Key](images/generate-key.png)

    ![Generate new Access Key](images/iam-new-access-key.png)
    
    </p>
    </details>

3. With [AWS CLI](https://docs.aws.amazon.com/cli/latest/reference/) installed, open your terminal of choice and type `aws configure --profile {a new profile name besides default}`

    ![AWS CLI Profile creation](images/cli-configure.png)

4. Add the Access Key generated from IAM. This would be something like `AKIAJ72VFA7DKQ462Y6Q`, for example.

5. Add your Secret Key -- if you don't have your Secret Key previously downloaded, you'll need to generate another Access Key. Please refer to **IAM Access Keys detailed creation for awsstudent** section above.

6. Check if you can perform an action like list all S3 buckets on this recently added profile. Type:

    `aws s3 ls --profile {your-profile-name}`

    You should see a response like the following:

    `2018-08-15 09:23:30 qltrail-lab-2456-1534335809`

7. Install [AWS SAM CLI](https://github.com/awslabs/aws-sam-cli) for a local [Lambda](https://aws.amazon.com/lambda/getting-started/) runtime experience while coding.

    - AWS SAM CLI runs on top of [Docker](https://docker.com). The easiest way to get Docker installed is by downloading their official bundles:

        - [macOS Instructions](https://store.docker.com/editions/community/docker-ce-desktop-mac)
        - [Linux Instructions](https://store.docker.com/search?offering=community&operating_system=linux&type=edition)
        - [Windows Instructions](https://store.docker.com/editions/community/docker-ce-desktop-windows)

    - Install `sam` directly from [PyPI](https://pypi.org):
    
        `pip install --user aws-sam-cli`

        > Refer to the [complete installation guide if needed](https://github.com/awslabs/aws-sam-cli/blob/develop/docs/installation.rst)

### Congrats! You're ready to take an 🦄 ride now 🚀

## Hands-on Labs

1. [**Web Application**](WebApplication) - This hands-on labs collection shows you how to build a dynamic, serverless web application. You'll learn how to host static web resources with Amazon S3, how to use Amazon Cognito to manage users and authentication, and how to build a RESTful API for backend processing using Amazon API Gateway, AWS Lambda and Amazon DynamoDB.

    - Start with [Static Web Site Hosting basics](WebApplication/1_StaticWebHosting) first;

    - Later you'll have enough time to complete the subsequent labs and [add user management](WebApplication/2_UserManagement), [fulfill backend requests with Lambda](WebApplication/3_ServerlessBackend), [produce a RESTful API using API Gateway](WebApplication/4_RESTfulAPIs) -- and _optionally_ [enable OAuth-based authentication](WebApplication/5_OAuth).

2. [**Image Processing**](ImageProcessing) - This module shows you how to build a serverless image processing application using workflow orchestration in the backend. You'll learn the basics of using AWS Step Functions to orchestrate multiple AWS Lambda functions while leveraging the deep learning-based facial recognition features of Amazon Rekogntion.

3. [**DevOps**](DevOps) - This workshop shows you how to use the [Serverless Application Model (SAM)](https://github.com/awslabs/serverless-application-model) to build a serverless application using Amazon API Gateway, AWS Lambda, and Amazon DynamoDB. You'll learn how to use SAM from your workstation to release updates to your application, how to build a CI/CD pipeline for your serverless application using AWS CodePipeline and AWS CodeBuild, and how to enhance your pipeline to manage multiple environments for your application.

## Feedback always welcome

Please be sure to [add your feedback](Workshop-Feedback.md) as a [pull request to this repository](https://github.com/gjmveloso/aws-serverless-workshops/compare/chile-workshop...gjmveloso:chile-workshop).

## Credits

This workshop is part of [Wild Rydes](http://wildrydes.com/) Workshop initiative. You can follow the upstream repo at https://github.com/aws-samples/aws-serverless-workshops to learn more.