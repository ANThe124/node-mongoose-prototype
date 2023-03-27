#!/bin/bash

set -e

kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
