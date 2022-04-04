pipeline {
    agent { label 'linux' }

    stages {
        stage('Hello') {
            steps {
                
                echo "Running on linux..."
                ls
                pwd
                sh '''
                  ssh -t ubuntu@54.210.172.111 <<-EOF
                  if [ -d "NodeJSJenkins" ]
                  then
                          cd NodeJSJenkins
                          git pull https://github.com/varunsonavni/NodeJSJenkins.git 

                  else
                          git clone https://github.com/varunsonavni/NodeJSJenkins.git
                          cd NodeJSJenkins

                  fi
                  pwd
                  pm2 restart index.js
                  pwd
EOF
'''

        
            }
        }
    }
}
