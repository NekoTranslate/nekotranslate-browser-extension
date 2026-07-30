#!/usr/bin/env bash

docker run \
    -it \
    -v $(pwd):/app \
    --rm \
    chisatoai-browser-addon \
    /bin/bash

