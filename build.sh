#!/bin/bash

# version=$1

# 编译ts到build目录
tsc

pkg package.json -t node14-macos-arm64,node14-win-x64
