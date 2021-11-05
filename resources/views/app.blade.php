<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="{{ asset('js/app.js') }}" defer></script>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDhRn3Bp2cpbSN8xNlz1yagJ-F_S3hqnt4" type="text/javascript"></script>
    <title>Mapping Customer</title>
</head>

<body>
    <div id="app"></div>
</body>

</html>