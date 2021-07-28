#!/bin/bash
echo "Insira o endereço do arquivo que será usado como .env: " 
read envAdd 
mv $envAdd ./backend/.env
npm --prefix ./backend install ./backend && 
npm --prefix ./backend run start ./backend & 
npm --prefix ./frontend install ./frontend && 
npm --prefix ./frontend run start ./frontend
killall node