pipeline {
    agent { label 'linux' }

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
                echo 'In branch main'
                sh 'pwd'
                sh 'ls'
           
            }
        }
    }
}
