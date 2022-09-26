#!/bin/bash

composer install

# ensure bind mount permissions are what we need
chown -R :www-data /var/www/html

chmod -R 777 /var/www/html/storage /var/www/html/bootstrap/cache

