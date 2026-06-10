#!/bin/sh
# Lanzador del servidor de producción de Pudú usando el Node portátil.
export PATH=/tmp/nodejs/bin:$PATH
cd /Users/tom/Pudu/pudu || exit 1
exec node node_modules/next/dist/bin/next start -p 3000
