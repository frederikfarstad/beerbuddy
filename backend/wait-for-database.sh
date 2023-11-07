#!/bin/bash

set -e

host="$1"
shift
cmd="$@"

until PGPASSWORD=root psql -h "postgres" -U "root" -d "root" -c '\q'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

>&2 echo "Postgres is up - executing command"
exec $cmd