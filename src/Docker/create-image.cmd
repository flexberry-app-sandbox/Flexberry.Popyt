docker build --no-cache -f SQL\Dockerfile.PostgreSql -t popyt/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t popyt/app ../..
