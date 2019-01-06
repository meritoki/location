pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'JENKINS_NODE_COOKIE=dontKillMe node index.js &'
      }
    }
    stage('Test') {
      steps {
        sh 'sudo npm install newman -g'
        sh 'newman run ./postman/daily-bread-location-service.postman_collection.json --reporters cli,junit --reporter-junit-export newman.xml --insecure'
      }
    }
    stage('Deploy') {
      steps {
        sh 'mkdir -p /home/jorodriguez/meritoki/dailybread/'
        sh 'rm -rf location'
	sh 'git clone https://github.com/meritoki/location.git'
        sh 'cd location'
	sh 'git remote update'
        sh 'git fetch'
        sh 'git branch -a'
        sh 'git status'
        sh 'docker build -t dailybread/location-service .'
        sh 'sudo docker run --network host -dlt --restart unless-stopped -p 3000:3000 dailybread/location-service'
      }
    }
  }
  triggers {
    cron('H/15 * * * *')
  }
}