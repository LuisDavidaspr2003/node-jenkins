pipeline {
    agent any

    stages {
        stage('Clonar el Repositorio') {
            steps {
                git branch: 'main', credentialsId: 'git-jenkins', url: 'https://github.com/LuisDavidaspr2003/node-jenkins.git'
            }
        }

        stage('Construir imagen de Docker') {
            steps {
                script {
                    withCredentials([
                        string(credentialsId: 'MONGO_URI', variable: 'MONGO_URI')
                    ]) {
                        // Aplicar formato a MONGO_URI
                        def formattedMongoUri = formatMongoUri(MONGO_URI)

                        docker.build('proyecto-mini:latest', "--build-arg MONGO_URI=${formattedMongoUri} .")
                    }
                }
            }
        }

        stage('Desplegar contenedores Docker') {
            steps {
                script {
                    withCredentials([
                        string(credentialsId: 'MONGO_URI', variable: 'MONGO_URI')
                    ]) {
                        // Aplicar formato a MONGO_URI
                        def formattedMongoUri = formatMongoUri(MONGO_URI)

                        sh """
                            sed 's|\\${MONGO_URI}|${formattedMongoUri}|g' docker-compose.yml > docker-compose-update.yml
                            docker-compose -f docker-compose-update.yml up -d
                        """
                    }
                }
            }
        }
    }
}

def formatMongoUri(mongoUri) {
    // Verificar si el URI ya tiene el formato correcto
    if (mongoUri.startsWith("mongodb://") || mongoUri.startsWith("mongodb+srv://")) {
        return mongoUri
    }

    // Aplicar formato al URI agregando "mongodb://" al inicio
    return "mongodb://" + mongoUri
}
