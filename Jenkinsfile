pipeline {
    agent any
    tools {nodejs "Sample node"}
    stages {
        stage('Clone Git Repo') {
            steps {
                sh 'mkdir -p postman'
                dir("postman")
                {
                    git branch: "master",
                    url: 'https://github.com/sunnyoui/jenkinscicd.git'
                }
                sh 'mkdir -p selenium'
                dir("selenium")
                {
                    git branch: "master",
                    url: 'https://github.com/sunnyoui/jenkinscicd.git'
                }
                sh 'mkdir -p code'
                dir("code")
                {
                    git branch: "master",
                    url: 'https://github.com/sengeezer/udemy-ibc.git'
                }
            }
        }
        stage('Run Unit Test') {
            steps {
                sh 'pwd'
                dir("${env.WORKSPACE}/code/AlgoCasts/completed_exercises/fromlast"){
                    sh "pwd"
                    sh 'npm install -g jest'
                    sh 'ls -al'
                    sh 'jest /var/lib/jenkins/workspace/End_to_End_Pipeline/code/AlgoCasts/completed_exercises/fromlast/test.js'
                }
            }
        }
        stage('Run Selenium Test') {
            steps {
                sh 'pwd'
                dir("${env.WORKSPACE}/selenium"){
                    sh "pwd"
                    sh "npm install --save-dev selenium-webdriver"
                    sh "node ./test.js"
                }
            }
        }
        stage('Run Postman Test') {
            steps {
                sh 'pwd'
                dir("${env.WORKSPACE}/postman"){
                    sh "pwd"
                    sh 'npm install newman'
                    sh 'ls -al'
                    sh 'newman run http-crud-tutorial-api.postman_collection.json'
                }
            }
        }
        stage('deploy') {
            steps {
                sh 'ls -al'
            }
        }
    }
}