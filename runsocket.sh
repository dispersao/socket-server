npm ci
node src/server3.js `/sbin/ip route|awk '/default/ { print $3 }'`
