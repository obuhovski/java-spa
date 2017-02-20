Руководство по установке проекта
=========================================

Установка окружения (считается что Java 8 установлена в системе):

1. Скачайте Tomcat 9 (Core) по [ссылке](http://tomcat.apache.org/download-90.cgi) и разархивируйте его

2. Скачайте Gradle ver. 3.3 по [ссылке](https://gradle.org/install#manually) 
 1. Распакуйте архив и укажите путь в переменной окружения Path к папке */bin* в распакованном архиве.
 
 
3. Скачайте и установите PostgreSQL по [ссылке](https://www.postgresql.org/download/windows/)
 
  1. Создайте новую роль входа с именем **postgres** и паролем **linux**
  2. Создайте базу с именем **tempdb** и владельцем **postgres**
  3. Создайте в базе новую схему с именем **test**
 
Сборка проекта
=========================================
1. Скачайте проект с этого репозитория

  1. В консоле перейдите в папку с проектом и выполните команду `gradle build`
  2. Скопируйте файл ccm-test.war из папки */build/libs* в папку Tomcat-а */webapps*
  3. Перейдите в папку */bin* Tomcat и запустите файл startup.bat или startup.sh.  