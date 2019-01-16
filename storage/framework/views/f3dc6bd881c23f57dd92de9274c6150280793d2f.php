<?php

?>
<!doctype html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
        <title>Laravel</title>

        <style>
            body{
                margin: 0;
                padding: 0;
            }   
        </style>
    </head>
    <body>
        <div id="root"></div>
        <script src="../js/app.js"></script>
    </body>
</html>
