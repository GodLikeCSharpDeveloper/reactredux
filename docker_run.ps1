param (
    [string]$imageName
)

if (-Not $imageName) {
    Write-Host "Имя образа не передано. Выход."
    exit
}

docker run -p 3000:3000 -v ${PWD}/src:/app/src $imageName