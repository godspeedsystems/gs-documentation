# Application deployment procedure

### Prerequisite

- ##### Kubernetes Cluster
- ##### ArgoCD, Argo events and argo workflow installed on kubernetes cluster
- ##### Git repo with CI and application manifests
- ##### Spring boot application already containerized
- ##### Docker registry

### Step 1

- ##### Cloning the git repo

```
$ https://github.com/Mindgreppers/demo-k8s-manifests.git
```

######

### Step 2

- ##### Create event source with ingress for the webhook and git secret token

```
$ cd demo-k8s-manifests/CI-manifests/
$ kubectl create secret generic git-credentials  \
  --from-literal=GIT_TOKEN=TOKEN
$ kubectl create -f spring-webhook.yaml
```

### Step 3

- ##### Create workflow template containing CI steps

```
$ kubectl create -f CI-workflow-templates.yaml
```

### Step 4

- ##### Create CI/CD for the master branch

```
$ kubectl create -f spring-master-CI.yaml
```

### Step 5

- ##### Create CI/CD for the non master branch

```
$ kubectl create -f spring-non-master-CI.yaml
```

### Step 6

- ##### Configure the Argo application to sync the git repo folder with kubernetes

```
$ argocd app create spring-app --repo https://github.com/Mindgreppers/demo-k8s-manifests.git --path spring-app --dest-namespace demo --dest-server https://kubernetes.default.svc --directory-recurse --sync-policy auto
```

### Step 7

- ##### Add the webhook address in the spring boot git repo under webhooks

#### every push will have a CI trigger the application build. The deployment is done for the master branch only.
