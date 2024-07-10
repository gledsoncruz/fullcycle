FROM golang:1.22-alpine AS builder

WORKDIR /go/app

COPY . .

RUN go build -ldflags "-s -w" hello.go

FROM scratch
WORKDIR /go/app
COPY --from=builder /go/app .
CMD [ "./hello" ]