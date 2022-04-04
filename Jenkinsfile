pipeline {
    agent { label 'linux' }

    stages {
        stage('Hello') {
            
            when {
        allOf {
            expression { env.BRANCH_NAME == "origin/main"}
            }
        }
            steps {
            echo "Running on linux..."
            sh 'ls'
            sh 'pwd'
               
             sh '''
              ssh -t ubuntu@54.210.172.111 <<-EOF
              if [ -d "nodejs_multi_branch" ]
              then
                      cd nodejs_multi_branch
                      git pull https://github.com/varunsonavni/nodejs_multi_branch.git

              else
                      git clone https://github.com/varunsonavni/nodejs_multi_branch.git
                      cd nodejs_multi_branch

              fi
              pwd
              pm2 restart 1
              pwd
EOF
'''
                
            }
        }
    }
}
