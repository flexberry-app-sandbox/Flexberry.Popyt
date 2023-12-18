docker build --no-cache -f SQL\Dockerfile.PostgreSql -t popyt-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t popyt-java/app ../../..
