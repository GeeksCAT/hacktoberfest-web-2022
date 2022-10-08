echo "Replace vars..."
for VAR in `printenv | grep VITE_ | awk -F '=' '{print $1}'`
do
    VALUE=`printenv ${VAR}`
    echo "Changing: ${VAR} --> ${VALUE}"
    exec_cmd="sed -i \"s#__${VAR}__#${VALUE}#g\" /var/www/html/assets/*.js"
    $(eval $exec_cmd);
done


echo "Run nginx..."
exec nginx -g "daemon off;";
